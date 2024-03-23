import passport from 'passport'
import { Strategy } from 'passport-github2'
import { UserModel } from '@domain/models/user.model'
import { IUser } from '@app/helpers'

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj: any, done) {
  done(null, obj)
})

export const gitHubStrategy = passport.use(
  new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_URL_CALLBACK,
  },
    // eslint-disable-next-line no-unused-vars
    function (_accessToken: unknown, _refreshToken: unknown, profile: { id: string }, done: (err: unknown, user: IUser) => void) {
      UserModel.findOne({ githubId: profile.id }, function (err: unknown, user: any) {
        if (err) {
          return err
        }

        if (user) {
          console.log(profile)
          return done(err, user)
        } else {
          const newUser = new UserModel()
          newUser.githubId = profile.id
          console.log(profile)
          newUser.save().then(() => {
            if (err) {
              throw err
            }
            done(null, newUser)
          })
        }
      })
    },
  ),
)
