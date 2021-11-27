const Color = require('../models/color')

class ColorService {
  all () {
    return Color.findAll({
      attributes: ['id', 'name', 'color']
    })
  }

  getById (id) {
    return Color.findByPk(id)
  }

  async allPaged (page, total) {
    const limit = +total
    const offset = (+page - 1 || 0) * limit
    const result = await Color.findAndCountAll({
      offset,
      limit
    })
    return {
      page,
      totalCount: result.count,
      totalRows: result.rows.length,
      rows: result.rows
    }
  }
}

module.exports = ColorService
