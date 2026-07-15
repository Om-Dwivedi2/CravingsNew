import express from "express";

import {
  LoginUser,
  LogoutUser,
  RegisterUser,
  ResetPassword,
  sendOtp,
  verifyOtp,
} from "../controller/auth.controller.js";
import { OTPAuthProtect } from "../middleware/AuthProtect.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", OTPAuthProtect, ResetPassword);

export default router;
