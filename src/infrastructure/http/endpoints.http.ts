import { IRouter, Router } from 'express'
import { getSigninRouter } from '@app/use-cases/auth/signin/routes/get-signin.routes'

class EndPoints {
  router: IRouter
  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.use('/auth',
      getSigninRouter,
    )
  }
}

export const endpoints = new EndPoints().router
