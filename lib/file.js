const fs = require("fs");
const path = require("path");
const gitignore = require("./gitignore");
const readme = require("./readmeMd");
const chalk = require("chalk");
const shell = require("shelljs");
const touch = shell.touch;

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  createGitignore: async () => {
    console.log(chalk.green("Creating .gitignore for NODEJS"));
    try {
      if (await fs.statSync(".gitignore").isFile()) {
        await fs.writeFileSync(".gitignore", gitignore);
      } else {
        touch(".gitignore");
        await fs.writeFileSync(".gitignore", gitignore);
      }
      console.log(chalk.green("Successfully created .gitignore for NODEJS"));
    } catch (error) {
      touch(".gitignore");
      await fs.writeFileSync(".gitignore", gitignore);
      // console.log(chalk.red(error));
    }
  },
  createReadme: async () => {
    console.log(chalk.green("Checking Readme.md"));
    try {
      if (await fs.statSync("readme.md").isFile()) {
        const oldReadme = await fs.readFileSync("readme.md").toString();
        const newReadme = `
## GitMo-CLI
        
This Project is creating using GitMo-CLI which is cli for git and github 
This Cli add beautiful commit and save time
[https://github.com/hamsahmedansari/gitmo-cli](https://github.com/hamsahmedansari/gitmo-cli)
        
${oldReadme}`;
        await fs.writeFileSync("readme.md", newReadme);
      } else {
        touch("readme.md");
        await fs.writeFileSync("readme.md", readme);
      }
    } catch (error) {
      touch("readme.md");
      await fs.writeFileSync("readme.md", readme);
    }
  },
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};
