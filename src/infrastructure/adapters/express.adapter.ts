import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import passport from 'passport'
import session from 'express-session'
import fileUpload from 'express-fileupload'
import { expressExtend } from 'jsxte'
import { endpoints } from '@infra/http/endpoints.http'
import { connectMongo, cookieConfiguration, directive, directoryOfPages, localStorage, staticFiles, temporaryStaticFiles } from './utils'

class App {
  public readonly app: express.Application

  constructor() {
    this.app = express()
    this.templateEngine()
    this.securityHeaders()
    this.staticRoutes()
  }

  private templateEngine(): void {
		expressExtend(this.app)
    this.app.set('views', directoryOfPages)
    this.app.use(express.json())
  }

  private securityHeaders(): void {
    this.app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
    this.app.use(
      session({
        cookie: cookieConfiguration,
        store: connectMongo,
        secret: process.env.SECRET_SESSION,
        saveUninitialized: false,
        resave: false,
      }),
    )
    this.app.use(passport.initialize())
    this.app.use(passport.session())
    this.app.use(compression())
    this.app.use(helmet.contentSecurityPolicy({ directives: directive }))
    this.app.use(helmet.crossOriginEmbedderPolicy({ policy: 'credentialless' }))
    this.app.use(helmet.crossOriginOpenerPolicy())
    this.app.use(helmet.crossOriginResourcePolicy())
    this.app.use(helmet.originAgentCluster())
    this.app.use(helmet.strictTransportSecurity())
    this.app.use(helmet.xContentTypeOptions())
    this.app.use(helmet.xDnsPrefetchControl())
    this.app.use(helmet.xDownloadOptions())
    this.app.use(helmet.xFrameOptions())
    this.app.use(helmet.dnsPrefetchControl())
    this.app.use(helmet.xXssProtection())
    this.app.use(helmet.frameguard())
    this.app.use(helmet.hidePoweredBy())
    this.app.use(helmet.hsts())
    this.app.use(helmet.ieNoOpen())
    this.app.use(helmet.noSniff())
    this.app.use(helmet.permittedCrossDomainPolicies())
    this.app.use(helmet.referrerPolicy())
    this.app.use(helmet.xssFilter())
    this.app.use(helmet.xPoweredBy())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private staticRoutes(): void {
    this.app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
    this.app.use(staticFiles)
    this.app.use(fileUpload({ useTempFiles: true, tempFileDir: localStorage, limits: { fileSize: 50 * 1024 * 1024 } }))
    this.app.use('/file', temporaryStaticFiles)
    this.app.use(endpoints)
  }
}

export const expressAdapter = new App().app
