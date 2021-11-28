const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')
const cors = require('cors')

const router = Router()

router.use('/', swaggerUi.serve)
router.get('/', cors(), swaggerUi.setup(swaggerDocument))

module.exports = router
