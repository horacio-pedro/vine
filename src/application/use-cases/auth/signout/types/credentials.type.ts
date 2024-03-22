import { TUserId } from './userId.type'

export type TCredential = TUserId & {
  name: {
    first: string
    last: string
  }
  email: string
  token: string
  password: string
}
