import { Request, Response } from 'express'
import { genSalt, hash } from 'bcrypt'
import { Notify } from '@application/helpers'
import { Notification as eNotification } from '@application/use-cases/user/helpers'
import { GetTokenByEmail } from '../handlers/getTokenByEmail.handler'
import { Route as eRoute } from '../../signin/helpers'
import { TCredential } from '../../signin/types'
import { Notification, Route } from '../helpers'

export class SetNewPasswordController {
  static async patch(request: Request, response: Response): Promise<Response | unknown> {
    try {
      const { email, token, password }: TCredential = request.body
      const [user, salt] = await Promise.all([GetTokenByEmail.execute(email), genSalt(16)])
      const currentTime = new Date()

      if (!user) {
        return [
          request.flash(Notify.ERROR, eNotification.INVALID_USER),
          response.redirect(Route.RECOVER_PASSWORD),
        ]
      }
      
      const originalToken = user.passwordResetToken

      if (token !== originalToken) {
        return [
          request.flash(Notify.WARNING, Notification.INVALID_TOKEN),
          response.redirect(Route.RECOVER_PASSWORD),
        ]
      }

      if (currentTime > user.passwordResetExpires) {
        return [
          request.flash(Notify.WARNING, Notification.EXPIRED_TOKEN),
          response.redirect(Route.RECOVER_PASSWORD),
        ]
      }

      user.password = password
      user.password = await hash(user.password, salt)

      await user.save().then(() => {
        request.flash(Notify.SUCCESS, Notification.RESETED_PASSWORD)
        response.redirect(eRoute.AUTH_SIGNIN)
      }).catch(() => {
        request.flash(Notify.ERROR, Notification.PASSWORD_NOT_RESETED)
        response.redirect(eRoute.AUTH_SIGNIN)
      })
    } catch (err: unknown) {
      request.flash(Notify.ERROR, Notify.WRONG + err)
      response.redirect(eRoute.AUTH_SIGNIN)
    }
  }
}
