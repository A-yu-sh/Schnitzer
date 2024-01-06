import mongoose, { mongo } from "mongoose";

const ORDER_SCHEMA = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  category: String,
});

const ORDER_MODEL =
  mongoose.models.OrderHistory || mongoose.model("OrderHistory", ORDER_SCHEMA);
export default ORDER_MODEL;
