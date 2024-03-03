import { IRouter, Router } from 'express'
import { landingPageRouter } from '@app/use-cases/landingpage'
import { getSigninRouter } from '@app/use-cases/auth/signin/routes/get-signin.routes'

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

    this.router.use('/auth',
      getSigninRouter,
    )
  }
}

export const endpoints = new EndPoints().router
