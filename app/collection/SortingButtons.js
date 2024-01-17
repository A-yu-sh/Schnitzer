"use client";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const label = [
  { label: "Sort By", slug: "Sort By", disabled: true },
  { label: "Relevance", slug: "Relevance", disabled: false },
  { label: "Price: Low to High", slug: "Ascending", disabled: false },
  { label: "Price: High to Low", slug: "Descending", disabled: false },
];

const SortingButtons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const UpdateQueryParameter = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("Sort_By", term);
    } else {
      params.delete("Sort_By");
    }
    replace(`${pathname}/?${params.toString()}`);
  };

  return (
    <div>
      <div className="flex justify-center mt-5 md:justify-end">
        <label className="flex  text-sm font-medium text-gray-900 dark:text-white">
          {/* <span className="mt-2 mr-2 text-sm md:text-lg">Sort By </span> */}
          <select
            onChange={(e) => UpdateQueryParameter(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-1/7 mr-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
            {label.map((e) => {
              return (
                <option key={e.slug} value={e.slug} disabled={e.disabled}>
                  {e.label}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortingButtons;

{
  /* <option selected disabled>
              Sort by
            </option>
            <option>Relevance</option>
            <option>Ascending</option>
            <option>Descending</option> */
}
