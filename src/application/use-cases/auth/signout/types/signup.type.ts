export type TSignup = {
  first: string
  last: string
  email: string
  password: string
  organizationID: string
  plan: string
}

export type TPermission = {
  role: string
  organizationID: string
  allowed: boolean
  app: [{
    module: string
    action: string[]
  }],
}
