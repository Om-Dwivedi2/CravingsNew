import bcrypt from "bcrypt";
import { User } from "../model/User.model.js";

const publicUser = [
  {
    fullName: "Customer1",
    email: "customer1@gmail.com",
    phone: 9229783463,
    gender: "male",
    dob: "2000-01-01",
    password: await bcrypt.hash("customer1@123", 10),
    userType: "customer",
  },
  {
    fullName: "Restaurant1",
    email: "restaurant1@gmail.com",
    phone: 9229783463,
    gender: "male",
    dob: "2000-01-01",
    password: await bcrypt.hash("restaurant1@123", 10),
    userType: "restaurant",
  },
  {
    fullName: "rider1",
    email: "rider1@gmail.com",
    phone: 9229783463,
    gender: "male",
    dob: "2000-01-01",
    password: await bcrypt.hash("rider1@123", 10),
    userType: "rider",
  },
];

const userSeed = async () => {
  try {
    // Seeding Customer
    const existingCustomer = await User.findOne({ email: publicUser[0].email });
    
    if (existingCustomer) {
      console.log("Customer already exist");
      await User.deleteOne();
      console.log("Customer deleted successfully");
    }
    const newCustomer = await User.create(publicUser[0]);
    console.log("New Customer Created");

    // Seeding Restaurant
    const existingRestaurant = await User.findOne({
      email: publicUser[1].email,
    });

    if (existingRestaurant) {
      console.log("Restaurant already exist");
      await User.deleteOne();
      console.log("Restaurant deleted successfully");
    }
    const newRestaurant = await User.create(publicUser[1]);
    console.log("New Restaurant Created");

    // Seeding Rider
    const existingRider = await User.findOne({ email: publicUser[2].email });

    if (existingRider) {
      console.log("Rider already exist");
      await User.deleteOne();
      console.log("Rider deleted successfully");
    }
    const newRider = await User.create(publicUser[2]);
    console.log("New Rider Created");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
export default userSeed;
