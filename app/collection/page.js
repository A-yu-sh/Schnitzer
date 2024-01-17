import React from "react";
import Container from "../components/Container";
import { Anton } from "next/font/google";
import Cards from "../components/Cards";
import Search from "./Search";
import { GET_DATA_BY_QUERY } from "../api/Operations/route";
import { data } from "autoprefixer";
import SortingButtons from "./SortingButtons";

export const metadata = {
  title: "Schnitzer | Collection",
  description:
    "Explore Cutting-Edge Gadgets at Schnitzer Tech Hub | Earphones, Smartwatches, Speakers & More",
  content: "",
};

// The Font For the Heading
const anton = Anton({
  weight: "400",
  subsets: ["latin-ext"],
});

const page = async ({ searchParams }) => {
  const query = searchParams.query || "";
  const sortBy = searchParams.sort_By || "";

  const FETCHER = async () => {
    const value = query;
    if (value) {
      const data = await GET_DATA_BY_QUERY(value);
      return data;
    } else {
      const res = await fetch(`${process.env.URL_VALUE}/api/Database`, {
        cache: "no-store",
      });
      const data = await res.json();
      return data;
    }
  };

  const product = await FETCHER();

  return (
    <Container>
      <Container>
        <div>
          <div
            className={`${anton.className} mt-52 flex justify-center  text-4xl md:text-7xl`}>
            OUR COLLECTION {sortBy}
          </div>

          <Search />
          <SortingButtons />

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
    </Container>
  );
};

export default page;
