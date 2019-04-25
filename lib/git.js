const shell = require("shelljs");
const chalk = require("chalk");

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

const isRemoteExist = async () => {
  const code = await String(
    shell.exec("git remote", { silent: true }).stdout
  ).trim();
  if (code.length) return code;
  return false;
};
const createCommit = (commitMsg, trackedFiles, untrackeedFiles) => {
  let msg = commitMsg;
  if (trackedFiles.length) {
    msg += `\n ${trackedFiles.length} is Modified :`;
    trackedFiles.map((file, i) => {
      msg += `\n ${i + 1} : ${file}`;
    });
  }
  if (untrackeedFiles.length) {
    msg += `\n ${untrackeedFiles.length} is Modified :`;
    untrackeedFiles.map((file, i) => {
      msg += `\n ${i + 1} : ${file}`;
    });
  }
  return msg;
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
    firstIndex = null;
  }
  return String(gitCode.slice(firstIndex, secondIndex))
    .replace(/modified:/g, "")
    .replace(/\t/g, "")
    .replace(/ /g, "")
    .trim()
    .split("\n");
};

module.exports = {
  isRemoteExist,
  createCommit,
  getUntrackedFiles,
  getModifiedFiles
};
