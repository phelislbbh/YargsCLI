/* eslint-disable @typescript-eslint/no-explicit-any */
// /src/shared/logger.js
import * as fs from "fs";
import path from "path";

let outputFile: string | undefined;

export function printToConsoleAndFile(data: any, isJSON = false) {
  if (outputFile) {
    try {
      const newData = isJSON ? JSON.stringify(data, null, 2) : data;
      fs.writeFileSync(outputFile, newData, { encoding: "utf-8" });
      console.log({
        status: "SUCCESS",
        details: `Clinical Trials written to file at: "${outputFile}".`,
      });
    } catch (error) {
      console.error("Failed to write to the file at:", outputFile);
      console.error(error);
    }
  } else {
    console.log(data);
  }
}
export function setOutputFile(path: string): void {
  outputFile = resolveFilePath(path);
}
export function resolveFilePath(unresolvedPath: string) {
  return path.resolve(process.cwd(), unresolvedPath);
}
