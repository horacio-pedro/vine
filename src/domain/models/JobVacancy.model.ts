import { getModelForClass } from '@typegoose/typegoose'
import { JobVacancySchema } from '@domain/schemas/JobVacancy.schema'

export const JobVacancyModel = getModelForClass(JobVacancySchema)
