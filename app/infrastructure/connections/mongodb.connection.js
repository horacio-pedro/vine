"use strict";
// import { connect, connection } from 'mongoose'
// import { EventEmitter } from 'events'
// class Connection extends EventEmitter {
//   constructor(
//     url = process.env.NODE_ENV === 'development'
//       ? process.env.MONGODB_URI_DEV
//       : process.env.MONGODB_URI_PRO,
//   ) {
//     super()
//     connect(url)
//     this.connection()
//   }
//   private connection(): void {
//     try {
//       const db = connection
//       db.on('error', console.error.bind(console, 'connection error:'))
//       db.once('open', () => {
//         console.info(
//           `Successfully connected to database. URI: ${process.env.DB_CLOUD === 'true'
//             ? process.env.MONGODB_URI_CLOUD
//             : process.env.MONGODB_URI_LOCAL
//           }`,
//         )
//       })
//       this.emit('connected', db)
//     } catch (error) {
//       this.emit('error', error)
//     }
//   }
// }
// export default new Connection()
