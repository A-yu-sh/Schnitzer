import React from "react";
import { GET_TRENDING_DATA } from "../api/Operations/route";
import Cards from "./Cards";
import { Anton } from "next/font/google";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const anton = Anton({
  weight: "400",
  subsets: ["latin-ext"],
});

const TrendingComponent = async () => {
  const Product = await GET_TRENDING_DATA();

  return (
    <div>
      <div
        className={`${anton.className} flex justify-center text-4xl md:text-6xl mt-7 md:mt-16`}>
        Our Trending Products
      </div>
      <Link
        href="/trending"
        className="flex justify-center md:justify-end mt-5 md:mt-0 text-md mb-1 text-yellow-500 font-semibold">
        View All{" "}
        <span className="mt-1 ml-1">
          <FaRegArrowAltCircleRight />
        </span>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4  py-4">
        {Product.filter((e, idx) => {
          return idx > 2 && idx < 7;
        }).map((e) => {
          return (
            <div className="flex justify-center">
              <Cards
                id={e._id}
                Category={e.category}
                name={e.name}
                img={e.image}
                Price={e.price}
                className=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingComponent;
