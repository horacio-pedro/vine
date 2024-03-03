import { IRouter, Router } from 'express'
import { landingPageRouter } from '@app/use-cases/landingpage'
import { getSigninRouter } from '@app/use-cases/auth/signin'
import { dashboardRouter } from '@app/use-cases/dashboard'

class EndPoints {
  public readonly router: IRouter

  constructor() {
    this.router = Router()
    this.endpoints()
  }

  private endpoints(): void {
    this.router.use('/',
      landingPageRouter,
    )

    this.router.use('/#app',
      dashboardRouter,
    )

    this.router.use('/#app/auth',
      getSigninRouter,
    )
  }
}

export const endpoints = new EndPoints().router
