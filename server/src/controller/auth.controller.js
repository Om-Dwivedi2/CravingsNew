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

export const LoginUser = async(req, res, next)=>{
try {
  
} catch (error) {
  console.log(error.message);
  
  
}
};

export const LogoutUser = async (req,res,next)=>{

};
