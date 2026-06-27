import express from "express";
import { RegisterUser } from "../controller/auth.controller.js";
const router = express.Router();


router.get("/register", RegisterUser);

export default router;