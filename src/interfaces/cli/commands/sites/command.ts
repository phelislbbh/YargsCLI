import yargs from "yargs";

exports.command = "command";
exports.desc = " Test for Sites";
exports.builder = function (yargs: yargs.Argv) {
  return yargs.option("command", {
    description: "Available increaments",
    type: "boolean",
  });
};
exports.handler = async function (argv: yargs.Arguments) {
  console.log("This is only a test for sites", argv);
};
