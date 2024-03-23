export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  userType: string
  avatarUrl?: string
  cloudinaryPublicId?: string
  confirmedEmail: boolean
}
