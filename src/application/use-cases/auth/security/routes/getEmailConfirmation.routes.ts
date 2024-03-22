import { IRouter, Router } from 'express'
import { GetEmailConfirmationController } from '../controllers/getEmailConfirmation.controller'

class GetEmailConfirmationRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/email-confirm',
      GetEmailConfirmationController.get,
    )
  }
}

export const getEmailConfirmationRouter = new GetEmailConfirmationRouter().run
