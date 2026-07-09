import { User } from "../model/User.model.js";
import bcrypt from "bcrypt"

const AdminUser = {
  fullName: "Admin",
  email: "admin@craving.com",
  phone: 9229783463,
  gender: "male",
  dob: "2000-01-01",
  password: await bcrypt.hash("admin@123", 10),
  userType: "admin",
};

const adminSeed = async () => {
  try {
    const existingUser = await User.findOne({ email: AdminUser.email });

    if (existingUser) {
      console.log("Admin already exist");
      const deleteAdmin = await User.deleteOne();
      console.log("Old Admin is deleted");
    }

    const newAdmin = await User.create(AdminUser);
    console.log("New Admin Created");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default adminSeed;
