const request = require('supertest');
const app = require('../app');
const client = require('../database');

jest.mock('../database');

const calendarRequestString = '?start=Sun%20Apr%2026%202020%2000:00:00%20GMT-0400%20(Eastern%20Daylight%20Time)&end=Sun%20Jun%2007%202020%2000:00:00%20GMT-0400%20(Eastern%20Daylight%20Time';

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  }
)

describe('Get /announcements', () => {
  it('should get the announcements array', () => {
    const res = request(app)
    .get('/announcements')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
    });
  })
}
)

describe('Get /calendar', () => {
  it('should get list of calendar events', () => {
    const res = request(app)
    .get(`/calendar${calendarRequestString}`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
    });
  })
}
)

  