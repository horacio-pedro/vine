import passport from 'passport'
import { Request, Response } from 'express'
import { Exception } from '@app/helpers'

export class SigninForDeveloperController {
  static auth(_request: Request, response: Response): void {
    try {
      passport.authenticate('github', { scope: [ 'user:email' ] })
    } catch (err: unknown) {
      response.status(500).render(Exception.E500, { title: 'Erro 500' })
    }
  }
}
