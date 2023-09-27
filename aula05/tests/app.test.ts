import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");

  it("should return 400 when elements is not a number", async () => {

    const invalid = ['test', '', true, '123'];

    for (const query of invalid){
      const numberQuery = Number(query);

      const result = await api.get(`/fibonacci?elements=${numberQuery}`);
      
      if (isNaN(numberQuery)){
        expect(result.status).toBe(400);
        expect(result.text).toBe("Bad Request")
      }
    }
  })

  it("should return 400 when a element are negative", async () => {
    
    const invalid = [0, -1, -20, -50, -102];

    for (const query of invalid){

      const result = await api.get(`/fibonacci?elements=${query}`);
      
      if (query <= 0){
        expect(result.status).toBe(400);
        expect(result.text).toBe("Bad Request")
      }
    }
  })

  it("should return 200 when a element are numbers", async () => {
    
    const valid = [1, 2, 3, 5, 8, 13];

    for (const query of valid){

      const result = await api.get(`/fibonacci?elements=${query}`);
      
      if (typeof(query) === "number"){
        expect(result.status).toBe(200);
        expect(result.text).toBe("OK")
      }
    }
  })

  })
})