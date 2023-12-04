// src/core/domain/repositories/IClinicalTrialRepository.ts

import { ClinicalTrial } from "../entities/ClinicalTrial";

export interface IClinicalTrialRepository {
  findAll(): Promise<ClinicalTrial[]>;
  findBySponsor(sponsor: string): Promise<ClinicalTrial[]>;
  findByCountry(countryCode: string): Promise<ClinicalTrial[]>;
  findOngoingTrials(): Promise<ClinicalTrial[]>;
  // Additional methods can be added as needed
}
