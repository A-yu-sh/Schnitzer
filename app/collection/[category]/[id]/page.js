import React from "react";
import { GET_DATA_BY_ID } from "@/app/api/Operations/route";

const page = async ({ params }) => {
  const id = params.id;
  const Category = params.category;

  const data = await GET_DATA_BY_ID(id);
  // console.log(data);
  return <div>{data.name}</div>;
};

export default page;
