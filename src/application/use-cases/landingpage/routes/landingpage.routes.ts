import { IRouter, Router } from 'express'
import { LandingPageController } from '../controllers/landingpage.controller'

class LandingPageRouter {
  public readonly run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  private router(): void {
    this.run.get(
      '/',
      LandingPageController.get,
    )

  }
}

export const landingPageRouter = new LandingPageRouter().run
