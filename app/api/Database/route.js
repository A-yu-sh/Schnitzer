import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import { NextResponse } from "next/server";
import { Redis } from "ioredis";
import UserMODEL from "@/model/UserModel";

Redis.createClient({
  port: 6379,
  host: process.env.REDIS_HOST,
});

const CLI = new Redis();

export async function POST(req, res) {
  const { name, email, provider } = await req.json();
  await CONNECT_MONGO_DB();
  await UserMODEL.create({ name, email, provider });
  return NextResponse.json({ message: "created" });
}

export async function GET(request, response) {
  await CONNECT_MONGO_DB();
  const CachedValue = await CLI.get("Collection");

  if (CachedValue) {
    const ReturnData = JSON.parse(CachedValue);
    return NextResponse.json(ReturnData);
  } else {
    const res = await PRODUCT_MODEL.find();
    await CLI.set("Collection", JSON.stringify(res));
    CLI.expire("Collection", 600);
    return NextResponse.json(res);
  }
}

// export async function GET(request, response) {
//   await CONNECT_MONGO_DB();

//   const res = await PRODUCT_MODEL.find();
//   return NextResponse.json(res);
// }
