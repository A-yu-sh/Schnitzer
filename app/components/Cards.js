import React from "react";
import Image from "next/image";
import { Metrophobic, Quicksand } from "next/font/google";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Container from "./Container";

const metrophobic = Metrophobic({
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: "600",
  subsets: ["latin"],
});

const Cards = ({ id, name, img, Price, Category }) => {
  return (
    <Container>
      <div>
        <Link
          href="/collection/[category]/[id]"
          as={`/collection/${Category}/${id}`}>
          <div className="border-2 border-gray-200  w-[17rem] md:w-[20rem] rounded-lg mt-10 p-5">
            <div className="flex justify-center">
              <Image
                src={img}
                width={150}
                height={150}
                priority={true}
                alt={`image of ${name}`}
                className="flex justify-center bg-stone-100 rounded-lg  transition-all hover:scale-105 ease-in h-[15rem] w-[18rem] p-20"
              />
            </div>

            <p
              className={`${quicksand.className} font-bold text-xl mt-2 ml-7 `}>
              {name}
            </p>
            <p
              className={`${quicksand.className} font-bold text-xl mt-2 ml-7 max-w-[12ch]`}>
              ₹{Price}
            </p>
          </div>

          {/* <div>
          <div className="flex w-80 mt-12 flex-col border-2 rounded-xl overflow-hidden border-opacity-20">
            <div className="flex justify-center ">
              <Image
                src={img}
                alt={name}
                width={50}
                height={50}
                className=" bg-stone-100 rounded-lg  transition-all hover:scale-125 ease-in  p-10"
              />
            </div>
            <div className="p-5">
              <h1 className="text-1xl leading-none mb-3 font-Nunito mt-2">
                {name}
              </h1>
              <p className="text-lg leading-none text-primary-800 font-Nunito font-bold">
                ${Price}
              </p>
            </div>
          </div>
        </div> */}
        </Link>
      </div>
    </Container>
  );
};

export default Cards;
