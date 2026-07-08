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
      existingUser?.photo?.publicId &&
        (await cloudinary.uploader.destroy(existingUser.photo.publicId));

      const b64 = Buffer.from(newPhoto.buffer).toString("base64");

      const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Cravings/profiles",
        width: 400,
        height: 400,
        crop: "fill",
      });

      console.log("Result: ", result);

      existingUser.photo.url = result.secure_url;
      existingUser.photo.publicId = result.public_id;
    }

    existingUser.fullName = fullName;
    existingUser.email = email;
    existingUser.phone = phone;

    existingUser.save();

    res
      .status(200)
      .json({ message: "User Updated Sucesfully", data: existingUser });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
