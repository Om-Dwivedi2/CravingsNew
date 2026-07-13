import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    addressBook: {
      type: [
        {
          name: { type: String, required: true },
          address: { type: String, required: true },
          city: { type: String, required: true },
          state: { type: String, required: true },
          pinCode: { type: String, required: true },
          country: { type: String, required: true },
          addressType: {
            type: String,
            enum: ["work", "home", "others"],
          },
          isDefault: { type: Boolean, default: false },
          geoLocation: {
            type: {
              lat: {
                type: String,
              },
              lon: {
                type: String,
              },
            },
          },
        },
      ],
    },
  },
  { timeStamp: true },
);

const Customer = mongoose.model("customer", customerSchema);
export default Customer;
