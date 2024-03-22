import { userDAO } from '@domain/dao/user.dao'


export class ConfirmTheEmail {
  static async execute(
    confirmedEmail: boolean,
    email: string,
  ): Promise<any> {
    const user = await userDAO.emailConfirm({
      confirmedEmail,
      email,
    })
    return user
  }
}
