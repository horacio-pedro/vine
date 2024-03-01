import { Request, Response } from 'express'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class GetSigninController {
  static get(request: Request, response: Response): void {
    try {
      const title = 'Entrar'

      // if (request.isAuthenticated()) {
      //   const { confirmedEmail } = request.user as unknown as TUser
      //   if (confirmedEmail === true) {
      //     return response.redirect(Route.GENERAL_DASHBOARD)
      //   }
      // }

      return response.render(Page.SIGNIN, { title })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { title: 'Erro 401' })
    }
  }
}
