import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

  it("should return 400 when elements is not a number", async () => {
      const result = await api.get(`/fibonacci?elements=NaN`);
      expect(result.status).toBe(400)
  })

  it("should return 400 when a element are <1", async () => {
      const result = await api.get(`/fibonacci?elements=0`);
      expect(result.status).toBe(400)
  })

  it("should return 404 when there is no params", async () => {
      const result = await api.get(`/fibonacci;`);
      expect(result.status).toBe(404)
  })

  it("should return 200 its ok", async () => {
    const result = await api.get(`/fibonacci?elements=5`);
    expect(result.status).toBe(200);
    expect(result.body).toEqual([0,1,1,2,3])
  })

})