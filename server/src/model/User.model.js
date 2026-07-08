import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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

  photo: {
    url: {
      type: String,
    },
    publicId: {
      type: String,
    },
  },

  userType:{
    type:String,
    enum:["admin", "restaurant", "rider", "customer"],
    required: true,
    default:"customer"
  }


});

export const User = mongoose.model("user", UserSchema);
