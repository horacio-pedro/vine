import 'dotenv/config'
import 'module-alias/register'
import '@infra/connections/mongodb.connection'
import { createServer } from 'node:http'
import { expressAdapter } from './adapters'
import { formatDate } from './config/time.util'
import { websocket } from './connections/websocket.connection'

const port = process.env.PORT || 3000
const server = createServer(expressAdapter)
expressAdapter.set('port', port)
websocket(server)

const onError = (error: { syscall: string; code: unknown }) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      break
    default:
      throw error
  }
}

const onListening = () => {
  const addr = server.address() as unknown as { port: number | string }
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.info(`[${formatDate()}] Application running on port ${bind}`)
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
