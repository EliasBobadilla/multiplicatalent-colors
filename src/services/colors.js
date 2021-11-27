const Color = require('../models/color')

class ColorService {
  all () {
    return Color.findAll({
      attributes: ['id', 'name', 'color']
    })
  }

  async allPaged (page, total) {
    const limit = +total
    const offset = (+page - 1 || 0) * limit
    const result = await Color.findAndCountAll({
      attributes: ['id', 'name', 'color'],
      offset,
      limit
    })
    return {
      currentPage: page,
      results: result.count,
      totalRows: result.rows.length,
      rows: result.rows
    }
  }

  getById (id) {
    return Color.findByPk(id)
  }

  add (dto) {
    return Color.create(dto)
  }
}

module.exports = ColorService
