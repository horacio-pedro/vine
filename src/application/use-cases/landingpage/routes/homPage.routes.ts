import { IRouter, Router } from 'express'
import { HomePageController } from '../controllers/homePage.controller'

class LandingPageRouter {
  public readonly run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  private router(): void {
    this.run.get(
      '/',
      HomePageController.get,
    )

  }
}

export const landingPageRouter = new LandingPageRouter().run
