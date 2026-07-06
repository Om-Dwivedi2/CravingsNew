import { User } from "../model/User.model.js";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.config.js";

export const UserUpdateProfile = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;
    const newPhoto = req.file;

    console.log("req.body: ", req.body);
    console.log("req.file: ", req.file);

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

    console.log("newPhoto: ", newPhoto);

    if (newPhoto) {
      console.log(1);

      const b64 = Buffer.from(newPhoto.buffer).toString("base64");
      console.log(2);

      const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;
      console.log(dataURI.slice(0,100));

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Cravings/profiles",
        width: 400,
        height: 400,
        crop: "fill",
      });

      console.log("Result: ", result);

      console.log(4);
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
