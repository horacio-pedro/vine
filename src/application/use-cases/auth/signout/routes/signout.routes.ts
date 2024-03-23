import { IRouter, Router } from 'express'
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
      SignoutController.kill,
    )
  }
}

export const signoutRouter = new SignoutRouter().run
