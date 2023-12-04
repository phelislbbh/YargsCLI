// src/infrastructure/repositories/ClinicalTrialRepository.ts
import {
  ICountryRepository,
  ICountry,
} from "../../core/domain/repositories/ICountryRepository";

export class CountryRepository implements ICountryRepository {
  // Assume we have a data source (like a JSON file or database)
  private dataSource: ICountry[];

  constructor(dataSource: ICountry[]) {
    this.dataSource = dataSource;
  }

  async getAllCountries(): Promise<ICountry[]> {
    // In a real-world scenario, this interact with a database
    return this.dataSource;
  }

  async getCountryByCode(code: string): Promise<ICountry | null> {
    const lowerCaseCode = code.toLowerCase();
    const country = this.dataSource.find(
      (country) => country.code.toLowerCase() === lowerCaseCode
    );
    return country || null;
  }
}
