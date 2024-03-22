import { Strategy } from 'passport-local'
import { compare } from 'bcrypt'
import { Request } from 'express'
import { userDAO } from '@domain/dao/user.dao'
import { IUser } from '@domain/interfaces/user.interface'
import { Notification } from '@application/use-cases/auth/signin/helpers'

export const localStrategy = (passport: {
  use: (fn: Strategy) => void;
  serializeUser: (fn: (request: any, user: any, done: any) => void) => void;
  deserializeUser: (fn: (id: any, done: any) => void) => void;
}) => {
  passport.use(
    new Strategy({ usernameField: 'email' }, (email, password, done) => {
      userDAO.findByEmail(email)
        .select('email password')
        .then((user) => {
          if (!user) {
            done(null, false, {
              message: Notification.SIGNIN_ERROR,
            })
          }
          if (user) {
            compare(password, user!.password, (err, match: boolean) => {
              if (err) {
                return done(err)
              }
              if (match) {
                return done(null, user)
              }
              return done(null, false, {
                message: Notification.SIGNIN_ERROR,
              })
            })
          }
        })
        .catch((error: Error) => {
          if (error) {
            return done(error)
          }
        })
    }),
  )

  passport.serializeUser(
    (_request: Request, user: IUser, done) => {
      done(null, user)
    },
  )

  passport.deserializeUser(async (id: string, done) => {
    const user = await userDAO.findOneById(id)
    if (user) {
      done(null, user)
    }
  })
}
