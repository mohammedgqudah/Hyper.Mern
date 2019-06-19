const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const { hashPassword, comparePassword, token } = require("./auth.service");
const { LOGIN_SCHEMA, SIGNUP_SCHEMA } = require("./auth.validators");

const LOGIN = async (req, res) => {
  // @id could be name or email
  let schema = LOGIN_SCHEMA;
  let { value, error } = Joi.validate(req.body, schema);
  if (error) res.status(422).send({ list: value.details });
  else {
    try {
      let query = [{ email: req.body.id }, { name: req.body.id }];
      let user = await User.findOne({ $or: query });
      if (!user) res.status(400).send({});
      else {
        let compared = comparePassword(req.body.password, user.password);
        if (compared) {
          let _token = token({ id: user._id }, process.env.TOKEN_EXPIRY_DATE);
          res.send({ token: _token, user: { ...user._doc } });
        } else res.status(400).send({});
      }
    } catch (error) {
      console.log("e500", error);
      res.status(500).send({ error });
    }
  }
};
const SIGNUP = async (req, res) => {
  let schema = SIGNUP_SCHEMA;
  let { name, email, password } = req.body;
  let { error } = Joi.validate(req.body, schema);
  if (error) res.status(400).send({ error: error.details });
  else {
    try {
      let user = await User.create({
        name,
        password: hashPassword(password),
        email
      });
      let _token = token({ id: user._id }, process.env.TOKEN_EXPIRY_DATE);
      res.send({ token: _token, user });
    } catch (error) {
      if (error.name === "ValidationError") {
        res.status(409).send({
          code: "Duplicate",
          errors: Object.keys(error.errors)
        });
      } else {
        console.log("Error", error);
        res.status(500).send({ error });
      }
    }
  }
};
module.exports = { LOGIN, SIGNUP };
