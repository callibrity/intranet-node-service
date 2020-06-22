const request = require('supertest')
const app = require('../app')

describe('Get /employees', () => {
  it('should get array', async () => {
    const res = await request(app).get('/employees') 
    expect(res.statusCode).toEqual(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body[0].name).not.toBe(undefined)
  })
 
  it('should get element with Name \'test\'', async () => {
    const res = await request(app).get('/employees?name=test')
    expect(res.statusCode).toEqual(200)
    expect(res.body[0].name).toBe('test')
  })

  it('should get element with Name \'test\' and Office \'Cincinnati\'', async () => {
    const res = await request(app).get('/employees?name=test&office=cincinnati')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body[0].name).toBe('test')
    expect(res.body[0].office).toBe('Cincinnati')
  })
})

describe('Put /employees', () => {
  it('should update 1 row', async () => {
    const res = await request(app).put('/employees').send({name: 'test', callibrity_email: '123.456@callibrity.com'})
    expect(res.statusCode).toEqual(200)
  })
})