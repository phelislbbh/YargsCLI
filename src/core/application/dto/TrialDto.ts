// src/application/dto/TrialDto.ts

export class TrialDto {
  constructor(
    public name: string,
    public sponsor: string,
    public start_date: Date, // Using string to maintain JSON compatibility
    public end_date: Date,
    public country?: string
  ) {}
}
