import { Request, Response } from 'express'
import { Page } from '../helpers'
import { Exception } from '@application/helpers'

export class GetRecoverPasswordController {
  static get(request: Request, response: Response): void {
    try {
      const pageTitle = 'Recuperar a password'
      return response.render(Page.AUTH_RECOVER_PASSWORD, { pageTitle })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { pageTitle: 'Erro 401' })
    }
  }
}
