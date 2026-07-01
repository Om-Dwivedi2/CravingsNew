import { User } from "../model/User.model.js";
import jwt from "jsonwebtoken";

export const UserDashboard = async (req, res, next) => {
  try {
    console.log(1);

    const token = req.cookies.UserToken;
    console.log(2);

    if (!token) {
      const error = new Error(" Sorry Session Expired!!!");
      error.statusCode = 401;
      return next(error);
    }

    // Authorization using JWT

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const verifyUser = await User.findById(decode.id);

    if (!verifyUser) {
      const error = new Error("User doesn't exist");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "Access Granted" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
