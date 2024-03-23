import { NextFunction, Request, Response } from 'express'

export const e404 = function (request: Request, response: Response) {
  response.status(404).render('error/404', { pageTitle: 'Erro 404' })
}

export const e500 = function (err: unknown, request: Request, response: Response, next: NextFunction) {
  if (response.headersSent) {
    return next(err)
  }
  response.status(500).render('error/500', { pageTitle: 'Erro 500', err })
}
