import { Request, Response } from 'express'
import { Route } from '@app/use-cases/dashboard/helpers'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class SigninPageForDeveloperController {
  static get(request: Request, response: Response): void {
    try {
      const title = 'Entrar'

      if (request.isAuthenticated()) {
        const { confirmedEmail } = request.user as unknown as { confirmedEmail: boolean }
        if (confirmedEmail === true) {
          return response.redirect(Route.DASHBOARD)
        }
      }

      return response.render(Page.SIGNIN_FOR_DEVELOPER, { title })
    } catch (err: unknown) {
      response.status(500).render(Exception.E500, { title: 'Erro 500' })
    }
  }
}
