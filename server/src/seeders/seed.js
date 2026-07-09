import dotenv from "dotenv";
import { connectDB } from "../config/connectDB.config.js";
import adminSeed from "./adminSeed.js";
import userSeed from "./userSeed.js";

dotenv.config();

const seed = async () => {
  try {
    await connectDB();

    // Call the function that we need to seed

    await adminSeed();
    await userSeed();


  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(1);
  }
};

seed();
