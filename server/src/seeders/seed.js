import dotenv from "dotenv";
import { connectDB } from "../config/connectDB.config.js";

dotenv.config();

const seed = async () => {
  try {
    connectDB();

    // Call
  } catch (error) {
    process.exit(1);
  }
};

seed();
