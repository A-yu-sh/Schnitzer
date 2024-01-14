import React from "react";
import { GET_TRENDING_DATA } from "../api/Operations/route";
import Cards from "../components/Cards";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin-ext"],
});

const page = async () => {
  const product = await GET_TRENDING_DATA();
  return (
    <div>
      <div
        className={`${anton.className} mt-44 flex justify-center  text-4xl md:text-7xl`}>
        Our Trending Products
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
  );
};

export default page;
