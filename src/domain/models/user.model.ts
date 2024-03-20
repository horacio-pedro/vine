/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { randomUUID } from 'crypto'
import { getModelForClass, prop } from '@typegoose/typegoose'

enum UserEnum {
  DEV = 'Developer',
  EMP = 'Employer'
}

class User {
  @prop({ default: () => randomUUID() })
  public _id!: string

  @prop({ required: true })
  public name!: string

  @prop({ unique: true })
  public email!: string

  @prop({ select: false })
  public password!: string

  @prop({ required: true, enum: UserEnum })
  public userType!: UserEnum

  @prop()
  public avatarUrl?: string

  @prop()
  public cloudinaryPublicId?: string
}

export const UserModel = getModelForClass(User)

