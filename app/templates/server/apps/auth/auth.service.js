import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword = password => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
const token = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn
  });
};

export { hashPassword, token, comparePassword };
