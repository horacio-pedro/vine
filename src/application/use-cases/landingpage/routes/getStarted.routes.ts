import { IRouter, Router } from 'express'
import { GetStartedController } from '../controllers/getStarted.controller'

class GetStartedRouter {
  public readonly run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  private router(): void {
    this.run.get(
      '/get-started',
      GetStartedController.get,
    )

  }
}

export const getStartedRouter = new GetStartedRouter().run
