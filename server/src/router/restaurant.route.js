import React from "react";
import { restaurantAuthProtect } from "../middleware/auth.middleware.js";
import { restaurantUpdateProfile } from "../controller/restaurant.controller.js";
import multer from "multer";
const router = express.Router();

const upload = multer();

router.post(
  "/update-profile",
  upload.single("coverImage"),
  upload.array("restaurantImage", 10),
  restaurantAuthProtect,
  restaurantUpdateProfile,
);

export default router;
