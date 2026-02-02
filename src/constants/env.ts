import dotenv from "dotenv";
dotenv.config();

export const APP_PORT = process.env.APP_PORT;
export const APP_URL = process.env.APP_URL;

// MongoDB Configuration
export const MONGO_USER = process.env.MONGO_USER;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_HOST = process.env.MONGO_HOST;
export const MONGO_PORT = process.env.MONGO_PORT;
export const MONGO_DB = process.env.MONGO_DB || "test";
export const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`;
