import express from 'express'
import path from 'node:path'

export const temporaryStaticFiles = express.static(
  path.join(
    __dirname,
    '..', '..', '..', '..',
    '/tmp',
  ),
)

export const localStorage = path.join(
  __dirname,
  '..', '..', '..', '..',
  '/tmp',
)

export const directoryOfPages = path.join(
  __dirname,
  '..', '..', '..',
  '/application/presenters/pages',
)

export const staticFiles = express.static(
  path.join(
    __dirname,
    '..', '..', '..',
    '/application/presenters/assets',
  ),
)
