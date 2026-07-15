import mongoose from "mongoose";
import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genOTPToken, genToken } from "../utils/auth.service.js";
import OTP from "../model/otp.model.js";
import sendEmail from "../config/email.config.js";
import { sendOTPEmail } from "../utils/email.service.js";

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

    console.log({
      fullName,
      email,
      phone,
      gender,
      dob,
      hashedPassword,
      userType,
    });

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      password: hashedPassword,
      photo,
      userType,
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

export const sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      const error = new Error("Email is required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("The user doesn't exist");
      error.statusCode = 400;
      return next(error);
    }

    // Generate a 6-digit OTP
    const Otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(Otp, 10);

    const isOldOtpExists = await OTP.findOne({ email });

    if (isOldOtpExists) {
      await isOldOtpExists.deleteOne();
    }

    const newOtp = await OTP.create({ email, otp: hashedOtp });

    await sendOTPEmail(email, Otp);

    res.status(200).json({ message: `OTP send on ${email}` });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email) {
      const error = new Error("Email is required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }

    const existingOTP = await OTP.findOne({ email });
    if (!existingOTP) {
      const error = new Error("OTP Expired");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(otp, existingOTP.otp);
    if (!isVerified) {
      const error = new Error("OTP Expired");
      const statusCode = 401;
      return next(error);
    }

    await existingOTP.deleteOne();

    await genOTPToken(existingUser, res);

    res.status(200).json({ message: "Otp Verified" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const ResetPassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;

    const currentUser = req.user;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    currentUser.password = hashedPassword;

    await currentUser.save();

    res.status(200).json({ message: "Password Changed" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
