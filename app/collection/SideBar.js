"use client";
import React, { useState } from "react";

const SideBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  function HandleSort(type) {
    switch (type) {
      case "Ascending":
        const filter = [...filteredData].sort((a, b) => {
          if (a.Price < b.Price) return -1;
          if (a.Price > b.Price) return 1;
          return 0;
        });
        setFilteredData(filter);
        break;
      case "Desc":
        const filter2 = [...filteredData].sort((a, b) => {
          if (a.Price < b.Price) return 1;
          if (a.Price > b.Price) return -1;
          return 0;
        });
        setFilteredData(filter2);
        break;
    }
  }
  return (
    <div className="flex gap-4 justify-center mt-5  ">
      <button className="border-2 bg-gray-200  p-2 rounded-lg">
        Alphabetical
      </button>
      <button
        onClick={HandleSort("Ascending")}
        className="border-2 bg-gray-200 p-2 rounded-lg">
        Price-High To Low
      </button>
      <button
        onClick={HandleSort("Desc")}
        className="border-2 bg-gray-200 p-2 rounded-lg">
        Price Low To High
      </button>
      <div></div>
    </div>
  );
};

export default SideBar;
