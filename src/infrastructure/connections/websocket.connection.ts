import { Server, Socket } from 'socket.io'

const websocket = (server: any) => {
  const io = new Server(server)

  io.on('connection', (socket: Socket) => {
    console.log(socket.id)
  })
}

export { websocket }
