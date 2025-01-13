import dotenv from "dotenv";

dotenv.config();

const config = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_NAME: process.env.DB_NAME || "yourdatabase",
  PORT: process.env.PORT || 3000,
};

export default config;
