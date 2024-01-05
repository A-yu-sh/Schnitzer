import React from "react";
import Image from "next/image";
import { Montserrat, Prompt, Raleway } from "next/font/google";

const prompt = Prompt({
  weight: "700",
  subsets: ["latin-ext"],
});

const montesrrat = Montserrat({
  weight: "300",
  subsets: ["vietnamese"],
});

const raleway = Raleway({
  weight: "700",
  subsets: ["vietnamese"],
});

const StaticCards = ({ Heading, Paragraph, Images, Position }) => {
  return (
    <div className="mt-44">
      <div className="  shadow-2xl  rounded-2xl">
        {Position === "left" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex justify-start">
              {
                <Image
                  src={Images}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-[40rem] h-[34rem] sm:rounded-2xl md:rounded-l-2xl"
                />
              }
            </div>
            <div>
              <div
                className={`${raleway.className} text-start mt-10 md:mt-40 text-5xl ml-5`}>
                {Heading}
              </div>
              <div className={`${montesrrat.className} p-7 text-start`}>
                {Paragraph}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div
                className={`${raleway.className} text-start  mt-32 text-5xl ml-5`}>
                {Heading}
              </div>
              <div className={`${montesrrat.className} p-7 text-start`}>
                {Paragraph}
              </div>
            </div>
            <div className="flex justify-end">
              {
                <Image
                  src={Images}
                  width={1000}
                  height={1000}
                  alt="img"
                  className="w-[40rem] h-[34rem] rounded-2xl md:rounded-r-2xl"
                />
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticCards;
