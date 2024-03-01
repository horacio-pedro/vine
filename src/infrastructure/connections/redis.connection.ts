import { createClient } from 'redis'
import { formatDate } from '@infra/config/time.util'

class Redis {
  constructor() {
    this.getConnection()
  }

  getConnection() {
    const client = createClient({
      url: process.env.REDIS_URL,
    })

    client.on('error', err => {
      console.error(`[${formatDate()}] Connection error =====> ${err}`)
    })

    return client
  }
}

export default new Redis()
