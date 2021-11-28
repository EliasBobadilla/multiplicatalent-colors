/* eslint-disable no-undef  */
/* eslint-disable no-unused-expressions */

const superTest = require('supertest')
const chai = require('chai')
const server = require('../index')
const { expect } = chai

const localhost = superTest(server)

describe('### RESPONSE TYPE JSON ###', () => {
  it('All colors in database', async () => {
    const response = await localhost.get('/colores')
    expect(response.body.length).to.greaterThan(0)
  })

  it('All colors in database -> paged', async () => {
    const response = await localhost.get('/colores/1/3')
    expect(response.status).to.equal(200)
    expect(response.body.results).to.greaterThan(0)
  })

  it('Get color by ID', async () => {
    const response = await localhost.get('/colores/1')
    expect(response.status).to.equal(200)
    expect(response.body.id).to.equal(1)
  })

  it('Add new color', async () => {
    const response = await localhost
      .post('/colores')
      .send({
        name: `Test color ${Math.floor(Math.random() * 100)}`,
        year: 2021,
        color: '#4b4c4c',
        pantone: '19-4022'
      })
    expect(response.status).to.equal(201)
    expect(response.body.id).to.greaterThan(0)
  })
})

describe('### RESPONSE TYPE XML ###', () => {
  it('All colors in database', async () => {
    const response = await localhost.get('/colores?type=xml')
    const isValid = response.text.includes('<colors>') && response.text.includes('</colors>')
    expect(isValid).to.be.true
  })

  it('All colors in database -> paged', async () => {
    const response = await localhost.get('/colores/1/3?type=xml')
    expect(response.status).to.equal(200)
    const isValid = response.text.includes('<results>') && response.text.includes('</results>')
    expect(isValid).to.be.true
  })

  it('Get color by ID', async () => {
    const response = await localhost.get('/colores/1?type=xml')
    expect(response.status).to.equal(200)
    const isValid = response.text.includes('<color>') && response.text.includes('</color>')
    expect(isValid).to.be.true
  })

  it('Add new color', async () => {
    const response = await localhost
      .post('/colores?type=xml')
      .send({
        name: `Test color ${Math.floor(Math.random() * 100)}`,
        year: 2021,
        color: '#4b4c4c',
        pantone: '19-4022'
      })
    expect(response.status).to.equal(201)
    const isValid = response.text.includes('<color>') && response.text.includes('</color>')
    expect(isValid).to.be.true
  })
})

server.close()
