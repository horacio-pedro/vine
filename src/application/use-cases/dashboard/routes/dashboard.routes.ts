import { IRouter, Router } from 'express'
import { Route } from '@app/use-cases/auth/signin/helpers'

class DashboardRouter {
  public readonly run: IRouter

  constructor() {
    this.run = Router()
    this.router()
  }

  private router(): void {
    this.run.get('/', (req, res) => res.redirect(Route.GETSTARTED))
  }
}

export const dashboardRouter = new DashboardRouter().run
