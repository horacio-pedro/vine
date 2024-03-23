import { RateLimiterRedis, IRateLimiterStoreOptions } from 'rate-limiter-flexible'
import Redis from 'ioredis'

const redisClient = new Redis(process.env.REDIS_URL)

redisClient.on('error', err => {
  console.error(err)
  return new Error()
})

const maxWrongAttemptsByIPperDay = 10
const maxConsecutiveFailsByEmailAndIP = 15

export const limiterSlowBruteByIP = new RateLimiterRedis(<IRateLimiterStoreOptions>{
  storeClient: redisClient,
  keyPrefix: 'login_fail_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24,
})

export const limiterConsecutiveFailsByEmailAndIP = new RateLimiterRedis(<IRateLimiterStoreOptions>{
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_email_and_ip',
  points: maxConsecutiveFailsByEmailAndIP,
  duration: 60 * 60,
  blockDuration: 60 * 60,
})
