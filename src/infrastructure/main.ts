import { ExpressAdapter } from './adapters'

const httpServer = new ExpressAdapter()
httpServer.templateEngine()
const port = process.env.PORT | 3000
httpServer.register('get', '/', function (response: any) {
  response.render('auth/signin.tsx')
})
httpServer.listen(port).then(() => console.info('listening on port ' + port))
