"use client";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const sortingOrder = [
  { label: "ascending", type: "radio" },
  { label: " descending", type: "radio" },
];

const filterOrder = [
  { label: "Earbuds", type: "checkbox" },
  { label: "Speakers", type: "checkbox" },
  { label: "Neckband", type: "checkbox" },
  { label: "Smartwatch", type: "checkbox" },
  { label: "Headphone", type: "checkbox" },
  { label: "Ring", type: "checkbox" },
  { label: "Soundbar", type: "checkbox" },
];

const SortingButtons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const UpdateQueryParameter = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("sort_By", term);
    } else {
      params.delete("sort_By");
    }
    // replace(`${pathname}&?${params.toString()}`);
  };

  return (
    <div>
      <div>
        <button onClick={UpdateQueryParameter("Ascending")}>Ascending</button>
        <button onClick={UpdateQueryParameter("Descending")}>Descending</button>
      </div>
    </div>
  );
};

export default SortingButtons;
