import React from "react";
import Image from "next/image";

const PopularCategories = [
  {
    label: "Earbud",
    image: "/Earbud_Category.jpg",
  },
  {
    label: "Neckband",
    image: "/HeadPhone_Category.jpg",
  },
];

const PopularCategory = () => {
  return (
    <div className="mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/Earbud_Category.jpg"
            width={1000}
            height={1000}
            alt="image"
            className="h-[30rem] p-7 w-[50rem] transition hover:scale-110 ease-in opacity-100 hover:opacity-50"
          />
        </div>
        <div>
          <Image
            src="/HeadPhone_Category.jpg"
            width={1000}
            height={1000}
            alt="image"
            className="h-[30rem] p-7 w-[50rem] transition hover:scale-110 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
