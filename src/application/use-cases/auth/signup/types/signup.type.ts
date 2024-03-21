import { z } from 'zod'

export const TSignup = z.object({
  username: z.string(),
  first: z.string(),
  last: z.string(),
  email: z.string(),
  password: z.string(),
  userType: z.enum(['Developer', 'Employer']),
})
