// src/core/domain/ClinicalTrial.ts

export class ClinicalTrial {
  constructor(
    public name: string,
    public sponsor: string,
    public startDate: Date,
    public endDate: Date,
    public country: string | undefined,
    public canceled: boolean
  ) {}

  isOngoing(currentDate: Date = new Date()): boolean {
    return (
      currentDate > this.startDate &&
      currentDate < this.endDate &&
      !this.canceled
    );
  }
}
