import { IRouter, Router } from 'express'
import { SignupController } from '../controllers/signup.controller'
import { SignupPageController } from '../controllers/signupPage.controller'

class SignupRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/signup/employer',
      SignupPageController.get,
    )
    this.run.post(
      '/signup/employer',
      SignupController.post,
    ) 
  }
}

export const signupRouter = new SignupRouter().run
