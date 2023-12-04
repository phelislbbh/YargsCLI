// src/application/interfaces/ITrialService.ts

import { TrialDto } from "../dto/TrialDto";

export interface ITrialService {
  getOngoingTrialsBySponsor(sponsor: string): Promise<TrialDto[]>;
  getOngoingTrialsByCountry(countryCode: string): Promise<TrialDto[]>;
}
