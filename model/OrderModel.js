// import mongoose, { mongo } from "mongoose";

// const ORDER_SCHEMA = new mongoose.Schema({
//   userId : {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'user'
//   },
//   OrderItems: [
//     {
//       product:{type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'product'},
//         name:{
//           type: String,
//           required: true
//         },
//         quantity:{
//           type: String,
//           required: true
//         },
//         price:{
//           type: String,
//           required: true
//         },
//     }
//   ]
// });

// const ORDER_MODEL =
//   mongoose.models.OrderHistory || mongoose.model("OrderHistory", ORDER_SCHEMA);
// export default ORDER_MODEL;
