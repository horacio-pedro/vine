import { Request, Response } from 'express'
import { TUser } from '@application/helpers'
import { Page, Route } from '../helpers'
import { Exception } from '@application/helpers'

export class GetEmailConfirmationController {
  static get(request: Request, response: Response): void {
    try {
      const pageTitle = 'Confirmar o email'
      const { email } = request.query as { email: string }

      if (request.isAuthenticated()) {
        const { confirmedEmail } = request.user as unknown as TUser
        if (confirmedEmail === true) {
          return response.redirect(Route.REDIRECTOR)
        }
      }

      return response.render(Page.AUTH_EMAIL_CONFIRM, { pageTitle, email })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { pageTitle: 'Erro 401' })
    }
  }
}
