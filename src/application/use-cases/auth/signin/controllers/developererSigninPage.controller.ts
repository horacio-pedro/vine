import { Request, Response } from 'express'
import { Route } from '@app/use-cases/dashboard/helpers'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class DeveloperSigninPageController {
  static get(request: Request, response: Response): void {
    try {
      const title = 'Entrar'

      if (request.isAuthenticated()) {
        const { confirmedEmail } = request.user as unknown as { confirmedEmail: boolean }
        if (confirmedEmail === true) {
          return response.redirect(Route.DASHBOARD)
        }
      }

      return response.render(Page.DEVELOPER_SIGNIN, { title })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { title: 'Erro 401' })
    }
  }
}
