const config = {
  app_config: {
    port: process.env.APP_PORT,
  },

  db_config : {
    port : process.env.DB_PORT,
    name : process.env.DB_NAME,
    host : process.env.DB_HOST
  },

  session_config : {
    keySecret : process.env.KEY_SECRET,
    timeMaxSession : 60000 * 60  // 1 hora 
  }
};

module.exports = config;
