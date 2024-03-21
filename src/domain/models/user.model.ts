import { getModelForClass } from '@typegoose/typegoose'
import { UserSchema } from '@domain/schemas/user.schema'

export const UserModel = getModelForClass(UserSchema)

