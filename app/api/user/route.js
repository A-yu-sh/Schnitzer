import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import { NextResponse } from "next/server";
import UserMODEL from "@/model/UserModel";

export async function POST(req, res) {
  const { authId, name, email, provider } = await req.json();
  await CONNECT_MONGO_DB();
  await UserMODEL.create({
    authId,
    name,
    email,
    provider,
  });

  return NextResponse.json({ message: "created" });
}

export async function GET(request, response) {
  await CONNECT_MONGO_DB();
  const res = await UserMODEL.find();
  return NextResponse.json(res);
}
