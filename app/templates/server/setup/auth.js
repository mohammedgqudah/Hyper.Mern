import User from '../db/models/user';
import passport from 'passport';

export default app => {
  require('./auth/passport'); // configure passport-jwt
  app.use(passport.initialize());
};
