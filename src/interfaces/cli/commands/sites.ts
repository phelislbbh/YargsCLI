import yargs from "yargs";

exports.command = "sites";
exports.desc = "Domain for active sites";
exports.builder = function (yargs: yargs.Argv) {
  return yargs.commandDir("sites");
};
exports.handler = function (argv: yargs.Arguments) {
  console.log(argv);
};
