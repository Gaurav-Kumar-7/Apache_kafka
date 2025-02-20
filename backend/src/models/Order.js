import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product: String,
    quantity: Number,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
