"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const InputHandler = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative">
        <CiSearch className="absolute h-10 w-7 top-[2.65rem] ml-16" />
      </div>
      <input
        className="border-2 border-gray-500 p-2 px-10 md:px-48 ml-10 mt-10 rounded-xl "
        placeholder={`"Search “Headphone's”`}
      />
    </div>
  );
};

export default InputHandler;
