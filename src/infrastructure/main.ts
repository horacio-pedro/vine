import 'dotenv/config'
import '@infra/connections/mongodb.connection'
import { ExpressAdapter } from './adapters'
import { formatDate } from './config/time.util'

const express = new ExpressAdapter()
express.templateEngine()
const port = process.env.PORT | 3000
express.endpoint('get', '/', function (response: any) {
  response.render('auth/signin')
})
express.listen(port).then(() => console.info(`[${formatDate()}] Application running on port ${port}`))
