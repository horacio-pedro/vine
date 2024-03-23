// import { Request, Response } from 'express'
// import { Notify } from '@application/helpers'
// import { GetUserByEmail } from '@application/use-cases/user/handlers/getUserByEmail.handler'
// import { ConfirmTheEmail } from '../handlers/confirmTheEmail.handler'
// import { Notification as eNotification } from '@application/use-cases/user/helpers'
// import { Notification, Route } from '../helpers'
// import { Route as eRoute } from '../../signin/helpers'
// import { TEmail } from '../types'


// export class ConfirmTheEmailController {
//   static async patch(request: Request, response: Response): Promise<Response | unknown> {
//     try {
//       const { email } = request.body as TEmail
//       const user = await GetUserByEmail.execute(email)

//       if (!user) {
//         return [
//           request.flash(Notify.ERROR, eNotification.USER_NOT_EXISTS),
//           response.redirect(eRoute.AUTH_SIGNIN),
//         ]
//       }

//       const confirmedEmail = true

//       await ConfirmTheEmail.execute(confirmedEmail, email)
//         .then(() => {
//           request.flash(Notify.SUCCESS, Notification.EMAIL_CONFIRMED)
//           response.redirect(eRoute.AUTH_SIGNIN)
//         })
//         .catch((err: unknown) => {
//           request.flash(Notify.ERROR, Notification.ERROR_IN_EMAIL_CONFIRMATION + ': ' + err)
//           response.redirect(eRoute.AUTH_SIGNIN)
//         })
//     } catch (err: unknown) {
//       request.flash(Notify.ERROR, Notify.WRONG + err)
//       response.redirect(Route.AUTH_EMAIL_CONFIRM)
//     }
//   }
// }
