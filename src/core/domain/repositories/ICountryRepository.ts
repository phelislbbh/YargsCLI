export interface ICountry {
  code: string;
  name: string;
}

export interface ICountryRepository {
  getAllCountries(): Promise<ICountry[]>;

  getCountryByCode(code: string): Promise<ICountry | null>;
}
