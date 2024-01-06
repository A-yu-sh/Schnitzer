import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema({
  authId: Number,
  name: String,
  email: String,
  provider: String,
});

const UserMODEL =
  mongoose.models.authUsers || mongoose.model("authUsers", UserSCHEMA);
export default UserMODEL;
