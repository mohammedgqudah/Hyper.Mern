const express = require('express');
const app = express.Router();
const { LOGIN, SIGNUP} = require('./auth.controller');
const passport = require('passport');

app.post('/login', LOGIN);
app.post('/signup', SIGNUP);
module.exports =  app;
