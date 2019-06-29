import express from 'express';
import passport from 'passport';

import { LOGIN, SIGNUP } from './auth.controller';
const app = express.Router();

app.post('/login', LOGIN);
app.post('/signup', SIGNUP);

export default app;
