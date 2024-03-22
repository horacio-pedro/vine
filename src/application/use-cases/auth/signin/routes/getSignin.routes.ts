import { IRouter, Router } from 'express'
import { EmployerSigninPageController } from '../controllers/employerSigninPage.controller'
import { DeveloperSigninPageController } from '../controllers/developererSigninPage.controller'

class GetSigninRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/signin/employer',
      EmployerSigninPageController.get,
    )
    this.run.get(
      '/signin/developer',
      DeveloperSigninPageController.get,
    ) 
  }
}

export const getSigninRouter = new GetSigninRouter().run
