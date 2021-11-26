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
}

module.exports = ColorService
