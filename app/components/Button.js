"use client";
import { addToCart } from "@/Redux/CartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { BsBagCheckFill } from "react-icons/bs";

const Button = ({ data }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = (data) => {
    dispatch(addToCart(data));
    setIsOpen(true);
    setInterval(() => setIsOpen(false), 1500);
  };

  return (
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
  );
};

export default Button;
