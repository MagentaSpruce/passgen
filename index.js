const program = require("commander");

program.version("1.0.0").description("A simple password generator app");

program
  .option("-l, --length <number>", "Length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

console.log(program.opts());
