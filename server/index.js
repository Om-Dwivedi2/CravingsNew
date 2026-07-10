import express from "express";
import cloudinary from "./src/config/cloudinary.config.js";

import { connectDB } from "./src/config/connectDB.config.js";
import authRouter from "./src/router/auth.route.js";
import commonRouter from "./src/router/common.route.js";
import cors from "cors";
import morgan from "morgan";
import publicRouter from "./src/router/public.route.js";
import cookieParser from "cookie-parser";



const app = express();

// Middleware

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/public", publicRouter);
app.use("/common", commonRouter);

// Default Error handler

app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal Server Error";
  const errStatusCode = err.statusCode || 500;

  console.log(errMessage);

  res.status(errStatusCode).json({ message: errMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Server is running at port: ", port);
  await connectDB();
  try {
    const connection = await cloudinary.api.ping();
    console.log("Cloudinary Connected: ");
    console.log(connection);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
});
