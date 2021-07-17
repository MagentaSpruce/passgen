#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("A simple password generator app");

program
  .option("-l, --length <number>", "Length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

//Create the PW
const generatedPassword = createPassword(length, numbers, symbols);
//Save to file
if (save) {
  savePassword(generatedPassword);
}
//Copy to clipboard
clipboardy.writeSync(generatedPassword);
console.log(chalk.blue("generate password: ") + chalk.bold(generatedPassword));
console.log(chalk.yellow("Password copied to clipboard"));
