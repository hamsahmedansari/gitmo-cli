#!/usr/bin/env node

const yargs = require("yargs");
const command = yargs.argv;
const { _ } = command;
const shell = require("shelljs");
const chalk = require("chalk");

const help = require("./util/help");
const init = require("./util/init");
const update = require("./util/update");
const helperCommand = require("./util/command");

if (!shell.which("git")) {
  shell.echo(chalk.red("Sorry, this script requires git"));
  shell.exit(1);
}

// Start Code Here
// console.log("====================================");
// console.log(_);
// console.log(command);
// console.log("====================================");

// Checking GitHub Assess Token

// rest commands
if ("h" in command) {
  help();
  // Running Help
} else if (helperCommand.init in command) {
  // init git ,github and push to github
  init();
} else if (helperCommand.update in command) {
  // add all file as UPDATE and push
  update();
} else if (helperCommand.remove in command) {
  // remove selected file from git and push
} else if (helperCommand.fixed in command) {
  // add all file as FIXED and push
} else if (helperCommand.readme in command) {
  // add readme.md file as FIXED and push
} else if (helperCommand.deploy in command) {
  // add d file as FIXED and push
} else if (helperCommand.revert in command) {
  // It will show you list of commit and you can select to revert that
} else if (helperCommand.addDependance in command) {
  // It will add package.json file to your git and github with emoji
} else if (helperCommand.removeDependance in command) {
  // It will add package.json file to your git and github with emoji
} else {
  // show help
  help();
}
