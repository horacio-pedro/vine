import { randomUUID } from 'crypto'
import { prop } from '@typegoose/typegoose'

export class CompanySchema {
  @prop({ default: () => randomUUID() })
  public _id!: string

  @prop({ unique: true, required: true })
  public name!: string

  @prop({ unique: true, required: true })
  public email!: string

  @prop({ required: true })
  public description!: string

  @prop({ required: true })
  public logo!: string

  @prop({ timestamps: true })
  createdAt!: Date

  @prop({ timestamps: true })
  updatedAt!: Date
}
