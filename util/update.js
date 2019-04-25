const emoji = require("./emoji");
const shell = require("shelljs");
const chalk = require("chalk");

const GitUpdate = async () => {
  const code = String(shell.exec("git status", { silent: true }).stdout).trim();
  const ModifiedFiles = getModifiedFiles(code);
  const UntrackedFiles = getUntrackedFiles(code);
  if (!ModifiedFiles && !UntrackedFiles) {
    process.exit();
  }
  console.log("====================================");
  console.log("worrking great");
  console.log("====================================");
};

const getModifiedFiles = gitCode => {
  const tempArr = [
    `(use "git checkout -- <file>..." to discard changes in working directory)`,
    `Untracked files:`,
    `no changes added to commit (use "git add" and/or "git commit -a")`
  ];

  let firstIndex = gitCode.indexOf(tempArr[0]) + tempArr[0].length;

  if (!gitCode.includes(tempArr[0])) {
    return false;
  }
  let secondIndex;
  if (gitCode.includes(tempArr[1])) {
    secondIndex = gitCode.indexOf(tempArr[1]);
  } else if (gitCode.includes(tempArr[2])) {
    secondIndex = gitCode.indexOf(tempArr[2]);
  } else {
    return false;
  }
  return String(gitCode.slice(firstIndex, secondIndex))
    .replace(/modified:/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .trim()
    .split("\n");
};

const getUntrackedFiles = gitCode => {
  const tempArr = [
    `(use "git add <file>..." to include in what will be committed)`,
    `no changes added to commit (use "git add" and/or "git commit -a")`
  ];
  let firstIndex = gitCode.indexOf(tempArr[0]) + tempArr[0].length;

  if (!gitCode.includes(tempArr[0])) {
    return false;
  }

  let secondIndex = gitCode.indexOf(tempArr[1]);
  return String(gitCode.slice(firstIndex, secondIndex))
    .replace(/modified:/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .trim()
    .split("\n");
};

module.exports = GitUpdate;
