const joi = require('joi')

const pagedSchema = joi.object({
  page: joi.number().positive().greater(0).required().messages({
    'any.required': 'page is required'
  }),
  total: joi.number().positive().greater(0).required().messages({
    'any.required': 'total is required'
  })
})

const addSchema = joi.object({
  name: joi.string().min(3).required().messages({ 'any.required': 'name is required' }),
  year: joi.number().required().messages({ 'any.required': 'number is required' }),
  color: joi.string().min(7).required().messages({ 'any.required': 'type1 is required' }),
  pantone: joi.string().min(5).required().messages({ 'any.required': 'type1 is required' })
})

module.exports = { pagedSchema, addSchema }
