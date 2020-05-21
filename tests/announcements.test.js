const request = require('supertest');
const app = require('../app');

describe('Get /announcements', () => {
    it('should get the announcements array', async () => {
      const res = await request(app).get('/announcements');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    })
  }
)

describe('Post /announcements', () => {
    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).post('/announcements');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should respond with "Event is missing!"', async () => {
      const res = await request(app).post('/announcements?date=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Event is missing!'})
    })

    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).post('/announcements?event=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should post the event', async () => {
      const res = await request(app).post('/announcements?event=test&date=test');
      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual({"message": 'Event test: test created!'})
    })
  }
)


describe('Delete /announcements', () => {
    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).delete('/announcements');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should respond with "Event is missing!"', async () => {
      const res = await request(app).delete('/announcements?date=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Event is missing!'})
    })

    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).delete('/announcements?event=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should delete the event', async () => {
      const res = await request(app).delete('/announcements?event=test&date=test');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({"message": 'Event test: test deleted!'})
    })
  }
)

describe('Put /announcements', () => {
    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).put('/announcements');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should respond with "Event is missing!"', async () => {
      const res = await request(app).put('/announcements?date=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Event is missing!'})
    })

    it('should respond with "Date is missing!"', async () => {
      const res = await request(app).put('/announcements?event=test');
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({"message": 'Date is missing!'})
    })

    it('should update the event', async () => {
      const res = await request(app).put('/announcements?event=test&date=test&update=update');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({"message": 'Event updated to test: update!'})
    })
  }
)


  