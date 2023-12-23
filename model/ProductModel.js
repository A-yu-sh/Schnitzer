import mongoose, { mongo } from "mongoose";

const PRODUCT_SCHEMA = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  quantity: Number,
  price: Number,
  category: String,
  warranty: String,
  batchNumber: Number,
  istrending: String,
  catchLine: String,
});

const PRODUCT_MODEL =
  mongoose.models.Product || mongoose.model("Product", PRODUCT_SCHEMA);
export default PRODUCT_MODEL;
