const chalk = require("chalk");
const files = require("../lib/file");
const git = require("simple-git")();
const inquirer = require("../lib/inquirer");
const emoji = require("./emoji");

const initGit = async () => {
  // if (files.directoryExists(".git")) {
  //   console.log(chalk.red("Git Already Initialized"));
  //   return process.exit();
  // }
  console.log(chalk.green("Initializing your current dir as Git Repository "));
  const credentials = await inquirer.GithubCredentials();
  if (credentials) {
    if (true) {
      try {
        await files.createGitignore();
        await files.createReadme();
        await git
          .init()
          .add(".gitignore")
          .add("readme.md")
          .add("./*")
          .commit(
            `Initial: ${
              emoji.init
            } Initialize Project With Git and GitHub using GitMo-Cli`
          )
          .addRemote("origin", credentials.url)
          .push("origin", "master");
      } catch (error) {
        console.log(chalk.red(error));
      }
    }
  }
};

module.exports = initGit;
