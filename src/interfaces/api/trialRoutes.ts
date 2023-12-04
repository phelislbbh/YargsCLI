// src/interfaces/api/trialRoutes.ts

import { Router, Request, Response } from "express";
import { ClinicalTrialRepository } from "../../infrastructure/repositories/ClinicalTrialRepository";
import { TrialService } from "../../core/application/services/TrialService";

const router = Router();

// Instantiate the service with the repository
const trialRepository = new ClinicalTrialRepository();
const trialService = new TrialService(trialRepository);

// Route to retrieve all ongoing trials
router.get("/ongoing", async (req: Request, res: Response) => {
  let trials;
  try {
    trials = await trialService.getAllOngoingTrials();
    res.status(200).json(trials);
  } catch (error) {
    res.status(500).send("Error retrieving ongoing trials");
  }
});

// Route to retrieve trials by sponsor
router.get("/sponsor/:sponsor", async (req: Request, res: Response) => {
  let sponsor;
  try {
    sponsor = req.params.sponsor;
    const trials = await trialService.getOngoingTrialsBySponsor(sponsor);
    res.status(200).json(trials);
  } catch (error) {
    res.status(500).send(`Error retrieving trials for sponsor: ${sponsor}`);
  }
});

// Route to retrieve trials by country code
router.get("/country/:countryCode", async (req: Request, res: Response) => {
  let countryCode;
  try {
    countryCode = req.params.countryCode;
    const trials = await trialService.getOngoingTrialsByCountry(countryCode);
    res.status(200).json(trials);
  } catch (error) {
    res.status(500).send(`Error retrieving trials for country: ${countryCode}`);
  }
});

export default router;
