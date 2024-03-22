import { Request, Response } from 'express'
import { github } from '@infra/http/github.http'
import { TSignup } from '../types'

export class SignupController {
  static async post(request: Request, response: Response): Promise<Response | any> {
    try {
      const { first, last, email, password, username, userType } = TSignup.parse(request.body)
      const developer = await github.get(`/${username}`)
      console.log(developer)

      return response.json({
        first,
        last,
        email,
        password,
        userType,
      })
    } catch (error: unknown) {
      return error
    }
  }
}
