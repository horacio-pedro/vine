import { IRouter, Router } from 'express'
import { GetStartedPageController } from '../controllers/getStartedPage.controller'

class GetStartedRouter {
  public readonly run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  private router(): void {
    this.run.get(
      '/get-started',
      GetStartedPageController.get,
    )

  }
}

export const getStartedRouter = new GetStartedRouter().run
