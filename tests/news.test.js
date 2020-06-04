const request = require("supertest");
const app = require("../app");

describe("Get /news", () => {
  it("should get the news array", async () => {
    const res = await request(app).get("/news");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
}
);

describe("Post /news", () => {
  it("should respond with \"Date is missing!\"", async () => {
    const res = await request(app).post("/news");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should respond with \"Event is missing!\"", async () => {
    const res = await request(app).post("/news?date=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Event is missing!"});
  });

  it("should respond with \"Date is missing!\" again", async () => {
    const res = await request(app).post("/news?event=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should post the event", async () => {
    const res = await request(app).post("/news?event=test&date=test");
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({"message": "Event test: test created!"});
  });
}
);


describe("Delete /news", () => {
  it("should respond with \"Date is missing!\"", async () => {
    const res = await request(app).delete("/news");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should respond with \"Event is missing!\"", async () => {
    const res = await request(app).delete("/news?date=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Event is missing!"});
  });

  it("should respond with \"Date is missing!\" again", async () => {
    const res = await request(app).delete("/news?event=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should delete the event", async () => {
    const res = await request(app).delete("/news?event=test&date=test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({"message": "Event test: test deleted!"});
  });
}
);
 
describe("Put /news", () => {
  it("should respond with \"Date is missing!\"", async () => {
    const res = await request(app).put("/news");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should respond with \"Event is missing!\"", async () => {
    const res = await request(app).put("/news?date=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Event is missing!"});
  });

  it("should respond with \"Date is missing!\" again", async () => {
    const res = await request(app).put("/news?event=test");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"message": "Date is missing!"});
  });

  it("should update the event", async () => {
    const res = await request(app).put("/news?event=test&date=test&update=update");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({"message": "Event updated to test: update!"});
  });
}
);


  