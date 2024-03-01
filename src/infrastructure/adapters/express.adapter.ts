import express, { Request, Response } from 'express'
import { expressExtend } from 'jsxte'
import IExpress from './interfaces'
import { assetsDirectory, pages } from './utils'

export default class ExpressAdapter implements IExpress {
	public app: express.Application | any

	constructor () {
		this.app = express()
	}
	
	public templateEngine(): void {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		expressExtend(this.app)
    this.app.set('views', pages)
    this.app.use(express.json())
    this.app.use(assetsDirectory)
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	async endpoint(method: string, url: string, callback: Function): Promise<void> {
		this.app[method](url, async function (request: Request, response: Response) {
			const output = await callback(response)
			return output
		})
	}

	async listen(port: number): Promise<void> {
		return this.app.listen(port)
	}

}
