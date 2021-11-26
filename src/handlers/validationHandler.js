const boom = require('@hapi/boom')

module.exports = (schema, check = 'body') => {
  return function (req, res, next) {
    const { error } = schema.validate(req[check], { errors: { stack: true } })
    error ? next(boom.badRequest(error)) : next()
  }
}
