import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  // role: {
  //   required: true,
  //   type: String,
  // },
  fullName: {
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

export const User = mongoose.model("om", registerSchema);
