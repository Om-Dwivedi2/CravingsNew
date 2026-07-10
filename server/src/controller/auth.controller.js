import mongoose from "mongoose";
import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genToken } from "../utils/auth.service.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, dob, password, userType } =
      req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !gender ||
      !dob ||
      !password ||
      !userType
    ) {
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

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    console.log({ fullName, email, phone, gender, dob, hashedPassword, userType });

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      password: hashedPassword,
      photo,
      userType
    });

    

    res
      .status(201)
      .json({ message: "User Registered Successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Fill all fields");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("The user doesn't exist");
      error.statusCode = 400;
      return next(error);
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordCorrect) {
      const error = new Error("Incorrect Password");
      error.statusCode = 400;
      return next(error);
    }

    await genToken(res, existingUser);

    res
      .status(200)
      .json({ message: "User Successfully Login", data: existingUser });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LogoutUser = async (req, res, next) => {
  try {
    res.clearCookie("UserToken", { maxAge: 0 });
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
