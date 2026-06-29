import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is connected at host: ", conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};
