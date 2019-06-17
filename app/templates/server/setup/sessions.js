const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
module.exports = app => {
  app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 600000 },
      store: process.env.DB_URI
        ? new MongoStore({ mongooseConnection: mongoose.connection })
        : undefined,
    })
  );
};
