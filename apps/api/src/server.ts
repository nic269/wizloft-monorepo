import { prisma } from '@wizloft/database'
import { capitalize, formatNumber, pick, unique } from '@wizloft/helpers'
import { log } from "@wizloft/logger";
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express, { type Express } from 'express'
import morgan from 'morgan'

export const createServer = (): Express => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get('/message/:name', (req, res) => {
      return res.json({ message: `hello ${req.params.name}` })
    })
    .get('/status', (_, res) => {
      return res.json({ ok: true })
    })
    .get('/users', async (_, res) => {
      const users = await prisma.user.findMany()
      log("Users fetched", users);
      return res.json(users)
    })
    .get('/helpers-demo', (_, res) => {
      // Demonstrate various helper functions
      const demo = {
        capitalize: capitalize('hello world'),
        formatNumber: formatNumber(1234567),
        pick: pick({ id: 1, name: 'John', email: 'john@example.com', password: 'secret' }, ['id', 'name']),
        unique: unique([1, 2, 2, 3, 3, 4]),
        message: 'Check out the @wizloft/helpers package!'
      }
      return res.json(demo)
    })

  return app
}
