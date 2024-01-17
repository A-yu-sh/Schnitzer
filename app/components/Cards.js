"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Container from "./Container";

const MONTSERRAT = Montserrat({
  weight: "400",
  subsets: ["cyrillic-ext"],
});
const MONTSERRAT_price = Montserrat({
  weight: "800",
  subsets: ["cyrillic-ext"],
});

let value = [
  { label: "13mm Drivers" },
  { label: "BEAST™ Mode" },
  { label: "ENx™ Technology" },
  { label: "IWP Technology" },
];

const Cards = ({ id, name, img, Price, Category, description, catchline }) => {
  return (
    // <Container>
    <div className="border-2  w-[37rem] md:w-[20rem] rounded-lg p-5 mt-10">
      <Link
        href="/collection/[category]/[id]"
        as={`/collection/${Category}/${id}`}>
        <div className=" ">
          <div className="flex justify-center">
            <Image
              src={img}
              width={1050}
              height={1050}
              priority={true}
              alt={`image of ${name}`}
              className="flex justify-center bg-stone-100 rounded-t-lg md:h-[15rem] w-full md:w-[18rem] p-20"
            />
          </div>

          <p
            className={`${MONTSERRAT_price.className} flex justify-center rounded-b-lg py-2 font-bold bg-yellow-300`}>
            {"AMOLED Display" || "60hrs playback" || "ENXM Technology"}
          </p>

          <p
            className={`${MONTSERRAT.className} font-bold text-xl mt-7 md:mt-2  `}>
            {name}
          </p>
          <p
            className={`${MONTSERRAT_price.className} flex justify-between font-bold text-4xl md:text-2xl mt-5 md:mt-2  `}>
            ${Price}
          </p>

          <hr />
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-4">
            {value.map((e) => {
              return (
                <div
                  key={e.label}
                  className="text-[10px]  bg-blue-50 flex justify-center p-1 rounded-lg ">
                  {e.label}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
    // </Container>
  );
};

export default Cards;
