import passport from 'passport'
import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { IUser, Notify } from '@app/helpers'
import { Notification, Page, Route } from '../helpers'
import { limiterConsecutiveFailsByEmailAndIP, limiterSlowBruteByIP } from '../middlewares'

export class SigninForEmployerController {
  static async auth(request: Request, response: Response, next: NextFunction): Promise<Response | any> {
    const maxWrongAttemptsByIPperDay = 10
    const maxConsecutiveFailsByEmailAndIP = 15

    const getEmailIPkey = (email: string, ip: string) => `${email}_${ip}`

    const ipAddr = request.ip as unknown as string
    const { email } = z.object({ email: z.string() }).parse(request.body)
    const emailIPkey = getEmailIPkey(email, ipAddr)

    const [resEmailAndIP, resSlowByIP] = await Promise.all([
      limiterConsecutiveFailsByEmailAndIP.get(emailIPkey),
      limiterSlowBruteByIP.get(ipAddr),
    ])

    let retrySecs = 0

    if (resSlowByIP !== null && resSlowByIP.consumedPoints > maxWrongAttemptsByIPperDay) {
      retrySecs = Math.round(resSlowByIP.msBeforeNext / 1000) || 1
    } else if (resEmailAndIP !== null && resEmailAndIP.consumedPoints > maxConsecutiveFailsByEmailAndIP) {
      retrySecs = Math.round(resEmailAndIP.msBeforeNext / 1000) || 1
    }

    if (retrySecs > 0) {
      response.set('Retry-After', String(retrySecs))
      response.status(429).render('error/429', {
        retrySecs,
        pageTitle: `Acesso bloqueado por ${Math.floor(retrySecs % (60 * 60) / 60)} minutos`,
      })

    } else {
      passport.authenticate('local', async function (err: Error, user: IUser, info: { message: string }) {
        if (err) {
          return next(err)
        }
        if (!user) {
          try {
            const promises = [limiterSlowBruteByIP.consume(ipAddr)]
            if (info.message === Notification.SIGNIN_ERROR) {
              promises.push(
                limiterConsecutiveFailsByEmailAndIP.consume(emailIPkey),
              )
            }

            await Promise.all(promises)
            request.flash(Notify.ERROR, Notification.SIGNIN_ERROR)
            response.redirect(Route.EMP_AUTH_SIGNIN)
          } catch (rlRejected: any) {
            if (rlRejected instanceof Error) {
              throw rlRejected
            } else {
              const timeOut = String(
                Math.round(rlRejected.msBeforeNext / 1000),
              )
              response.set('Retry-After', timeOut)
              response.status(429).render(Page.E429, {
                timeOut,
                title: `Acesso bloqueado por ${timeOut}`,
              })
            }
          }
        }
        if (user) {
          if (resEmailAndIP !== null && resEmailAndIP.consumedPoints > 0) {
            await limiterConsecutiveFailsByEmailAndIP.delete(emailIPkey)
          }
          request.logIn(user, function (error: unknown) {
            if (error) {
              return next(error)
            }
            return response.redirect(Route.DASHBOARD)
          })
        }
      })(request, response, next)
    }
  }
}
