import React from "react";

import Image from "next/image";
import { Anton, Montserrat_Alternates } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

const montserrat = Montserrat_Alternates({
  weight: "400",
  subsets: ["vietnamese"],
});

const TwoColumnSection = ({ heading, paragraph, image, imagePosition }) => {
  return (
    <div className="hidden md:block">
      <div className=" w-full grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center mt-44">
        <div>
          <div className="flex justify-center md:justify-start">
            <h1
              className={`${anton.className}  text-5xl font-bold font-Nunito text-primary-800`}>
              {heading}
            </h1>
          </div>
          <div className="flex justify-start ">
            <p
              className={`${montserrat.className}  mt-5 text-lg text-gray-500 `}>
              {paragraph}
            </p>
          </div>
          <div className="flex justify-start"></div>
        </div>
        <div
          className={` col-start-1 ${
            imagePosition === "left" && "col-start-2"
          } w-[32rem] h-[30rem] `}>
          <Image
            src={image}
            width={500}
            height={500}
            className=" w-full h-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
