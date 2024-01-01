"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useSelector } from "react-redux";
import { PiShoppingBagThin } from "react-icons/pi";
import Image from "next/image";
import LoginButton from "./LoginButton";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const Cart = useSelector((state) => state.cart.CART_PRODUCT);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Collection", link: "/collection" },
    { name: "Deals", link: "#" },
    { name: "Gifts", link: "#" },
    { name: "About", link: "#" },
  ];
  return (
    <nav className="relative ">
      <div className="  grid grid-cols-3">
        <div
          className={`${pacifico.className} text-3xl flex justify-center ml-2 md:text-4xl md:ml-5 mt-5`}>
          <Link href="/">Schnitzer. </Link>
        </div>

        <div
          className={` md:flex md:justify-center md:space-x-7 md:pb-0 absolute md:static border-2 border-gray-200 md:border-none md:bg-white md:z-auto z-[auto] left-0 md:w-auto md:pl-0 pl-9 flex ml-[44%] sm:ml-[60%] md:ml-0 flex-col md:flex-row  w-[12rem]  rounded-lg p-7 leading-9 md:text-black text-black bg-white mt-[4.2rem] md:mt-0 transition-all ease-in-out ${
            open ? "top-[200]" : "top-[-1100px]"
          }
`}>
          {Links.map((e) => {
            return (
              <Link
                key={e?.name}
                href={e?.link}
                className="mr-5 hover:text-gray-400">
                {e?.name}
              </Link>
            );
          })}
        </div>
        <div className=" md:flex md:justify-center flex justify-end ">
          <Link aria-label="cart" className="relative" href="/Cart">
            <PiShoppingBagThin className="h-7 w-8 mt-6 md:mt-7 " />
            <span className=" text-white h-[20px] w-[20px]  absolute left-5 top-[1.375rem] bg-black  px-1 rounded-2xl">
              {Cart.length}
            </span>
          </Link>
          {/* <Link aria-label="login" href="/login">
            <IoPersonCircleOutline className="h-7 w-8 mt-6 ml-4 md:ml-14 md:mt-7 text-black" />
          </Link> */}{" "}
          <LoginButton />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-end mr-11 md:hidden ">
          {open ? (
            <IoCloseOutline className="h-7 w-8 mt-6" />
          ) : (
            <RxHamburgerMenu className="h-7 w-8 mt-6" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
