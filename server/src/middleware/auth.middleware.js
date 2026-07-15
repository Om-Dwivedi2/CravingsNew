import jwt from "jsonwebtoken";
import { User } from "../model/User.model.js";

export const AuthProtect = async (req, res, next) => {
  try {
    // Middleware Logic

    const token = req.cookies.UserToken;

    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    console.log("decode :", decode);

    const verifyUser = await User.findById(decode.id);

    if (!verifyUser) {
      const error = new Error("User Doesn't Exist");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifyUser;

    next();
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export const OTPAuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.emailToken;
    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(decode.id);

    if (!verifiedUser) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    // Send the verified user to the Controller
    req.user = verifiedUser;
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const restaurantAuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.UserToken;

    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(decoded.id);

    if (!verifiedUser) {
      const error = new Error("User not found");
      error.statusCode = 401;
      return next(error);
    }

    if (verifiedUser.userType !== "restaurant") {
      const error = new Error(
        "Access denied. This endpoint is restricted to restaurant accounts",
      );
      error.statusCode = 403;
      return next(error);
    }

    req.user = verifiedUser;
    next();

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
