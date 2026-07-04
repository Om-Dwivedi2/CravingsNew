import { User } from "../model/User.model.js";
import jwt from "jsonwebtoken";

export const UserDashboard = async (req, res, next) => {
  try {
    

    
    res.status(200).json({ message: "Hello from user controller" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
