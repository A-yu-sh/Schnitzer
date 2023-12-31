import { GET_DATA_BY_CATEGORY } from "@/app/api/Operations/route";
import Cards from "@/app/components/Cards";
import Container from "@/app/components/Container";
import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

const page = async ({ params }) => {
  const category = params.category;
  const data = await GET_DATA_BY_CATEGORY(category);

  return (
    <div className="flex">
      <Container>
        <h1 className={`${anton.className} justify-center text-3xl mt-9`}>
          Browse {category}
        </h1>
        <div className={` grid grid-cols-1 gap-8 md:grid-cols-3`}>
          {data &&
            data.map((e) => {
              return (
                <div key={e._id} className="">
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
        </div>{" "}
      </Container>
    </div>
  );
};

export default page;
