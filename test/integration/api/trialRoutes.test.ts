//test/integration/api/trialRoutes.test.ts

import { app } from "../../../src/interfaces/api/index";
import request from "supertest";
import { expectedCountryTrials, expectedSponsorTrials } from "../data/mockData";

describe("GET /api/trials/ongoing", () => {
  it("should return all ongoing trials", async () => {
    const response = await request(app).get("/trials/ongoing");
    expect(response.status).toBe(200);
  });
});

describe("GET /api/trials/country/:countryCode", () => {
  it("should return trials for a given country", async () => {
    const countryCode = "FR"; // Replace with an actual country code for testing
    const response = await request(app).get(`/trials/country/${countryCode}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedCountryTrials);
  });
});

describe("GET /api/trials/sponsor/:sponsor", () => {
  it("should return trials for a given sponsor", async () => {
    const sponsor = "Sanofi";
    const response = await request(app).get(`/trials/sponsor/${sponsor}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedSponsorTrials);
  });
});
