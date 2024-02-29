declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: string;
      PORT: number;
      SECRET_SESSION: string | string[];
      REDIS_URL: string;
      APP_WEB_URL: string;
      MONGODB_URI_DEV: string;
      MONGODB_URI_PRO: string;
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
    }
  }
}
export { }
