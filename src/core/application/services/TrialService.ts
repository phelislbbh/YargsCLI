// src/application/services/TrialService.ts

import { ITrialService } from "../interfaces/ITrialService";
import { IClinicalTrialRepository } from "../../domain/repositories/IClinicalTrialRepository";
import { TrialDto } from "../dto/TrialDto";
import { TrialMapper } from "../mapper/TrialMapper";
import { ClinicalTrial } from "../../domain/entities/ClinicalTrial";

export class TrialService implements ITrialService {
  constructor(private trialRepository: IClinicalTrialRepository) {}

  async getOngoingTrialsBySponsor(sponsor: string): Promise<TrialDto[]> {
    const trials = await this.trialRepository.findBySponsor(sponsor);
    const ongoingTrials = trials.filter((trial) => this.isOngoing(trial));
    return ongoingTrials.map(TrialMapper.toDto);
  }

  async getOngoingTrialsByCountry(countryCode: string): Promise<TrialDto[]> {
    const trials = await this.trialRepository.findByCountry(countryCode);
    const ongoingTrials = trials.filter((trial) => this.isOngoing(trial));
    return ongoingTrials.map(TrialMapper.toDto);
  }

  async getAllOngoingTrials(): Promise<TrialDto[]> {
    const trials = await this.trialRepository.findOngoingTrials();
    return trials.map(TrialMapper.toDto);
  }

  private isOngoing(trial: ClinicalTrial): boolean {
    const currentDate = new Date();
    return (
      new Date(trial.startDate) <= currentDate &&
      currentDate <= new Date(trial.endDate) &&
      !trial.canceled
    );
  }
}
