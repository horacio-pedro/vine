import { userDAO } from '@domain/dao/user.dao'

export class InsertToken {
  static async execute(
    _id: string,
    token: string,
    now: Date,
  ): Promise<any> {
    const user = await userDAO.insertToken(_id, token, now)
    return user
  }
}
