import supertest from "supertest";

import app from "./../src/app";
import { timeStamp } from "console";

const api = supertest(app);

describe("API test", () => {
  it("Should return the correct object", async () => {
    const result = await api.get('/event');

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          image: expect.any(String),
          date: expect.any(timeStamp)
        })
      ])
    )
  })
});