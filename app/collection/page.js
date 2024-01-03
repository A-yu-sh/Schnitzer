import React from "react";
import Container from "../components/Container";
import { Anton } from "next/font/google";
import Cards from "../components/Cards";

// The Font For the Heading
const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

// The REDIS CLIENT

// The Function to Get All the Product

const FETCHER = async () => {
  const res = await fetch("http://localhost:3000/api/Database", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
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
