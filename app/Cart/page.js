"use client";
import { getTotal, removeFromCart } from "@/Redux/CartSlice";
import { Lato, Roboto } from "next/font/google";
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuantityCounter from "./QuantityCounter";
import Image from "next/image";
import Container from "../components/Container";
import { GrClose } from "react-icons/gr";
import CartTotalAmount from "./CartTotalAmount";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
});
const page = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.CART_PRODUCT);
  // const { CART_AMOUNT } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [Cart, dispatch]);

  const Remove = (e) => {
    dispatch(removeFromCart(e));
  };
  console.log(Cart);
  return (
    <Container>
      <div>
        {Cart.length > 0 ? (
          <div className="grid grid-cols-1 ">
            <div>
              {Cart &&
                Cart.map((e) => {
                  return (
                    <div className="flex justify-center">
                      <hr />
                      <section className="flex border-2 p-5 w-full md:w-1/2 border-gray-200 rounded-lg mt-10">
                        <div>
                          <Image
                            src={e.image}
                            alt="img"
                            height={200}
                            width={200}
                            className="w-32 h-full border-2 p-2 rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col ml-6  gap-2">
                          <div className="text-xl">{e.name}</div>
                          <span className="text-sm text-gray-400 mt-1">
                            Sold by : Schnitzer Inc
                          </span>

                          <div className=" w-full relative">
                            <button
                              aria-label="remove"
                              className="absolute left-64 md:left-[29rem] border-2  h-8 w-8 flex justify-end items-center px-2 rounded-lg"
                              onClick={() => Remove(e)}>
                              <GrClose />
                            </button>
                          </div>

                          <span
                            className={`${lato.className} flex leading-none text-primary-800 text-2xl font-bold`}>
                            {" "}
                            ₹{e.price * e.Quantity}{" "}
                            <span
                              className={`${roboto.className} text-sm text-gray-400 mt-1 ml-2`}>
                              {" "}
                              | {e.price}/pc
                            </span>
                          </span>
                          <QuantityCounter Quantity={e.Quantity} data={e} />
                        </div>
                        <hr />
                      </section>
                    </div>
                  );
                })}{" "}
              <div className="mt-5">
                <hr />
                <CartTotalAmount />
              </div>
              <div className="flex justify-center mt-7">
                <button className=" bg-black text-white px-20 py-5 rounded-lg">
                  {" "}
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
};

export default page;
