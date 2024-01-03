"use client";
import React, { useEffect } from "react";

const page = ({ params }) => {
  const name = params.name;

  return <div>page{name}</div>;
};

export default page;
