import express from "express";
import { UserDashboard } from "../controller/user.controller.js";

const router = express.Router();

router.get("/dashboard" , UserDashboard);

export default router;
