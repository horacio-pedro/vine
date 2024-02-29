export const cookieConfiguration = {
  path: '/',
  secure: process.env.NODE_ENV === 'development' ? false : true,
  maxAge: 31 * 24 * 60 * 60 * 100,
}
