import { Request, Response } from 'express'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class GetStartedController {
  static get(request: Request, response: Response): void {
    try {
      return response.render(Page.GETSTART)
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { title: 'Erro 401' })
    }
  }
}
