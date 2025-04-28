require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET_ACCESS: process.env.JWT_SECRET_ACCESS,
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  DATABASE_URL:
    "postgresql://postgres:7834@localhost:5432/Properly?schema=public",
};
