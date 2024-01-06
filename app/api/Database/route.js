import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import PRODUCT_MODEL from "@/model/ProductModel";
import { NextResponse } from "next/server";
import { Redis } from "ioredis";

const REDISHOST = process.env.REDIS_HOST;
const REDISPORT = 6379;
const REDISAUTH = process.env.AUTHSTRING;

const CLI = new Redis({
  port: REDISPORT,
  host: REDISHOST,
  password: REDISAUTH,
});

export async function GET(request, response) {
  await CONNECT_MONGO_DB();
  const CachedValue = await CLI.get("Collection");

  if (CachedValue) {
    const ReturnData = JSON.parse(CachedValue);
    return NextResponse.json(ReturnData);
  } else {
    const res = await PRODUCT_MODEL.find();
    await CLI.set("Collection", JSON.stringify(res));
    CLI.expire("Collection", 1800);
    return NextResponse.json(res);
  }
}
