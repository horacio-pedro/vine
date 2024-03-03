import { IRouter, Router } from 'express'
import { GetSigninController } from '../controllers/getSignin.controller'

class GetSigninRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/signin',
      GetSigninController.get,
    )
  }
}

export const getSigninRouter = new GetSigninRouter().run
