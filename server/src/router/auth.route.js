import express from "express";
import { RegisterUser } from "../auth.controller.js";
const router = express.Router();


router.post("/register", RegisterUser);
router.post("login", )

export default router;