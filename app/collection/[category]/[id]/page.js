import { Mitr, Metrophobic } from "next/font/google";
import React from "react";
import { GET_DATA_BY_ID } from "@/app/api/Operations/route";
import Image from "next/image";
import DrawAccordion from "./Accordion";
import QuantityCounter from "../../../Cart/QuantityCounter";
import Button from "@/app/components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/CartSlice";

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
  const Truedata = JSON.parse(JSON.stringify(data));
  const Hr = Math.floor(Math.random() * 20) + 15;
  const STOCK = data.quantity;
  const EMI = (data.price / 36 + 20).toFixed();

  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex   mt-20 m-20 bg-stone-300 ml-[24%]  rounded-xl ">
          <Image
            src={data.image}
            height={615}
            width={519}
            alt={data.name}
            className=" h-72 md:h-full md:w-full w-80 justify-end"
          />
        </div>

        <div className="  ">
          <div>
            <div
              className={`${mitr.className}  flex justify-center md:justify-start text-4xl md:text-6xl font-bold mt-2 md:mt-20`}>
              {data.name}
            </div>
            <div className="mt-5  flex justify-center md:justify-start text-gray-500">
              {Hr} Hours Playback with ENXM Technology
            </div>
            <div className="">
              {STOCK > 0 ? (
                <div className="font-bold text-green-400 flex justify-center md:justify-start">
                  Available In Stock
                </div>
              ) : (
                <div className="font-bold text-red-600">Out of Stock</div>
              )}{" "}
            </div>
            <hr className="mt-5 w-1/2 md:w-[34rem] " />
            <div className="mt-7">
              <div className="max-w-[60ch] text-center md:text-left">
                {data.description}{" "}
              </div>
            </div>
            <div
              className={`${mitr.className} flex justify-center md:justify-start text-4xl mt-5 `}>
              ₹{data.price}{" "}
            </div>
            <div
              className={`${metrophobic.className}  mt-3 leading-7 text-gray-500`}>
              <div className="flex justify-center md:justify-start">
                {" "}
                From ₹{EMI}/Mo
              </div>
              <div className="flex justify-center md:justify-start">
                {" "}
                Includes Service Charge of ₹200
              </div>
              <div className="flex justify-center md:justify-start">
                {" "}
                14 Days Replacement
              </div>
              <div className="flex justify-center md:justify-start">
                {" "}
                Fast and Free Delivery
              </div>
            </div>{" "}
            <Button data={Truedata} />
          </div>
        </div>
      </div>
      {/* <DrawAccordion /> */}
    </div>
  );
};

export default page;