import express from "express";
import { UserChangePassword, UserUpdateProfile } from "../controller/common.controller.js";
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

router.patch("/change-password", AuthProtect, UserChangePassword);

export default router;
