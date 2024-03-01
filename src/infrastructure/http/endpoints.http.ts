import { IRouter, Router } from 'express'
import { getSigninRouter } from '@app/use-cases/auth/signin/routes/get-signin.routes'
import { dashboardRouter } from '@app/use-cases/dashboard'

class EndPoints {
  public readonly router: IRouter

  constructor() {
    this.router = Router()
    this.endpoints()
  }

  private endpoints(): void {
    this.router.use('/',
      dashboardRouter,
    )

    this.router.use('/auth',
      getSigninRouter,
    )
  }
}

export const endpoints = new EndPoints().router
