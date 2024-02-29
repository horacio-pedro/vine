import path from 'path'
import express from 'express'

export const assetsDirectory = express.static(
  path.join(
    __dirname,
    '..', '..', '..',
    '/app/presenters/assets',
  ),
)
