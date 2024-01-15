"use client";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SortingButtons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const HandleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("value", term);
    } else {
      params.delete("value");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <select onChange={(e) => HandleSearch(e.target.value)}>
        <option>Sort By</option>
        <option>Price - High To Low</option>
        <option>Price- Low To High</option>
      </select>
    </div>
  );
};

export default SortingButtons;
