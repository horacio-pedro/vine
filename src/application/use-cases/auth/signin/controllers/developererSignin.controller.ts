import passport from 'passport'
import { Request, Response } from 'express'
import { Exception } from '@app/helpers'

export class DeveloperSigninController {
  static get(request: Request, response: Response): void {
    try {
      passport.authenticate('github', { scope: [ 'user:email' ] })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { title: 'Erro 401' })
    }
  }
}
