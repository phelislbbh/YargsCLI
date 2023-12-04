import yargs from "yargs";

exports.command = "trials";
exports.desc = "Domain for ongoing trials";
exports.builder = function (yargs: yargs.Argv) {
  return yargs.commandDir("trials");
};
