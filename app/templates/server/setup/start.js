const chalk = require('chalk');
const PORT = process.env.PORT || 3000;
module.exports = server => {
  require('../db')
    .then(() => {
      server.listen(PORT, () => {
        console.log(chalk.green(`Listening on port ${PORT}`));
      });
    })
    .catch(err => {
      console.log(err);
    });
};
