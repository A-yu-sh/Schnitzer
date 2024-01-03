"use client";
import { addToCart } from "@/Redux/CartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { BsBagCheckFill } from "react-icons/bs";

// import { POST_ARRAY } from "../api/Operations/route";

const Button = ({ data }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = async (data) => {
    dispatch(addToCart(data));
    setIsOpen(true);
    setInterval(() => setIsOpen(false), 1300);
  };

  return (
    <div>
      {data.quantity > 1 ? (
        <div>
          {isOpen ? (
            <div className="flex justify-center md:justify-start">
              <div className=" bg-green-400 py-1 text-green-700 font-bold w-1/2 flex justify-center rounded-lg mt-4">
                Added To Cart{" "}
              </div>
            </div>
          ) : null}
          <div className=" cursor-pointer flex justify-center md:justify-start mt-4">
            <button
              onClick={() => HandleClick(data)}
              className="mt-2 flex justify-center bg-black text-white text-lg w-1/2 md:w-2/4 p-5 px-12 rounded-lg ">
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className=" cursor-pointer flex justify-center md:justify-start mt-4">
            <button className="mt-2 flex justify-center bg-rose-500 disabled:cursor-not-allowed text-white text-lg w-1/2 md:w-2/4 p-5 px-12 rounded-lg ">
              Currently Not Available
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
