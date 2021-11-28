const express = require('express')
const cors = require('cors')
const log = require('log4js')
const colorsRouter = require('./routes/colors')
const swaggerRouter = require('./routes/swagger')
const Config = require('./config')
const notFoundHandler = require('./handlers/notFoundHandler')
const responseHandler = require('./handlers/responseHandler')
const { logErrors, errorHandler, wrapErrors } = require('./handlers/errorHandler')

log.configure({
  appenders: {
    log: {
      type: 'dateFile',
      filename: 'logs/general.log',
      pattern: '.yyyy-MM-dd',
      compress: true
    },
    console: { type: 'console', level: 'ALL' }
  },
  categories: { default: { appenders: ['log', 'console'], level: 'ALL' } }
})

const logger = log.getLogger('default')

const app = express()

app.use(log.connectLogger(logger, { level: 'info' }))
app.use(cors())
app.use(express.json())

// Response handler
app.use(responseHandler)

// Routes
app.use('/', swaggerRouter)
app.use(`/${Config.api}/`, colorsRouter)
app.use(notFoundHandler)

// Error Handlers
app.use(wrapErrors)
app.use(logErrors)
app.use(errorHandler)

const server = app.listen(Config.port, () =>
  logger.info(`app is listening on port ${Config.port}`)
)

module.exports = server
