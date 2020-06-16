const request = require('supertest')
const app = require('../app')

describe('Get /employees', () => {
  it('should get array', async () => {
    const res = await request(app).get('/employees') 
    expect(res.statusCode).toEqual(200)
    expect(res.body.rows).toBeInstanceOf(Array)
    expect(res.body.rows[0].Name).not.toBe(undefined)
  })
 
  it('should get element with Name \'test\'', async () => {
    const res = await request(app).get('/employees?name=test')
    expect(res.statusCode).toEqual(200)
    expect(res.body.rows[0].Name).toBe('test')
  })

  it('should get element with Name \'test\' and Office \'Cincinnati\'', async () => {
    const res = await request(app).get('/employees?name=test&office=cincinnati')
    expect(res.statusCode).toEqual(200)
    expect(res.body.rows).toBeInstanceOf(Array)
    expect(res.body.rows[0].Name).toBe('test')
    expect(res.body.rows[0].Office).toBe('Cincinnati')
  })
})

describe('Put /employees', () => {
  it('should update 1 row', async () => {
    const res = await request(app).put('/employees?name=test').send({Name: 'test'})
    expect(res.statusCode).toEqual(200)
    expect(res.body.rowCount).toBe(1)
  })
})