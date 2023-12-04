// src/application/mappers/TrialMapper.ts

import { ClinicalTrial } from "../../domain/entities/ClinicalTrial";
import { TrialDto } from "../dto/TrialDto";

export class TrialMapper {
  static toDto(trial: ClinicalTrial): TrialDto {
    return new TrialDto(
      trial.name,
      trial.sponsor,
      trial.startDate,
      trial.endDate,
      trial.country

    );
  }

  // Add more mapping methods if necessary
}
