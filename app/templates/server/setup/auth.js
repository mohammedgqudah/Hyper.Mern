const User = require("../db/models/user");
const passport = require("passport");
module.exports = app => {
  require('./auth/passport'); // configure passport-jwt 
  app.use(passport.initialize())
};
