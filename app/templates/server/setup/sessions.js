import session from 'express-session';
import mongoose from 'mongoose';

const MongoStore = require('connect-mongo')(session);

export default app => {
  app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 600000 },
      store: process.env.DB_URI
        ? new MongoStore({ mongooseConnection: mongoose.connection })
        : null
    })
  );
};
