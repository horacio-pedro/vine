import { join } from 'node:path'

export const localToStoreUploadedFiles = join(
  __dirname,
  '..', '..', '..', '..',
  '/tmp',
)
