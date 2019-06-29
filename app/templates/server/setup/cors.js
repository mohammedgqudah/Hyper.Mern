import cors from 'cors';

export default app => {
  const whitelist = ['http://localhost:8080'];
  const corsOptions = {
    origin: function(origin, callback) {
      callback(null, whitelist.indexOf(origin) !== -1);
    },
    credentials: true
  };
  app.use(cors(corsOptions));
};
