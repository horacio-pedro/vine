import { EventEmitter } from 'node:events'
import { connect, connection } from 'mongoose'
import { formatDate } from '@infra/config/time.util'

class Connection extends EventEmitter {
  constructor(
    url = process.env.DB_CLOUD === false
      ? process.env.MONGODB_URI_LOCAL
      : process.env.MONGODB_URI_CLOUD,
  ) {
    super()
    connect(url)
    this.connection()
  }

  private connection(): void {
    try {
      const db = connection
      db.on('error', console.error.bind(console, `[${formatDate()}] connection error:`))
      db.once('open', () => {
        console.info(
          `[${formatDate()}] Successfully connected to database.\nURI: ${process.env.DB_CLOUD === false
            ? process.env.MONGODB_URI_LOCAL
            : process.env.MONGODB_URI_CLOUD
          }`,
        )
      })
      this.emit('connected', db)
    } catch (error) {
      this.emit('error', error)
    }
  }
}

export default new Connection()
