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
    `Untracked files:`,
    `no changes added to commit (use "git add" and/or "git commit -a")`
  ];

  let firstIndex = gitCode.indexOf(tempArr[0]) + tempArr[0].length;

  if (!gitCode.includes(tempArr[0])) {
    console.log("return false !!!");
    return false;
  }
  let secondIndex;
  if (gitCode.includes(tempArr[1])) {
    console.log("i am true");

    secondIndex = gitCode.indexOf(tempArr[1]);
  } else if (gitCode.includes(tempArr[2])) {
    console.log("i am true from 2");
    secondIndex = gitCode.indexOf(tempArr[2]);
  } else {
    console.log("return false");
    return false;
  }
  return String(gitCode.slice(firstIndex, secondIndex))
    .replace(/modified:/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .trim()
    .split("\n");
};

module.exports = GitUpdate;
