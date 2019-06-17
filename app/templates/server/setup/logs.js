const util = require('util');
const chalk = require('chalk');
module.exports = app => {
  app.use('*', (req, res, next) => {
    console.log(
      '--------------------------------------------------------------------------'
    );
    console.log(
      util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.baseUrl)
    );
    console.log(
      util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query))
    );
    console.log(
      util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body))
    );
    console.log(
      util.format(
        chalk.cyan('%s: %s'),
        'COOKIES    ',
        util.inspect(req.cookies)
      )
    );
    next();
  });
};
