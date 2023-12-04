//test/integration/api/trialRoutes.test.ts

import { app } from "../../../src/interfaces/api/index";
import request from "supertest";
import { expectedCountryTrialsFormatted, expectedSponsorFormatted } from "../data/mockData";
import { formatAndExcludeCountry, formatTrialsNames } from "../../../src/shared/trialFormatter";


describe("expected data Format on Trials by country", () => {
  it("should return trials for a given Country", async () => {
    const countryCode = "FR"; // Replace with an actual country code for testing
    const response = await request(app).get(`/trials/country/${countryCode}`);
    const formattedData = formatTrialsNames(response.body)
    expect(response.status).toBe(200);
    expect(formattedData).toEqual(expectedCountryTrialsFormatted);
  });
});

describe("expected data Format on Trials by Sponsor", () => {
  it("should return trials for a given sponsor", async () => {
    const sponsor = "Sanofi";
    const response = await request(app).get(`/trials/sponsor/${sponsor}`);
    const formattedData = formatAndExcludeCountry(response.body)
    expect(response.status).toBe(200);
    expect(formattedData).toEqual(expectedSponsorFormatted);
  });
});
