import express from "express";
import { UserUpdateProfile} from "../controller/user.controller.js";
import { AuthProtect } from "../middleware/AuthProtect.js";

const router = express.Router();

router.put("/edit-profile", AuthProtect, UserUpdateProfile);


export default router;
