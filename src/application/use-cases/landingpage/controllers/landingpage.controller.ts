import { Request, Response } from 'express'
import { Exception } from '@app/helpers'
import { Page } from '../helpers'

export class LandingPageController {
  static get(request: Request, response: Response): void {
    try {
      const title = 'From programmers to businesses'
      return response.render(Page.LANDINGPAGE, { title })
    } catch (err: unknown) {
      response.status(401).render(Exception.E401, { title: 'Erro 401' })
    }
  }
}
