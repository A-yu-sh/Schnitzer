"use client";
import { addToCart, decreaseCart } from "@/Redux/CartSlice";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GoPlus, GoMinus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";

const QuantityCounter = ({ Quantity, data }) => {
  const Cart = useSelector((state) => state.cart.CART_PRODUCT);

  const dispatch = useDispatch();

  const Decrease = (cart) => {
    dispatch(decreaseCart(cart));
  };
  const Increase = (cart) => {
    dispatch(addToCart(cart));
  };

  return (
    <div className=" mt-2">
      <div className="  ">
        <div className="">
          <div className="border-2 border-gray-300 py-[0.3rem] flex justify-center rounded-lg w-24">
            <button aria-label="decrement" onClick={() => Decrease(data)}>
              <GoDash />
            </button>
            <div className="px-4">{Quantity}</div>
            <button aria-label="increment" onClick={() => Increase(data)}>
              <GoPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
