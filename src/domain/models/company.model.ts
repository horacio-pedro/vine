import { getModelForClass } from '@typegoose/typegoose'
import { CompanySchema } from '@domain/schemas/company.schema'

export const CompanyModel = getModelForClass(CompanySchema)
