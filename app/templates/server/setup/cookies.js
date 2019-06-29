import cookieParser from 'cookie-parser';

export default app => {
  app.use(cookieParser());
};
