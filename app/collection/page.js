import React from "react";
import Container from "../components/Container";
import { Anton } from "next/font/google";
import Cards from "../components/Cards";
import { Redis } from "ioredis";

// The Font For the Heading
const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

// The REDIS CLIENT
const CLI = new Redis();

const FETCHER = async () => {
  const CachedValue = await CLI.get("Collection_Products");
  if (CachedValue) {
    const ReturnData = JSON.parse(CachedValue);
    return ReturnData;
  } else {
    const res = await fetch("http://localhost:3000/api/Database", {
      cache: "no-store",
    });
    const data = await res.json();
    await CLI.set("Collection_Products", JSON.stringify(data));
    CLI.expire("Collection_Products", 600);
    return data;
  }
};

const page = async () => {
  const product = await FETCHER();

  return (
    <Container>
      <div>
        <div
          className={`${anton.className} mt-20 flex justify-center  text-4xl md:text-7xl`}>
          OUR COLLECTION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {product.map((e) => {
            return (
              <div key={e._id} className="flex justify-center">
                <Cards
                  id={e._id}
                  Category={e.category}
                  name={e.name}
                  img={e.image}
                  Price={e.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default page;
