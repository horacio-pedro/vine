export interface ICreate {
  name: string
  email?: string
  password?: string
  avatarUrl?: string
  publicRepos?: number
  followers?: number
  following?: number
  bio?: string
  userType: string
  dev?: {
    bio: string
    publicRepos: string
    followers: number
    following: number
    resposUrl: string
  }
}
