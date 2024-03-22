import { IRouter, Router } from 'express'
import { authorization } from '@application/middlewares/access-security-policy'
import { SignoutController } from '../controllers/signout.controller'

class SignoutRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.controller()
  }

  controller() {
    this.run.get(
      '/signout',
      authorization,
      SignoutController.kill,
    )
  }
}

export const signoutRouter = new SignoutRouter().run
