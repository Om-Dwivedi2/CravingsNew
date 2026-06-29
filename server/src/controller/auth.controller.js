import mongoose from "mongoose";
import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, dob, password } = req.body;

    if (!fullName || !email || !phone || !gender || !dob || !password) {
      const error = new Error("Fill all fields");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exist with given email");
      error.statusCode = 409;
      return next(error);
    }

    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    console.log({ fullName, email, phone, gender, dob, hashedPassword });

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User Created Successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    console.log(1);
    
    const { email, password } = req.body;
console.log(2);
    if (!email || !password) {
      const error = new Error("Fill all fields");
      error.statusCode = 400;
      return next(error);
    }
console.log(3);
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("The user doesn't exist");
      error.statusCode = 400;
      return next(error);
    }
console.log(4);
    
    const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

console.log(5);
    if (!isPasswordCorrect) {
      const error = new Error("Incorrect Password");
      error.statusCode = 400;
      return next(error);
    }
console.log(6);
    res.status(200).json({ message: "User Successfully Login" });
  console.log(7);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LogoutUser = async (req, res, next) => {};
