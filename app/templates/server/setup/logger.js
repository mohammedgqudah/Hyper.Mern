import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import moment from 'moment';

class Logger {
  constructor() {}
  base(type, color, msg) {
    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    let logFile = path.join(__dirname, '..', 'server.log');
    fs.appendFileSync(logFile, `\n[${type.toUpperCase()}] ${time} ${msg}`);
    return `${color(type.toUpperCase())} ${chalk.gray(time)} ${msg}`;
  }
  success(msg) {
    console.log(this.base('success', chalk.greenBright, msg));
  }
  error(msg) {
    console.log(this.base('error  ', chalk.redBright, msg));
  }
  info(msg) {
    console.log(this.base('info   ', chalk.blueBright, msg));
  }
}

let LOGGER = new Logger();

const inject = app => {
  app.logger = LOGGER;
  if (app.use)
    app.use((req, res, next) => {
      req.logger = LOGGER;
      next();
    });
};

export { LOGGER, inject };
