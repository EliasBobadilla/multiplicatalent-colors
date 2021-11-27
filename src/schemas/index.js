const joi = require('joi')

const pagedSchema = joi.object({
  page: joi.number().positive().greater(0).required().messages({
    'any.required': 'page is required'
  }),
  total: joi.number().positive().greater(0).required().messages({
    'any.required': 'total is required'
  })
})

module.exports = { pagedSchema }
