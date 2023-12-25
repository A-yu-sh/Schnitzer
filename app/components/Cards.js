import React from "react";
import Image from "next/image";
import { Metrophobic, Quicksand } from "next/font/google";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
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
    <div>
      <Link
        href="/collection/[category]/[id]"
        as={`/collection/${Category}/${id}`}>
        <div className="border-2 border-gray-200 flex w-[28rem] rounded-lg mt-10 p-5">
          <div className="flex justify-center">
            <Image
              src={img}
              width={50}
              height={50}
              alt={name}
              className="flex justify-center bg-stone-100 rounded-lg  transition-all hover:scale-105 ease-in h-[15rem] w-[13rem] p-20"
            />
          </div>

          <p
            className={`${quicksand.className} font-bold text-xl mt-2 ml-7 max-w-[12ch]`}>
            {name}
          </p>
          {/* <p className={`${metrophobic.className} flex mt-10`}>Rs. {Price}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Cards;
