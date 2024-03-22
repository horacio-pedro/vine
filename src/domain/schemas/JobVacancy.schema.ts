/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { randomUUID } from 'crypto'
import { Passthrough, Ref, prop } from '@typegoose/typegoose'
import { CompanySchema } from './company.schema'

enum Hourly {
  Full = 'Fulltime',
  Part = 'Parttime',
}

enum JobType {
  Cont = 'Contract',
  Free = 'Freelance',
}

enum ExperienceLevel {
  Jun = 'Júnior',
  Ple = 'Pleno',
  Sen = 'Sênior',
  Exp = 'Expert'
}

enum JobFormat {
  Local = 'Local',
  Remote = 'Remoto',
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

  @prop({ required: true, enum: ExperienceLevel })
  public experienceLevel!: ExperienceLevel

  @prop({ type: () => [String] })
  public skillsAndExpertise!: string[]

  @prop({ required: true })
  public description!: string

  @prop({ required: true })
  public location!: string

  @prop({ required: true, enum: JobFormat })
  public jobFormat!: string

  @prop({ default: 0 })
  public salary!: number

  @prop({ tyep: () => new Passthrough({ experience: String, education: String, language: [String], department: String, role: String }) })
  public jobRequirements!: { experience: string, education: string, language: string[], department: string, role: string }

  @prop()
  public interviewMode!: string

  @prop({ ref: () => CompanySchema })
  public owner!: Ref<CompanySchema>

  @prop({ timestamps: true })
  createdAt!: Date

  @prop({ timestamps: true })
  updatedAt!: Date
}
