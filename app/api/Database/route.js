import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import { NextResponse } from "next/server";

// The Data is being fetched from the database and exported as NextResponse.json

export async function GET(request, response) {
  await CONNECT_MONGO_DB();
  const res = await PRODUCT_MODEL.find();
  return NextResponse.json(res);
}
