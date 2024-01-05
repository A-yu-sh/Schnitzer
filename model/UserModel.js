import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
    Cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "PRODUCT_MODEL" }],
  },
  { timestamps: true }
);

const UserMODEL = mongoose.models.users || mongoose.model("users", UserSCHEMA);
export default UserMODEL;
