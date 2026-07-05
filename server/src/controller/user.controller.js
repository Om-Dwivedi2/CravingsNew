import { User } from "../model/User.model.js";
import jwt from "jsonwebtoken";

export const UserUpdateProfile = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email || !phone) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User Doesn't exist");
      error.statusCode = 401;
      return next(error);
    }

    const payload = {
      fullName,
      email,
      phone,
    };

    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      payload,
      { new: true },
    );

    res
      .status(200)
      .json({ message: "User Updated Sucesfully", data: updatedUser });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


