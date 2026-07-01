import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/connectDB.config.js";
import authRouter from "./src/router/auth.route.js";
import userRouter from "./src/router/user.route.js";
import cors from "cors";
import morgan from "morgan";
import publicRouter from "./src/router/public.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

// Middleware

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/public", publicRouter);
app.use("/user", userRouter);

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
});
