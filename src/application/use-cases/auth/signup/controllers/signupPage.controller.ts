import { Request, Response } from 'express'
import { z } from 'zod'
import { Exception } from '@app/helpers'
import { Page, Route } from '../helpers'

export class SignupPageController {
  static async get(request: Request, response: Response): Promise<Response | any> {
    try {
      const pageTitle = 'Criar conta'

      if (request.isAuthenticated()) {
        const { confirmedEmail } = z.object({ confirmedEmail: z.boolean() }).parse(request.user)
        if (confirmedEmail === true) {
          response.redirect(Route.ROOT_APP)
        }
      }

      return response.render(Page.AUTH_SIGNUP, { pageTitle })
    } catch (err: unknown) {
      response.status(500).render(Exception.E500, { pageTitle: 'Erro 500' })
    }
  }
}
