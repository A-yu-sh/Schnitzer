import mongoose from "mongoose";

export async function CONNECT_MONGO_DB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return await mongoose.connect(process.env.MONGO_DB_URI);
  }
}
