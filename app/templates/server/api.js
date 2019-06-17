const express = require("express");
const app = express.Router();

// passport.authenticate('jwt', { session: false })
app.get("/", (req, res) => res.send("API /"));
app.use("/auth", require("./apps/auth/auth.router"));

module.exports = app;
