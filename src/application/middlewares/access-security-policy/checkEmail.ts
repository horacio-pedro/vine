import { NextFunction, Request, Response } from 'express'
import { Route } from '@app/use-cases/auth/signin/helpers'
import { IUser, Notify } from '@app/helpers'

export function mailConfirmation(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { confirmedEmail } = request.user as unknown as IUser
  if (request.isAuthenticated() && confirmedEmail === true) {
    return next()
  }
  request.flash(Notify.WARNING, Notify.EMAIL_NOT_CONFIRMED)
  response.redirect(Route.EMP_AUTH_SIGNIN)
}
