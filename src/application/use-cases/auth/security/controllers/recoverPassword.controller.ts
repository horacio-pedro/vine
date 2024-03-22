import { Request, Response } from 'express'
import { randomBytes } from 'crypto'
import { Notify } from '@application/helpers'
import { GetUserByEmail } from '@application/use-cases/user/handlers/getUserByEmail.handler'
import { InsertToken } from '../handlers/insertToken.handler'
import { TCredential } from '../../signin/types'
import { Notification, Route } from '../helpers'
import { Route as eRoute } from '../../signin/helpers'
import { bullAdapter } from '@infra/adapters'

export class RecoverPasswordControler {
  static async patch(request: Request, response: Response): Promise<Response | void> {
    try {
      const { email } = request.body as TCredential
      const user = await GetUserByEmail.execute(email)

      if (!user) {
        request.flash(Notify.ERROR, Notification.INVALID_EMAIL)
        response.redirect(Route.RECOVER_PASSWORD)
      } else {
        const token = randomBytes(20).toString('hex')
        const _id = user._id
        const now = new Date()
        const ADD_AN_HOUR = 1
        now.setHours(now.getHours() + ADD_AN_HOUR)

        await InsertToken.execute(_id, token, now).then(async () => {
          bullAdapter.add('RECOVER_PASSWORD', { user, token })
          request.flash(Notify.SUCCESS, Notification.RECOVERED_PASSWORD)
          response.redirect(eRoute.AUTH_SIGNIN)
        }).catch(() => {
          request.flash(Notify.ERROR, Notification.PASSWORD_NOT_RECOVERED)
          response.redirect(Route.RECOVER_PASSWORD)
        })
      }
    } catch (err: unknown) {
      request.flash(Notify.ERROR, Notify.WRONG + err)
      response.redirect(eRoute.AUTH_SIGNIN)
    }
  }
}
