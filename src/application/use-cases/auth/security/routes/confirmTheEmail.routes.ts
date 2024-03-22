import { IRouter, Router } from 'express'
import { ConfirmTheEmailController } from '../controllers/confirmTheEmail.controller'

class ConfirmTheEmailRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.post(
      '/email-confirm',
      ConfirmTheEmailController.patch,
    )
  }
}

export const confirmTheEmailRouter = new ConfirmTheEmailRouter().run
