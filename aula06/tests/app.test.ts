import supertest from "supertest";

import app from "./../src/app";
import { timeStamp } from "console";

const api = supertest(app);

describe("API test", () => {
  it("Should return the correct object", async () => {
    const result = await api.get('/event');

    const date = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    expect(result.body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.stringMatching(date)
    }
    )
  })
});