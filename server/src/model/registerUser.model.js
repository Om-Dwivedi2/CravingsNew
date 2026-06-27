import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  role: {
    required: true,
    type: String,
  },
  fullname: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  phone: {
    required: true,
    type: Number,
  },

  password: {
    required: true,
    type: String,
  },
});


export const userModel = mongoose.model("users", registerSchema)