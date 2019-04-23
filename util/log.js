const chalk = require("chalk");
const figlet = require("figlet");

const welcome = () => {
  clear();
  console.log(
    chalk.greenBright(
      figlet.textSync("GitMo CLI", { horizontalLayout: "full" })
    )
  );
  console.log(
    chalk.yellow(
      " An simple CLI for GitHub with an extra texture of emoji which look so cool and add more attractive commit to your git"
    )
  );
  // console.log(` ${chalk.yellowBright("-h ")} for help`);
};

const inline = (msg, color = "bgBlueBright") => {
  console.group();
  console.log(chalk[color](msg));
  console.groupEnd();
};

const table = (title, ...msg) => {
  let temp = chalk.redBright(title) + " : \t";
  for (let m of msg) {
    temp = temp.concat(m).concat("\t");
  }
  console.log(temp);
};

const clear = () => {
  console.clear();
};

module.exports = {
  welcome,
  clear,
  inline,
  table
};
