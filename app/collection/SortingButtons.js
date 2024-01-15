"use client";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

const SortingButtons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [open, setOpen] = useState(false);

  const HandleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`flex  z-auto`}>
      <div onClick={() => setOpen(!open)} className="flex justify-start ">
        {open ? (
          <IoCloseOutline className="h-7 w-8 mt-6 z-auto" />
        ) : (
          <IoFilter className="h-7 w-8 mt-6" />
        )}
      </div>
      {/* <select onChange={(e) => HandleSearch(e.target.value)}> */}
      <div
        className={`flex justify-start  absolute  border-2 bg-white  border-gray-200  z-[auto] left-0  pl-9  ml-[44%] md:w-1/4 flex-col w-1/2  rounded-lg p-7 leading-9 md:text-black text-black  mt-[4.2rem]  transition-all ease-in-out ${
          open ? "left-[-640px]" : "left-[-5000px]"
        }
`}>
        <label>
          <input type="checkbox" onChange={() => HandleSearch("Earbuds")} />
          Earbuds
        </label>

        <label>
          {" "}
          <input type="checkbox" onChange={() => HandleSearch("Speakers")} />
          Speakers
        </label>

        <label>
          <input type="checkbox" onChange={() => HandleSearch("Neckband")} />
          Neckband
        </label>

        <label>
          <input type="checkbox" onChange={() => HandleSearch("Smartwatch")} />
          Smartwatch
        </label>

        <label>
          {" "}
          <input type="checkbox" onChange={() => HandleSearch("Headphone")} />
          Headphone
        </label>

        <label>
          <input type="checkbox" onChange={() => HandleSearch("Ring")} />
          Ring
        </label>

        <label>
          {" "}
          <input type="checkbox" onChange={() => HandleSearch("Soundbar")} />
          Soundbar
        </label>
      </div>
    </div>
  );
};

export default SortingButtons;
