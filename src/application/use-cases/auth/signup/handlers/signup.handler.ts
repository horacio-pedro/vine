import { UserDAO } from '@domain/dao/user.dao'
import { ICreate } from '@domain/interfaces/user.interface'

export class Signup {
  static async execute(
    data: {
      name: string
      email?: string
      password?: string
      avatarUrl?: string
      publicRepos?: number
      followers?: number
      following?: number
      bio?: string
      userType: string
      dev?: {
        bio: string
        publicRepos: string
        followers: number
        following: number
        resposUrl: string
      }
    },
  ): Promise<ICreate> {
    const user = await UserDAO.signup(data)
    return user
  }
}
