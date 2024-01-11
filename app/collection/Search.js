"use client";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const HandleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 2000);

  return (
    <div className="flex justify-center">
      <input
        className="flex justify-center mt-20 w-1/2 rounded-xl border border-gray-300 bg-slate-100 0 py-[12px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search By Category"
        onChange={(e) => HandleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
