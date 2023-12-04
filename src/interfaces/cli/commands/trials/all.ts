import yargs from "yargs";
import axios from "axios";
import {
  setOutputFile,
  printToConsoleAndFile,
} from "../../../../shared/logger";
import { formatAndExcludeCountry } from "../../../../shared/trialFormatter";

export const command = "all";
export const desc = "Get all ongoing trials";

export const builder = (yargs: yargs.Argv) => {
  return yargs.option("output", {
    alias: "o",
    describe: "Output file path",
    type: "string",
  });
};

export const handler = async (argv: yargs.Arguments) => {
  const outputFile = argv.output as string | undefined;
  if (outputFile) {
    console.log(`Output file specified: ${outputFile}`);
    setOutputFile(outputFile);
  }

  try {
    const apiUrl = "http://localhost:8080/trials/ongoing";
    const response = await axios.get(apiUrl);
    const ongoingTrials = formatAndExcludeCountry(response.data);

    console.log(`Fetching ongoing trials`);
    printToConsoleAndFile(ongoingTrials, true);
  } catch (error) {
    console.error(
      `Error: ${
        error instanceof Error ? error.message : "An unknown error occurred"
      }`
    );
  }
};
