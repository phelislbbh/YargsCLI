import axios from "axios";
import { handler } from "../../../src/interfaces/cli/commands/trials/country";
import { expectedSponsorFormatted } from "../data/mockData";

// Mocking axios and the logger
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("../../../src/shared/logger", () => ({
  setOutputFile: jest.fn(),
}));

describe("sponsor command handler", () => {
  const mockApiResponse = {
    data: expectedSponsorFormatted,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedAxios.get.mockResolvedValue(mockApiResponse);
  });

  it.skip("should fetch and display trial data for a given sponsor", async () => {
    const mockCountry = "FR";

    // Define mockArgs with the correct interface
    const mockArgs = {
      _: ["trials", "country"],
      $0: "inato-cli",
      countryCode: mockCountry,
      "country-code": mockCountry,
    };
    await handler(mockArgs);

    // Assertions to ensure the axios call is made correctly
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `http://localhost:8080/trials/country/${mockCountry}`
    );
  });
});
