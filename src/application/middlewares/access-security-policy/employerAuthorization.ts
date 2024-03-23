import { NextFunction, Request, Response } from 'express'
import { Route } from '@app/use-cases/auth/signin/helpers'
import { Notify } from '@app/helpers'

export function employerAuthorization(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (request.isAuthenticated()) {
    return next()
  }
  request.flash(Notify.WARNING, Notify.EXP_SESSION)
  response.redirect(Route.EMP_AUTH_SIGNIN)
}
