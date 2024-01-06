import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import UserMODEL from "@/model/UserModel";
// import { Redis } from "ioredis";

// const CLI = new Redis(6379);

export async function GET_TRENDING_DATA() {
  await CONNECT_MONGO_DB();
  const res = PRODUCT_MODEL.aggregate([{ $match: { istrending: "True" } }]);
  return res;
}

export async function GET_NEW_LAUNCH_DATA() {
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.aggregate([
    { $match: { category: "Smart Watch" } },
  ]);
  return res;
}

export async function GET_DATA_BY_ID(id) {
  await CONNECT_MONGO_DB();
  // const Cache_Product_By_Id = await CLI.get(`Key : ${id}`);
  // if (Cache_Product_By_Id) {
  // const Product = JSON.parse(Cache_Product_By_Id);
  // return Product;
  // } else {
  const res = await PRODUCT_MODEL.findById(id);
  // await CLI.set(`Key : ${id}`, JSON.stringify(res));
  // CLI.expire(`Key : ${id}`, 600);
  return res;
  // }
}

export const GET_DATA_BY_CATEGORY = async (Category) => {
  await CONNECT_MONGO_DB();
  const res = PRODUCT_MODEL.aggregate([
    { $match: { category: `${Category}` } },
  ]);
  return res;
};

export const GET_USER = async (id) => {
  await CONNECT_MONGO_DB();
  const res = UserMODEL.aggregate([{ $match: { _id: `${id}` } }]);
  return res;
};
