const xmlFormatter = require('../utils/xmlFormatter')

module.exports = (req, res, next) => {
  const { type } = req.query
  if (!type || type.toLowerCase() !== 'xml') return next()

  res.set('Content-Type', 'text/xml')
  const originalSend = res.send

  res.send = function () {
    arguments[0] = xmlFormatter(JSON.parse(arguments[0]))
    originalSend.apply(res, arguments)
  }
  next()
}
