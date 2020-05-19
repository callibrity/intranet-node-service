const request = require('supertest');
const app = require('../app');

describe('Get /employees', () => {
  it('should get the employees array', () => {
    const res = request(app)
    .get('/employees')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
    });
  })
});