"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  IoCloseOutline,
  IoCartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "Products", link: "/" },
    { name: "Deals", link: "#" },
    { name: "Gifts", link: "#" },
    { name: "About", link: "#" },
  ];
  return (
    <nav className="relative">
      <div className="  grid grid-cols-3">
        <div
          className={`${pacifico.className} text-3xl ml-2 md:text-4xl md:ml-5 mt-5`}>
          Schnitzer.
        </div>

        <div
          className={` md:flex md:justify-center md:space-x-7 md:pb-0 absolute md:static md:bg-white md:z-auto z-[auto] left-0 md:w-auto md:pl-0 pl-9 flex ml-[44%] sm:ml-[60%] md:ml-0 flex-col md:flex-row  w-[14rem]  rounded-lg p-7 leading-9 md:text-black text-black bg-white mt-[4.2rem] md:mt-0 transition-all ease-in-out ${
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
        <div className="md:flex md:justify-center flex justify-end ">
          <IoCartOutline className="h-7 w-8 mt-6 md:mt-7 " />
          <IoPersonCircleOutline className="h-7 w-8 mt-6 ml-4 md:ml-14 md:mt-7 text-black" />
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
