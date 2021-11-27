const XMLWriter = require('xml-writer')

module.exports = (values) => {
  const xmlNode = (data) => {
    if (data.color) {
      xml.startElement('color')
      Object.keys(data).forEach(key => {
        xml.writeElement(key, data[key])
      })
      xml.endElement()
    } else {
      xml.startElement('xml')
      Object.keys(data).forEach(key => {
        if (!Array.isArray(data[key])) {
          xml.writeElement(key, data[key])
        } else {
          xml.startElement(key)
          data[key].forEach(x => xmlNode(x))
          xml.endElement()
        }
      })
      xml.endElement()
    }
  }

  const xml = new XMLWriter()
  xml.startDocument('1.0', 'UTF-8')

  if (!Array.isArray(values)) {
    xmlNode(values)
    return xml.toString()
  }

  xml.startElement('colors')
  values.forEach(x => xmlNode(x))

  xml.endDocument()
  return xml.toString()
}
