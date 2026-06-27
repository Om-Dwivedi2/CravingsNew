import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  console.log("DB is connected at host: ", conn.connection.host);
};
