const { Sequelize, DataTypes } = require('sequelize')
const Config = require('../config')

const sequelize = new Sequelize(`sqlite:${Config.database}`)

const Color = sequelize.define('Color', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  year: DataTypes.INTEGER,
  color: DataTypes.STRING,
  pantone: DataTypes.STRING
}, {
  tableName: 'colors',
  timestamps: false
})

module.exports = Color

/*
  "definitions": {
    "Color": {
      "id": {
        "type": "integer",
        "uniqueItems": true
      },
      "name": {
        "type": "string"
      },
      "year": {
        "type": "integer"
      },
      "color": {
        "type": "string"
      },
      "pantone": {
        "type": "string"
      }
    },
    "Colors": {
      "type": "array",
      "$ref": "#/definitions/Color"
    }
  }
 */
