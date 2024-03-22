import { UserModel } from '@domain/models/user.model'
import { ICreate } from '@domain/interfaces/user.interface'

export const UserDAO = {
  signup: (data: ICreate) => UserModel.create(data),
}
