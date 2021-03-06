const Config = require('../config')

const scheme = Config.dev ? 'HTTP' : 'HTTPS'

module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.1',
    title: 'Colors',
    description: 'Backend Developer challenge for MultiplicaTalent company',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  basePath: '/',
  schemes: [
    scheme
  ],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  paths: {
    '/colores': {
      get: {
        tags: [
          'Colors'
        ],
        summary: 'Get all colors in system',
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'response type',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Colors'
            }
          }
        }
      },
      post: {
        tags: [
          'Colors'
        ],
        summary: 'Add new color',
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'response type',
            required: false,
            type: 'string'
          },
          {
            in: 'body',
            name: 'body',
            description: 'Color model',
            required: true,
            schema: {
              $ref: '#/definitions/Color'
            }
          }
        ],
        responses: {
          201: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Colors'
            }
          }
        }
      }
    },
    '/colores/{id}': {
      get: {
        tags: [
          'Colors'
        ],
        summary: 'Get color by Id',
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'response type',
            required: false,
            type: 'string'
          },
          {
            name: 'id',
            in: 'path',
            description: 'color Id',
            required: true,
            type: 'number'
          }
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Colors'
            }
          }
        }
      }
    },
    '/colores/{page}/{total}': {
      get: {
        tags: [
          'Paged Colors'
        ],
        summary: 'Get all colors in system paged',
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'response type',
            required: false,
            type: 'string'
          },
          {
            name: 'page',
            in: 'path',
            description: 'solicited page',
            required: true,
            type: 'number'
          },
          {
            name: 'total',
            in: 'path',
            description: 'page limit',
            required: true,
            type: 'number'
          }
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Colors'
            }
          }
        }
      }
    }
  },
  definitions: {
    Color: {
      required: [
        'name',
        'year',
        'color',
        'pantone'
      ],
      properties: {
        id: {
          type: 'integer',
          uniqueItems: true
        },
        name: {
          type: 'string'
        },
        year: {
          type: 'integer'
        },
        color: {
          type: 'string'
        },
        pantone: {
          type: 'string'
        }
      }
    },
    Colors: {
      type: 'array',
      $ref: '#/definitions/Color'
    },
    PagedColors: {
      properties: {
        currentPage: {
          type: 'integer'
        },
        results: {
          type: 'integer'
        },
        totalRows: {
          type: 'integer'
        },
        rows: {
          type: 'array',
          $ref: '#/definitions/Color'
        }
      }
    }
  }
}
