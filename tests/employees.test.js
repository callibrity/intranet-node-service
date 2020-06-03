const request = require('supertest');
const app = require('../app');

describe('Get /employees', () => {
  it('should get employees array with length 6', async () => {
    const res = await request(app).get('/employees');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(6);
  })

  it('should get employees array with length 1', async () => {
    const res = await request(app).get('/employees?name=alec');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(1);
  })

  it('should get employees array with length 0', async () => {
    const res = await request(app).get('/employees?name=alec&office=columbus');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(0);
  })
})