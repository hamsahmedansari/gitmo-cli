#!/usr/bin/env node

const yargs = require("yargs");
const command = yargs.argv;
const { _ } = command;
const shell = require("shelljs");
const chalk = require("chalk");

const help = require("./util/help");
const init = require("./util/init");
const update = require("./util/update");
const remove = require("./util/remove");
const fixed = require("./util/fixed");
const deploy = require("./util/deploy");
const readme = require("./util/readme");
const format = require("./util/format")
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
  if (command[helperCommand.update].length) {
    update(command[helperCommand.update]);
  } else {
    console.log(chalk.redBright("Commit is not exist"));
  }
} else if (helperCommand.remove in command) {
  // remove selected file from git and push
  if (command[helperCommand.remove].length && _.length) {
    remove(command[helperCommand.remove], _);
  } else {
    console.log(chalk.redBright("Argument is Messing "));
  }
} else if (helperCommand.fixed in command) {
  // add all file as FIXED and push
  if (command[helperCommand.fixed].length) {
    fixed(command[helperCommand.fixed]);
  } else {
    console.log(chalk.redBright("Commit is not exist"));
  }
} else if (helperCommand.readme in command) {
  // add readme.md file as README.MD and push
  if (command[helperCommand.readme].length) {
    readme(command[helperCommand.readme]);
  } else {
    readme("Readme Updated");
  }
} else if (helperCommand.deploy in command) {
  // add d file as FIXED and
  if (command[helperCommand.deploy].length) {
    deploy(command[helperCommand.deploy]);
  } else {
    console.log(chalk.redBright("Commit is not exist"));
  }
  // } else if (helperCommand.revert in command) {
  //   // It will show you list of commit and you can select to revert that
  // } else if (helperCommand.addDependance in command) {
  //   // It will add package.json file to your git and github with emoji
  // } else if (helperCommand.removeDependance in command) {
  //   // It will add package.json file to your git and github with emoji
} else if(helperCommand.improveStructure in command){
  // improve file structure
  if (command[helperCommand.improveStructure].length) {
   format(command[helperCommand.improveStructure]) 
  }
} else {
  // show help
  help();
}
