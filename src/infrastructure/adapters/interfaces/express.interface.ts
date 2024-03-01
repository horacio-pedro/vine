/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */
export default interface IExpress {
	endpoint(method: string, url: string, callback: Function): Promise<void>
	use(callback: Function): Promise<void>
	templateEngine(): void
	staticRoutes(): void
	listen(port: number): Promise<void>
}
