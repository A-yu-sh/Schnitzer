"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Fuse from "fuse.js";

const SearchBar = ({ category }) => {
  const [Itemsearch, setItemSearch] = useState("");
  const [val, setVal] = useState([]);

  const FuseSearch = Fuse(val, { keys: [category] });
  const response = FuseSearch.search(Itemsearch || []);
  const ProductResult = Itemsearch
    ? response.map((response) => response.item)
    : val;
  return (
    <div>
      <div className="flex justify-center ">
        <div className="relative">
          <CiSearch className="absolute h-10 w-7 top-[2.65rem] ml-16" />
        </div>
        <input
          className="border-2 border-gray-500 p-2 px-10 md:px-48 ml-10 mt-10 rounded-xl "
          placeholder={`"Search “Headphone's”`}
          value={Itemsearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
