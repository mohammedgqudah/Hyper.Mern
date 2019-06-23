import Passport from "passport";
import PassportJWT from "passport-jwt";

const configJWTStrategy = () => {
  let options = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    secretOrPrivateKey: process.env.SECRET
  };
  Passport.use(
    new PassportJWT.Strategy(options, async ({ id }, done) => {
      try {
        let user = await UserModel.findOne({ _id: id });
        if (user) return done(null, { ...user._doc });
        else return done(null, false);
      } catch (err) {
        return done(err);
      }
    })
  );
};
export { configJWTStrategy };
