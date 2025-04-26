require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  DATABASE_URL:
    "postgresql://postgres:7834@localhost:5432/Properly?schema=public",
};
