const { Router } = require('express')
const ColorService = require('../services/colors')
const validationHandler = require('../handlers/validationHandler')
const { pagedSchema, addSchema } = require('../schemas')

const router = Router()
const colorService = new ColorService()

router.get(
  '/',
  async (req, res, next) => {
    try {
      const response = await colorService.all()
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

router.get(
  '/:page/:total',
  validationHandler(pagedSchema, 'params'),
  async ({ params: { page, total } }, res, next) => {
    try {
      const response = await colorService.allPaged(page, total)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

router.get(
  '/:id',
  async ({ params: { id } }, res, next) => {
    try {
      const response = await colorService.getById(id)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

router.post(
  '/add',
  validationHandler(addSchema),
  async (req, res, next) => {
    try {
      const { body } = req
      const response = await colorService.add(body)
      res.status(201).json(response)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
