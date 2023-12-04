// src/infrastructure/repositories/ClinicalTrialRepository.ts

import { IClinicalTrialRepository } from "../../core/domain/repositories/IClinicalTrialRepository";
import { ClinicalTrial } from "../../core/domain/entities/ClinicalTrial";
import trialsData from "../data-source/trials.json"; // Assuming the data is stored in a JSON file for this example

export class ClinicalTrialRepository implements IClinicalTrialRepository {
  async findAll(): Promise<ClinicalTrial[]> {
    // Assuming trialsData is imported and has the raw trial data
    return trialsData.map(
      (trial) =>
        new ClinicalTrial(
          trial.name,
          trial.sponsor,
          new Date(trial.start_date), // Convert string to Date
          new Date(trial.end_date),
          trial.country,
          trial.canceled
        )
    );
  }

  async findBySponsor(sponsor: string): Promise<ClinicalTrial[]> {
    const lowerCaseSponsor = sponsor.toLowerCase();

    return trialsData
      .filter((trial) => trial.sponsor.toLowerCase() === lowerCaseSponsor)
      .map(
        (trial) =>
          new ClinicalTrial(
            trial.name,
            trial.sponsor,
            new Date(trial.start_date),
            new Date(trial.end_date),
            trial.country,
            trial.canceled
          )
      );
  }

  async findByCountry(countryCode: string): Promise<ClinicalTrial[]> {
    const lowerCaseCode = countryCode.toLowerCase(); // Convert the input countryCode to lowercase

    return trialsData
      .filter((trial) => trial.country.toLowerCase() === lowerCaseCode) // Convert the trial's country to lowercase for comparison
      .map(
        (trial) =>
          new ClinicalTrial(
            trial.name,
            trial.sponsor,
            new Date(trial.start_date),
            new Date(trial.end_date),
            trial.country,
            trial.canceled
          )
      );
  }

  async findOngoingTrials(): Promise<ClinicalTrial[]> {
    const currentDate = new Date();
    return trialsData
      .filter(
        (trial) =>
          new Date(trial.start_date) <= currentDate &&
          currentDate <= new Date(trial.end_date) &&
          !trial.canceled
      )
      .map(
        (trial) =>
          new ClinicalTrial(
            trial.name,
            trial.sponsor,
            new Date(trial.start_date),
            new Date(trial.end_date),
            trial.country,
            trial.canceled
          )
      );
  }
}
