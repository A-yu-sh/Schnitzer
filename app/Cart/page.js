"use client";
import { removeFromCart } from "@/Redux/CartSlice";
import { Lato, Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuantityCounter from "./QuantityCounter";
import Image from "next/image";
import Container from "../components/Container";
import { GrClose } from "react-icons/gr";
import CartTotalAmount from "./CartTotalAmount";
import Link from "next/link";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { loadStripe } from "@stripe/stripe-js";
import { CheckOutOrder } from "@/libs/CheckoutOrder";
import { useSession, signIn, signOut } from "next-auth/react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
});
const page = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Cart = useSelector((state) => state.cart.CART_PRODUCT);

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    }
  }, [status]);

  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const checkout = async (dt) => {
    await CheckOutOrder(dt);
  };

  const Remove = (e) => {
    dispatch(removeFromCart(e));
  };

  return (
    <Container>
      <div>
        <div className="flex justify-center text-4xl mt-10 font-bold">
          <h1>SHOPPING CART</h1>
          <hr />
        </div>
        {Cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              {Cart &&
                Cart.map((e) => {
                  return (
                    <div className="flex justify-start">
                      <section className="flex border-2 p-5 w-full  border-gray-200 rounded-lg mt-10">
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
                              className="absolute left-60 md:left-[29rem] border-2  h-8 w-8 flex justify-end items-center px-2 rounded-lg"
                              onClick={() => Remove(e)}>
                              <GrClose />
                            </button>
                          </div>

                          <span
                            className={`${lato.className} flex leading-none text-primary-800 text-2xl font-bold`}>
                            {" "}
                            ${e.price * e.Quantity}{" "}
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
              </div>
              <div className="flex justify-center mt-7">
                {/* <CheckOutButton /> */}
              </div>{" "}
            </div>
            <div className="grid grid-cols-1">
              <div className="m-0 md:ml-auto">
                <CartTotalAmount />
                {isLoggedIn ? (
                  <div className="flex justify-cente">
                    <button
                      onClick={() => checkout(Cart)}
                      className=" r bg-black text-white px-20 py-5 mt-7 rounded-lg">
                      {" "}
                      Proceed To Checkout
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      disabled={true}
                      className=" bg-gray-400 text-white px-20 py-5 mt-7 rounded-lg">
                      {" "}
                      Please Login To Continue
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className=" mt-52">
            <div className="flex justify-center">
              <FaHeadphonesSimple className="h-20 w-20" />
            </div>
            <div className="flex mt-5 justify-center">
              <p className=" font-bold text-xl">Your Cart is Empty</p>
            </div>
            <div className="flex justify-center">
              <p className="  text-sm text-gray-400">
                Add some items to your cart
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                href="/collection"
                className="bg-black  px-12 py-3 rounded-lg text-white">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default page;
