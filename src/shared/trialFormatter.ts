/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/shared/trialFormatter.ts
import countryMap from "../infrastructure/data-source/countries.json";

export function formatTrialsNames(trialsData: any): string[] {
  return trialsData.map((trial: any) => {
    const countryName = getCountryName(trial.country);
    return `${trial.name}, ${countryName}`;
  });
}

function getCountryName(countryCode: string): string {
  const country = countryMap.find(
    (c: any) => c.code.toLowerCase() === countryCode.toLowerCase()
  );
  return country ? country.name : countryCode;
}

export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatAndExcludeCountry(trialsData : any) {
  return trialsData.map((item: { name: string; sponsor: any; start_date: any; end_date: any; }) => ({
    name: item.name,
    sponsor: item.sponsor,
    start_date: formatDate(item.start_date),
    end_date: formatDate(item.end_date)
    // The country property is not included, effectively removing it
  }))}
