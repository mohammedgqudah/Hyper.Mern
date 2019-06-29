import chalk from 'chalk';

const PORT = process.env.PORT || 3000;

export default async server => {
  await require('../db');
  server.listen(PORT, () => {
    server.logger.success(`Listening on port ${PORT}`);
  });
};
