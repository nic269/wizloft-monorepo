import { prisma } from '@wizloft/database'
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

  return app
}
