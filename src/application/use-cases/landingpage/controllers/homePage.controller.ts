import { Request, Response } from 'express'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class HomePageController {
  static get(request: Request, response: Response): void {
    try {
      const title = 'From programmers to businesses'
      return response.render(Page.HOMEPAGE, { title })
    } catch (err: unknown) {
      response.status(500).render(Exception.E500, { title: 'Erro 401' })
    }
  }
}
