const path = require("path");
const fs = require("fs");
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.option("yes");
    this.option("dont-install");
    this.option("app-name");
  }

  async prompting() {
    this.defaults = {
      appName: this.options["app-name"] || "Hyper Mern",
      email: this.user.git.email(),
      gitName: this.user.git.name()
    };
    this.answers = this.defaults;
    if (!!!this.options["yes"]) {
      this.answers = await this.prompt([
        {
          name: "appName",
          message: "Application name:",
          default: this.defaults.appName
        },
        {
          name: "repoName",
          message: "Git repo name:"
        },
        {
          name: "description",
          message: "Description:"
        },
        {
          name: "name",
          message: "Author's name:"
        },
        {
          name: "email",
          message: "Author's email:",
          default: this.defaults.email
        },
        {
          name: "githubUsername",
          message: "GitHub username:",
          default: this.defaults.gitName
        }
      ]);
    }

    this.tpl = {};
    this.tpl.appName = this.answers.appName;
    this.tpl.repoName = this.answers.repoName;
    this.tpl.description = this.answers.description;
    this.tpl.email = this.answers.email;
    this.tpl.name = this.answers.name;
    this.tpl.secret = this.guidGenerator();
    this.spawnCommand("git", ["init", "--quiet"]); // Initialize Git repo
  }
  guidGenerator() {
    let S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationRoot(),
      this.tpl,
      undefined,
      {
        globOptions: {
          dot: true
        }
      }
    );
    // ~~Check CSS Preprocessor~~ -- Only supports scss now
    this.fs.extendJSON(this.destinationPath("package.json"), {
      devDependencies: {
        "sass-loader": "^7.1.0"
      }
    });
    let webpackFilePath = path.join(
      __dirname,
      "./templates/webpack/scss/_webpack.config.js"
    );
    const webpackDest = path.resolve(
      this.destinationRoot(),
      "webpack.config.js"
    );
    fs.copyFileSync(webpackFilePath, webpackDest);
  }

  install() {
    if (!!!this.options["dont-install"]) {
      const logGreen = text => this.log(chalk.cyan(text));

      logGreen("Installing dependencies... this might take some time");
      this.npmInstall();
    }
  }

  end() {
    const logCyan = text => this.log(chalk.cyan(text));
    const deleteFolderRecursive = path => {
      if (fs.existsSync(webpackPath)) {
        fs.readdirSync(path).forEach(file => {
          const curPath = path + "/" + file;

          if (fs.statSync(curPath).isDirectory()) {
            // recurse
            deleteFolderRecursive(curPath);
          } else {
            // delete file
            fs.unlinkSync(curPath);
          }
        });

        fs.rmdirSync(path);
      }
    };

    const webpackPath = this.destinationRoot() + "/webpack";
    deleteFolderRecursive(webpackPath);

    this.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
    logCyan("Congrats! You're ready to go!");
    logCyan("Run `npm start start:dev:all` to get started");
    this.log("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
  }
};
