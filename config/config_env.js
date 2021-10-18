const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.API_PORT,
  tokenKey: process.env.TOKEN_KEY,
  nodeEnv: process.env.NODE_ENV,
};
