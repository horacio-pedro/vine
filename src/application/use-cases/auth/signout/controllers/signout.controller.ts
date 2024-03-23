import { NextFunction, Request, Response } from 'express'
import { Notify } from '@app/helpers'
import { Route } from '../../signin/helpers'
import { Notification } from '../helpers'

export class SignoutController {
  static kill(request: Request, response: Response, next: NextFunction): void {
    request.logout((err: unknown) => {
      if (err) {
        return next(err)
      }
      request.flash(Notify.SUCCESS, Notification.END_SESSION)
      response.redirect(Route.GETSTARTED)
    })
  }
}
