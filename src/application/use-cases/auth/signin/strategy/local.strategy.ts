import { PassportStatic } from 'passport'
import { Strategy } from 'passport-local'
import { compare } from 'bcrypt'
import { Request } from 'express'
import { UserDAO } from '@domain/dao/user.dao'
import { Notification } from '@app/use-cases/auth/signin/helpers'

export const localStrategy = (passport: PassportStatic) => {
  passport.use(
    new Strategy({ usernameField: 'email' }, (email, password, done) => {
      UserDAO.findOneByEmail(email)
        .select('email password')
        .then((user) => {
          if (!user) {
            done(null, false, {
              message: Notification.SIGNIN_ERROR,
            })
          }
          if (user) {
            compare(password, user.password, (err, match: boolean) => {
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
    (_request: Request, user: any, done: any) => {
      done(null, user)
    },
  )

  passport.deserializeUser(async (id: string, done) => {
    const user = await UserDAO.findOneById(id)
    if (user) {
      done(null, user)
    }
  })
}
