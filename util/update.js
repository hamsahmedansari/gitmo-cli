const emoji = require("./emoji");
const shell = require("shelljs");
const chalk = require("chalk");

const GitUpdate = async () => {
  console.log("====================================");
  console.log(getModifiedFiles());
  console.log("====================================");
};

const getModifiedFiles = () => {
  const gitCode = String(
    shell.exec("git status", { silent: true }).stdout
  ).trim();
  const tempArr = [
    `(use "git checkout -- <file>..." to discard changes in working directory)`,
    `Untracked files:`
  ];
  const indexOf = [gitCode.indexOf(tempArr[0]), gitCode.indexOf(tempArr[1])];
  return String(gitCode.slice(indexOf[0] + tempArr[0].length, indexOf[1]))
    .replace(/modified:/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .trim()
    .split("\n");
};

module.exports = GitUpdate;
