"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityCounter = ({ Quantity }) => {
  const [value, setValue] = useState(1);

  const IncrementValue = () => {
    setValue(value + 1);
  };

  const DecrementValue = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex gap-4 mt-5">
      <button onClick={DecrementValue}>
        <FaMinus />
      </button>
      <div className="border-2 border-gray-300 px-5 pt-2 pb-2 flex justify-center rounded-lg w-24">
        {value}
      </div>
      <button onClick={IncrementValue}>
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityCounter;
