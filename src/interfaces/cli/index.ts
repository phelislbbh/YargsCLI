import yargs from "yargs";
yargs
  .scriptName("inato-cli")
  .usage("$0 <cmd> [args]")
  .commandDir("commands")
  .demandCommand(1)
  .help().argv;

exports.handler = function (argv: yargs.Arguments) {
  console.log(argv);
};
