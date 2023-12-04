import yargs from "yargs";
import axios from "axios";
import {
  setOutputFile,
  printToConsoleAndFile,
} from "../../../../shared/logger";
import { formatTrialsNames } from "../../../../shared/trialFormatter";

export const command = "country <countryCode>";
export const desc = "Get all ongoing trials by Country";

export const builder = (yargs: yargs.Argv) => {
  return yargs
    .positional("countryCode", {
      describe: "The country code (e.g. FR, DE)",
      type: "string",
    })
    .option("output", {
      alias: "o",
      describe: "Output file path",
      type: "string",
    });
};

export const handler = async (argv: yargs.Arguments) => {
  const countryCode = argv.countryCode as string;
  const outputFile = argv.output as string | undefined;
  if (outputFile) {
    console.log(`Output file specified: ${outputFile}`);
    setOutputFile(outputFile);
  }

  try {
    const apiUrl = `http://localhost:8080/trials/country/${countryCode}`;
    const response = await axios.get(apiUrl);
    const ongoingTrials = formatTrialsNames(response.data);

    console.log(`Fetching trials for Country: ${countryCode}`);
    printToConsoleAndFile(ongoingTrials, true);
  } catch (error) {
    console.error(
      `Error: ${
        error instanceof Error ? error.message : "An unknown error occurred"
      }`
    );
  }
};
