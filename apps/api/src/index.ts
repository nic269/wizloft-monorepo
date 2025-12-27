import { createServer } from './server'
import { log } from "@wizloft/logger";

const port = process.env.PORT || 4001
const server = createServer()

server.listen(port, () => {
  log(`API running on ${port}`)
})
