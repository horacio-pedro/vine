import { IRouter, Router } from 'express'
import { GetEmployerSigninController } from '../controllers/getEmployerSignin.controller'
import { GetDeveloperSigninController } from '../controllers/getDevelopererSignin.controller copy'

class GetSigninRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/signin/employer',
      GetEmployerSigninController.get,
    )
    this.run.get(
      '/signin/developer',
      GetDeveloperSigninController.get,
    )
    
  }
}

export const getSigninRouter = new GetSigninRouter().run
