import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
  },
  { timestamps: true }
);

const UserMODEL = mongoose.models.users || mongoose.model("users", UserSCHEMA);
export default UserMODEL;
