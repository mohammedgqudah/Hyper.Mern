import path from 'path';
import express from 'express';

export default app => {
  app.use(
    express.static(path.join(__dirname, '..', '..', 'public'), {
      maxAge: process.env.STATIC_MAX_AGE,
    })
  );
};
