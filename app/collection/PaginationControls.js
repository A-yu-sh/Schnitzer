"use client";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ queryValue }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? `1`;
  const per_page = searchParams.get("per_page") ?? `8`;

  return (
    <div className="flex justify-center gap-10 mt-10 font-bold ">
      <button
        onClick={() => {
          router.push(
            `/collection/?page=${
              Number(page) - 1
            }&per_page=${per_page}&?query=${queryValue}`
          );
        }}>
        Prev
      </button>
      {/* <div>
        {page}/{Math.ceil(10 / Number(per_page))}
      </div> */}
      <button
        onClick={() => {
          router.push(
            `/collection/?page=${
              Number(page) + 1
            }&per_page=${per_page}&?query=${queryValue}`
          );
        }}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
