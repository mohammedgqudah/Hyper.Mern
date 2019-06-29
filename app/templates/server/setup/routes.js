import path from 'path';

export default (app, io) => {
  app.use((req, res, next) => {
    req.io = io;
    next();
  });
  app.use('/api', require('../api.js'));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.use('*', (req, res) => {
    res.status(404).send(`<h1>404 Page Not Found</h1>`);
  });
};
