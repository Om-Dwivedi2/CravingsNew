import express from "express";
import { UserDashboard } from "../controller/user.controller.js";
import { AuthProtect } from "../middleware/AuthProtect.js";

const router = express.Router();

router.get("/dashboard", AuthProtect, UserDashboard);

export default router;
