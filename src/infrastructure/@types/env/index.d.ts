declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: string;
      PORT: number;
      SECRET_SESSION: string | string[];
      REDIS_URL: string;
      APP_WEB_URL: string;
      MONGODB_URI_LOCAL: string;
      MONGODB_URI_CLOUD: string;
      CLOUD_FOLDER: string;
      AUTH_SECRET: string
      TOKEN_EXPIRATION_TIME: string
      APP_API_URL: string
      MAIL_HOST: string
      MAIL_PORT: number
      MAIL_USER: string
      MAIL_PASS: string
      MAIL_RPLY: string
      OUTGOING_MAIL: string
      REDIS_HOST: string
      REDIS_PORT: number
      REDIS_PASSWORD: string
      CLOUDINARY_NAME: string
      CLOUDINARY_FOLDER_NAME: string
      CLOUDINARY_API_KEY: string
      CLOUDINARY_API_SECRET: string
      SECRET_SESSION: string
      DB_CLOUD: boolean
      SESSION_EXPIRE: number
      GITHUB_API_URL: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      GITHUB_URL_CALLBACK: string
    }
  }
}
export { }
