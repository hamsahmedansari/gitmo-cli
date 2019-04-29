const log = require("./log");
const chalk = require("chalk");

const command = require("./command");

const create = () => {
  // welcome Log
  log.welcome();

  log.inline(" Help ->");
  console.log("\n");
  console.group();
  console.log(
    `${chalk.yellowBright("Commands")} \t  ${chalk.greenBright("Message")}`
  );
  log.table(
    `-${command.init}`,
    "It will Initialize your Git Repo with .gitignore and Connect with Remote Server and push all file to your remote with emoji and INIT COMMIT "
  );
  log.table(
    `-${command.update} [msg]`,
    "It will add all file to your git and github with emoji "
  );
  log.table(
    `-${command.remove} [msg] [files]`,
    "It will remove selected file to your git and github with emoji "
  );
  log.table(
    `-${command.fixed} [msg]`,
    "It will add all file as Bug Fixed to your git and github with emoji "
  );
  log.table(
    `-${command.readme} [msg]`,
    "It will add only readme file to your git and github with emoji "
  );
  log.table(
    `-${command.deploy} [msg]`,
    "It will add all file as deploy to your git and github with emoji "
  );
  // log.table(
  //   `-${command.revert}`,
  //   "It will show you list of commit and you can select to revert that "
  // );
  // // log.table(
  // //   `-rename [msg]`,
  // //   "It will add all file as rename your git repo to your git and github with emoji "
  // // );
  // log.table(
  //   `-${command.addDependance} [msg]`,
  //   "It will add package.json file to your git and github with emoji "
  // );
  // log.table(
  //   `-${command.removeDependance} [msg]`,
  //   "It will add package.json file to your git and github with emoji "
  // );

  // log.table("-a || -A", "It will selected file", "i.e -a index.html");
  console.groupEnd();
  process.exit();
};

module.exports = create;
