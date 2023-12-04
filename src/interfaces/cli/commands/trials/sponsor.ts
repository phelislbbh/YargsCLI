import yargs from "yargs";
import axios from "axios";
import {
  setOutputFile,
  printToConsoleAndFile,
} from "../../../../shared/logger";
import { formatAndExcludeCountry } from "../../../../shared/trialFormatter";

export const command = "sponsor <sponsor>";
export const desc = "Get all ongoing trials by Sponsor";

export const builder = (yargs: yargs.Argv) => {
  return yargs
    .positional("sponsor", {
      describe: "The sponsor name (e.g. Sanofi)",
      type: "string",
    })
    .option("output", {
      alias: "o",
      describe: "Output file path",
      type: "string",
    });
};

export const handler = async (argv: yargs.Arguments) => {
  const sponsorName = argv.sponsor as string;
  const outputFile = argv.output as string | undefined;
  if (outputFile) {
    console.log(`Output file specified: ${outputFile}`);
    setOutputFile(outputFile); // Set the output file path if provided
  }

  try {
    const apiUrl = `http://localhost:8080/trials/sponsor/${sponsorName}`;
    const response = await axios.get(apiUrl);

    const ongoingTrials =  formatAndExcludeCountry (response.data)

    console.log(`Fetching trials for Sponsor: ${sponsorName}`);
    printToConsoleAndFile(ongoingTrials, true); // Log results to both console and fil
  } catch (error) {
    console.error(
      `Error: ${
        error instanceof Error ? error.message : "An unknown error occurred"
      }`
    );
  }
};
