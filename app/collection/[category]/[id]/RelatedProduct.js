import { GET_DATA_BY_CATEGORY } from "@/app/api/Operations/route";
import Cards from "@/app/components/Cards";
import { Lora } from "next/font/google";

const mukta = Lora({
  weight: "600",
  subsets: ["latin"],
});

import React from "react";

const RelatedProduct = async ({ category, id }) => {
  const data = await GET_DATA_BY_CATEGORY(category);
  return (
    <div>
      <div className="flex justify-center mt-32">
        <h1 className={`${mukta.className} text-5xl `}>Related Product</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-7">
        {data
          .filter((e, idx) => e._id != id && idx < 5)
          .map((e) => {
            return (
              <div key={e.id}>
                <div className="flex justify-center">
                  <Cards
                    id={e._id}
                    Category={e.category}
                    name={e.name}
                    img={e.image}
                    Price={e.price}
                    description={e.description}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProduct;
