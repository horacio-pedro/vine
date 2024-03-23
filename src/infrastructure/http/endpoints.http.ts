import { IRouter, Router } from 'express'
import { e404, e500 } from '@app/middlewares/errors'
import { getStartedRouter, landingPageRouter } from '@app/use-cases/landingpage'
import { signinRouter } from '@app/use-cases/auth/signin'
import { dashboardRouter } from '@app/use-cases/dashboard'
import { signupRouter } from '@app/use-cases/auth/signup'

class EndPoints {
  public readonly router: IRouter

  constructor() {
    this.router = Router()
    this.endpoints()
  }

  private endpoints(): void {
    this.router.use('/',
      landingPageRouter,
      getStartedRouter,
    )

    this.router.use('/app',
      dashboardRouter,
    )

    this.router.use('/app/auth',
      signinRouter,
      signupRouter,
    )

    this.router.use(e404)
    this.router.use(e500)
  }
}

export const endpoints = new EndPoints().router
