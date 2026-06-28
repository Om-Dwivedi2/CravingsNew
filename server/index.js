import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/connectDB.config.js";
import authRouter from "./src/router/auth.router.js";
import cors from "cors"

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

app.use("/auth", authRouter);

// Default Error handler

app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal Server Error";
  const errStatusCode = err.statusCode || 500;

  res.status(errStatusCode).json({ message: errMessage });
});

const port = 4500 || process.env.PORT;

app.listen(port, async () => {
  console.log("Server is running at port: ", port);
  await connectDB();
});
