export interface IExpress {
	register (method: string, url: string, callback: Function): Promise<void>;
	listen (port: number): Promise<void>;
}
