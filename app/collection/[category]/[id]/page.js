import { Mitr, Metrophobic } from "next/font/google";
import React from "react";
import { GET_DATA_BY_ID } from "@/app/api/Operations/route";
import Image from "next/image";
import { VscIndent } from "react-icons/vsc";
import { RiStockFill } from "react-icons/ri";

const mitr = Mitr({
  weight: "400",
  subsets: ["latin"],
});
const metrophobic = Metrophobic({
  weight: "400",
  subsets: ["latin"],
});

const page = async ({ params }) => {
  const id = params.id;

  const data = await GET_DATA_BY_ID(id);

  const Hr = Math.floor(Math.random() * 20) + 15;
  const STOCK = data.quantity;
  const EMI = (data.price / 36 + 20).toFixed();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
      <div className="flex   mt-20 m-20 bg-stone-100 ml-[24%]  rounded-xl ">
        <Image
          src={data.image}
          height={615}
          width={519}
          alt={data.name}
          className=" h-72 md:h-[35rem] md:w-[100rem] w-80 justify-end"
        />
      </div>

      <div className="  ">
        <div>
          <div
            className={`${mitr.className} flex justify-center md:justify-start text-6xl font-bold mt-2 md:mt-20`}>
            {data.name}
          </div>
          <div className="mt-5 flex justify-center md:justify-start text-gray-500">
            {Hr} Hours Playback with ENXM Technology
          </div>
          <div className="">
            {STOCK > 10 ? (
              <div className="font-bold text-green-500 flex justify-center md:justify-start">
                Available In Stock
              </div>
            ) : (
              <div className="font-bold text-red-500">Out of Stock</div>
            )}{" "}
          </div>
          <hr className="mt-5 w-[34rem]" />
          <div className="mt-7">
            <div className="max-w-[50ch] text-center md:text-left">
              {data.description}{" "}
            </div>
          </div>

          <div
            className={`${mitr.className} flex justify-center md:justify-start text-4xl mt-5 `}>
            ${data.price}{" "}
          </div>
          <div
            className={`${metrophobic.className}  mt-3 leading-7 text-gray-500`}>
            <div className="flex justify-center md:justify-start">
              {" "}
              From ${EMI}/Mo
            </div>
            <div className="flex justify-center md:justify-start">
              {" "}
              Includes Service Charge of $3
            </div>
            <div className="flex justify-center md:justify-start">
              {" "}
              14 Days Replacement
            </div>
            <div className="flex justify-center md:justify-start">
              {" "}
              Fast and Free Delivery
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <div className="mt-2 flex justify-center bg-black text-white w-1/2 md:w-2/4 p-5 px-12 rounded-lg ">
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
