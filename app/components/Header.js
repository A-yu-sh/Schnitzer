"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "Products", link: "#" },
    { name: "Deals", link: "#" },
    { name: "Gifts", link: "#" },
    { name: "About", link: "#" },
  ];
  return (
    <div className="grid grid-cols-2">
      <div
        className={`${pacifico.className} text-2xl ml-2 md:text-4xl md:ml-5 mt-5`}>
        Schnitzer.
      </div>
      <div
        className={`md:flex md:items-center md:space-x-10 md:pb-0  absolute md:static md:bg-white md:z-auto z-[-1] left-0 md:w-auto
md:pl-0 pl-9 flex ml-[60%] flex-col md:flex-row  w-[14rem]  rounded-lg p-7 leading-9   text-gray-200 md:text-black bg-black mt-[3.5rem] md:mt-5  transition-all ease-in-out   ${
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
  );
};

export default Header;
// md:flex md:justify-center md:space-x-10 md:mt-7 md:text-[1.1rem]

{
  /* <nav class="">
  <a class="mr-5 hover:text-gray-900">First Link</a>
  <a class="mr-5 hover:text-gray-900">Second Link</a>
  <a class="mr-5 hover:text-gray-900">Third Link</a>
  <a class="mr-5 hover:text-gray-900">Fourth Link</a>
</nav>; */
}
