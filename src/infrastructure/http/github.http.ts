import axios from 'axios'

export const github = axios.create({
  baseURL: process.env.GITHUB_API_URL,
  timeout: 10000,
  headers: { 'Accept': 'application/json' },
})
