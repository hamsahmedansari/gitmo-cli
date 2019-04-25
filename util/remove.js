const emoji = require("./emoji");
const shell = require("shelljs");
const chalk = require("chalk");
const inquirer = require("../lib/inquirer");

const helper = require("../lib/git");

const GitRemove = async (msg, files) => {
  //git rm --cached file1.txt
  const code = String(shell.exec("git status", { silent: true }).stdout).trim();
  const ModifiedFiles = helper.getModifiedFiles(code);
  const UntrackedFiles = helper.getUntrackedFiles(code);
  console.log(
    chalk.bgRedBright(
      "----Removing Files From Git & Following Files Will Be Remove ----"
    )
  );
  console.log(chalk.yellowBright(files));
  const filesInString = files.join(" ");
  shell.exec("git rm --cached " + filesInString);
  console.log(chalk.greenBright("Files has been successfully removed "));
  try {
    console.log(chalk.yellowBright("adding Remove commit to your repo"));
    let tempMsg = msg + "\n Removed Files";
    files.map((file, i) => {
      tempMsg += `\n ${i} : ${file}`;
    });
    let commitMsg = helper.createCommit(tempMsg, ModifiedFiles, UntrackedFiles);

    await shell.exec(`git commit -m "Remove: ${emoji.remove} ${commitMsg} "`);
    console.log(chalk.greenBright("commit is added!!! "));
    const temp = await inquirer.wantToUpdateRemote();
    if (temp) {
      if (helper.isRemoteExist()) {
        console.log(chalk.yellowBright("Pushing to master "));
        await shell.exec(`git push`);
        console.log(chalk.bgGreenBright("Remote is Updated"));
      } else {
        console.log(chalk.redBright("Remote Not Exist"));
      }
    }

    console.log(chalk.bgGreenBright("Your current Dir is now Gir Repo"));
    process.exit();
  } catch (error) {
    console.log(error);

    process.exit();
  }
};
module.exports = GitRemove;
