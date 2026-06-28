import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
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

  subject: {
    required: true,
    type: String,
  },

  message: {
    required: true,
    type: String,
  },
});

const contact = mongoose.model("contact", contactSchema);

export default contact;
