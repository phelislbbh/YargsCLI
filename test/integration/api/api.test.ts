//test/integration/api/api.test.ts

import { app } from "../../../src/interfaces/api/index";
import request from "supertest";

describe("Clinical Trials API", () => {
  it("should return all ongoing trials", async () => {
    const response = await request(app).get("/trials/ongoing");
    expect(response.status).toBe(200);
  });

  it("should return trials for a given sponsor", async () => {
    const sponsor = "Sanofi";
    const response = await request(app).get(`/trials/sponsor/${sponsor}`);
    expect(response.status).toBe(200);
  });

  it("should return trials for a given country", async () => {
    const countryCode = "FR";
    const response = await request(app).get(`/trials/country/${countryCode}`);
    expect(response.status).toBe(200);
  });

  it("should return an error for an invalid country code", async () => {
    const countryCode = "InvalidCountryCode";

    const response = await request(app).get(
      `/api/trials/country/${countryCode}`
    );

    expect(response.status).toBe(404);
  });
});
