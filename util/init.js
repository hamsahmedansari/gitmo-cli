const chalk = require("chalk");
const files = require("../lib/file");
const inquirer = require("../lib/inquirer");
const emoji = require("./emoji");
const shell = require("shelljs");

const initGit = async () => {
  if (files.directoryExists(".git")) {
    console.log(chalk.red("Git Already Initialized"));
    return process.exit();
  }
  console.log(
    chalk.yellowBright("Initializing your current dir as Git Repository ")
  );
  const credentials = await inquirer.GithubCredentials();
  // if (credentials) {
  try {
    await files.createGitignore();
    await files.createReadme();

    shell.exec("git init");
    shell.echo(chalk.red("Error: Git commit failed"));
    shell.exit(1);

    console.log(chalk.greenBright("Git is Initialized"));
    console.log(chalk.yellowBright("Adding All File in to your git"));

    shell.exec("git add *");
    shell.echo(chalk.red("Error: Git commit failed"));
    shell.exit(1);

    console.log(chalk.greenBright("All Files Added "));
    console.log(chalk.yellowBright("Adding .gitignore file"));

    shell.exec("git add .gitignore");
    shell.echo(chalk.red("Error: Git commit failed"));
    shell.exit(1);

    console.log(chalk.greenBright(".gitignore is added "));
    console.log(chalk.yellowBright("adding INIT commit to your repo"));

    shell.exec(
      `git commit -m "Initial: ${
        emoji.init
      } Initialize Project With Git and GitHub using GitMo-Cli "`
    );
    console.log(chalk.greenBright("commit is added!!! "));

    if (credentials) {
      console.log(chalk.yellowBright("adding remote master origin "));
      shell.exec(`git remote add origin ${credentials.url}`);

      console.log(chalk.greenBright("remote is added "));
      console.log(chalk.yellowBright("Pushing to master "));

      shell.exec(`git push -u origin master`);

      console.log(chalk.bgBlueBright("Remote is Updated"));
      console.log(chalk.blueBright(credentials.url));
    }
    console.log(chalk.bgGreenBright("Your current Dir is now Gir Repo"));
    process.exit();
  } catch (error) {
    console.log(chalk.red(error));
  }
  // }
};

module.exports = initGit;
