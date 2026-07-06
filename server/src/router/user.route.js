import express from "express";
import { UserUpdateProfile } from "../controller/user.controller.js";
import { AuthProtect } from "../middleware/AuthProtect.js";
import multer from "multer";

const Upload = multer();
const router = express.Router();

router.put(
  "/edit-profile",
  AuthProtect,
  Upload.single("displayPic"),
  UserUpdateProfile,
);

export default router;
