import express from 'express'
import path from 'path'

export const uploadedFiles = express.static(
  path.join(
    __dirname,
    '..', '..', '..', '..',
    '/tmp',
  ),
)
