const inquirer = require("inquirer");
const files = require("./file");

// const GithubCredentials = () => {
//   const questions = [
//     {
//       name: "username",
//       type: "input",
//       message: "Enter your GitHub username or e-mail address:",
//       validate: function(value) {
//         if (value.length) {
//           return true;
//         } else {
//           return "Please enter your username or e-mail address.";
//         }
//       }
//     },
//     {
//       name: "password",
//       type: "password",
//       message: "Enter your password:",
//       validate: function(value) {
//         if (value.length) {
//           return true;
//         } else {
//           return "Please enter your password.";
//         }
//       }
//     }
//   ];
//   return inquirer.prompt(questions);
// };

const GithubCredentials = () => {
  const questions = [
    {
      type: "confirm",
      name: "connectToGitHub",
      message: "Connect To GitHub ?",
      default: true
    }
  ];
  return inquirer.prompt(questions).then(({ connectToGitHub }) => {
    if (connectToGitHub) {
      const q = [
        {
          name: "url",
          type: "input",
          message: "GitHub Repo URL:",
          validate: function(value) {
            if (value.length) {
              if (validURL(value)) {
                return true;
              }
              return "Please Enter Valid URL .";
            } else {
              return "Please GitHub Repo URL.";
            }
          }
        }
      ];
      return inquirer.prompt(q);
    }
    return false;
  });
};
const validURL = str => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

module.exports = { GithubCredentials };
