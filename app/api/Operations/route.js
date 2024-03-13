import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import UserMODEL from "@/model/UserModel";

// The GET_TRENDING_DATA() fetches the data that are marked as Trending = true
export async function GET_TRENDING_DATA() {
  await CONNECT_MONGO_DB();
  const res = PRODUCT_MODEL.aggregate([{ $match: { istrending: "True" } }]);
  return res;
}

// The GET_NEW_LAUNCH_DATA() fetches the data that are marked as NewLaunch = true
export async function GET_NEW_LAUNCH_DATA() {
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.aggregate([
    { $match: { category: "Smart Watch" } },
  ]);
  return res;
}

// The GET_DATA_BY_ID(id) fetches the data with the id parameter id from the database
export async function GET_DATA_BY_ID(id) {
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.findById(id);
  return res;
}

// The GET_DATA_BY_CATEGORY() fetches the data with the category parameter from the database
export const GET_DATA_BY_CATEGORY = async (Category) => {
  await CONNECT_MONGO_DB();
  const res = PRODUCT_MODEL.aggregate([
    { $match: { category: `${Category}` } },
  ]);
  return res;
};

// The GET_USER fetches the user data
export const GET_USER = async (id) => {
  await CONNECT_MONGO_DB();
  const res = UserMODEL.aggregate([{ $match: { _id: `${id}` } }]);
  return res;
};

export const GET_DATA_BY_QUERY = async (query) => {
  await CONNECT_MONGO_DB();
  const res = PRODUCT_MODEL.aggregate([{ $match: { category: `${query}` } }]);
  return res;
};
