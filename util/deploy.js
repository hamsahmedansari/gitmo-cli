const emoji = require("./emoji");
const shell = require("shelljs");
const chalk = require("chalk");

const helper = require("../lib/git");

const GitDeploy = async msg => {
  const code = String(shell.exec("git status", { silent: true }).stdout).trim();
  const ModifiedFiles = helper.getModifiedFiles(code);
  const UntrackedFiles = helper.getUntrackedFiles(code);
  if (!ModifiedFiles && !UntrackedFiles) {
    console.log(chalk.redBright("There is noting to commit."));
    process.exit();
  }
  try {
    console.log(chalk.yellowBright("Adding All File in to your git"));
    await shell.exec("git add *");
    console.log(chalk.greenBright("All Files Added "));
    console.log(chalk.yellowBright("adding Deploy commit to your repo"));

    let commitMsg = helper.createCommit(msg, ModifiedFiles, UntrackedFiles);

    await shell.exec(`git commit -m "Deploy: ${emoji.deploy} ${commitMsg} "`);
    console.log(chalk.greenBright("commit is added!!! "));
    if (helper.isRemoteExist()) {
      console.log(chalk.yellowBright("Pushing to master "));
      await shell.exec(`git push`);
      console.log(chalk.bgGreenBright("Remote is Fixed"));
      console.log(chalk.blueBright(credentials.url));
    }

    console.log(chalk.bgGreenBright("Your current Dir is now Gir Repo"));
    process.exit();
  } catch (error) {
    process.exit();
  }
};

module.exports = GitDeploy;
