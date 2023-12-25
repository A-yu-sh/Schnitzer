import React from "react";
import Container from "../components/Container";
import { Anton } from "next/font/google";
import Cards from "../components/Cards";
import InputHandler from "./InputHandler";

// The Font For the Heading
const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],

  // The Function to Get All the Product
});
const FETCHER = async () => {
  const res = await fetch("http://localhost:3000/api/Database", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};
const page = async () => {
  const product = await FETCHER();

  return (
    <Container>
      <div className={`${anton.className} mt-20 flex justify-center  text-7xl`}>
        OUR COLLECTION
      </div>

      <InputHandler />

      <div className="grid grid-cols-1 md:grid-cols-3">
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
    </Container>
  );
};

export default page;
