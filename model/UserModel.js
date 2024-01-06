import mongoose from "mongoose";

const UserSCHEMA = new mongoose.Schema({
  name: String,
  email: String,
  provider: String,
});

const UserMODEL =
  mongoose.models.schUsers || mongoose.model("schUsers", UserSCHEMA);
export default UserMODEL;
