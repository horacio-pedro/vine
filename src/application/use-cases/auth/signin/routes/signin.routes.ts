import { IRouter, Router } from 'express'
import { SigninForEmployerController } from '../controllers/signinForEmployer.controller'
import { SigninForDeveloperController } from '../controllers/signinForDeveloper.controller'
import { SigninPageForEmployerController } from '../controllers/signinPageForEmployer.controller'
import { SigninPageForDeveloperController } from '../controllers/signinPageForDeveloper.controller'
import passport from 'passport'
import { Route } from '../helpers'

class SigninRouter {
  run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  router() {
    this.run.get(
      '/signin/employer',
      SigninPageForEmployerController.get,
    )
    this.run.get(
      '/signin/developer',
      SigninPageForDeveloperController.get,
    ) 
    this.run.post(
      '/signin/employer',
      SigninForEmployerController.auth,
    )
    this.run.get(
      '/signin/github',
      passport.authenticate('github', { scope: [ 'user:email' ] }),
    )
    this.run.get(
      '/github/callback',
      passport.authenticate('github', { failureRedirect: Route.DEV_AUTH_SIGNIN }),
      SigninForDeveloperController.github,
    )
  }
}

export const signinRouter = new SigninRouter().run
