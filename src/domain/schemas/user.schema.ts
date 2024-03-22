/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { randomUUID } from 'crypto'
import { Passthrough, Ref, plugin, prop } from '@typegoose/typegoose'
import { CompanySchema } from './company.schema'
import * as findOrCreate from 'mongoose-findorcreate'

enum UserEnum {
  DEV = 'Developer',
  EMP = 'Employer'
}

@plugin(findOrCreate)

export class UserSchema {
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

  @prop({ ref: () => CompanySchema })
  public company!: Ref<CompanySchema>

  @prop({ type: () => new Passthrough({ bio: String, publicRepos: String, followers: Number, following: Number, resposUrl: String }, true) })
  public dev?: { bio: string, publicRepos: string, followers: number, following: number, resposUrl: string }

  @prop()
  public location?: string
  
  @prop()
  public githubId?: string
  
  @prop({ timestamps: true })
  createdAt!: Date

  @prop({ timestamps: true })
  updatedAt!: Date
}

