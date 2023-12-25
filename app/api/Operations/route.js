import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import { NextResponse } from "next/server";

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
  // const id=request.nexturl.searchparams.get('id')
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.findById(id);
  return res;
}
