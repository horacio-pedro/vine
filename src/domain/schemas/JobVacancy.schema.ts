/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { randomUUID } from 'crypto'
import { prop } from '@typegoose/typegoose'

enum Hourly {
  Full = 'Fulltime',
  Part = 'Parttime',
}

enum JobType {
  Cont = 'Contract',
  Free = 'Freelance',
}

export class JobVacancySchema {
  @prop({ default: () => randomUUID() })
  public _id!: string

  @prop({ required: true })
  public title!: string

  @prop({ required: true, enum: Hourly })
  public hourly!: Hourly

  @prop({ required: true, enum: JobType })
  public jobType!: JobType

  @prop()
  public experienceLevel!: string
}
