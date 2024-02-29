import { IUser } from '@domain/interfaces/user.interface'

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
    interface Response {
      renderPDF;
    }
  }
}
export {}
