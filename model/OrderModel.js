// import mongoose, { mongo } from "mongoose";

// const ORDER_SCHEMA = new mongoose.Schema({
//   product_id: { ref: "Product" },
//   userID: Number,
//   product_name: String,
//   product_price: String,
// });

// // const ORDER_SCHEMA = new mongoose.Schema({
// //   userId : {
// //     type: mongoose.Schema.Types.ObjectId,
// //     required: true,
// //     ref: 'user'
// //   },
// //   OrderItems: [
// //     {
// //       product:{type: mongoose.Schema.Types.ObjectId,
// //         required: true,
// //         ref: 'product'},
// //         name:{
// //           type: String,
// //           required: true
// //         },
// //         quantity:{
// //           type: String,
// //           required: true
// //         },
// //         price:{
// //           type: String,
// //           required: true
// //         },
// //     }
// //   ]
// // });

// const ORDER_MODEL =
//   mongoose.models.OrderHistory || mongoose.model("OrderHistory", ORDER_SCHEMA);
// export default ORDER_MODEL;

import { Schema, model, models, Document } from "mongoose";

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
