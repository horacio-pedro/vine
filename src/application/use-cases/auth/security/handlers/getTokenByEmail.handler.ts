import { userDAO } from '@domain/dao/user.dao'

export class GetTokenByEmail {
  static async execute(
    email: string,
  ): Promise<any> {
    const user = await userDAO.getToken(email)
    return user
  }
}
