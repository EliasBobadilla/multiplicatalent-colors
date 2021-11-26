const Color = require('../models/color')

class ColorService {
  all () {
    return Color.findAll({
      attributes: ['id', 'name', 'color']
    })
  }
}

module.exports = ColorService
