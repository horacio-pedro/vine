// import { Request, Response } from 'express'
// import { Exception, Notify } from '@application/helpers'
// import { Notification } from '@application/use-cases/user/helpers'
// import { Route as eRoute } from '../../signin/helpers'
// import { Page } from '../helpers'
// import { GetUserById } from '@application/use-cases/user/handlers/getUserById.handler'

// export class GetSetNewPasswordController {
//   static async get(request: Request, response: Response): Promise<Response | unknown> {
//     try {
//       const pageTitle = 'Criar nova password'
//       const { _id } = request.params
//       const user = await GetUserById.execute(_id)

//       if (!user) {
//         return [
//           request.flash(Notify.ERROR, Notification.USER_NOT_EXISTS),
//           response.redirect(eRoute.AUTH_SIGNIN),
//         ]
//       }
      
//       return response.render(Page.AUTH_RESET_PASSWORD, { pageTitle })
//     } catch (err: unknown) {
//       response.status(401).render(Exception.E401, { pageTitle: 'Erro 401' })
//     }
//   }
// }
