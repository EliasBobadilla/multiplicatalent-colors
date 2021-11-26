const { Router } = require('express')
const ColorService = require('../services/colors')

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
  '/:id',
  async ({ params: { id } }, res, next) => {
    try {
      const response = await colorService.getById(id)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
