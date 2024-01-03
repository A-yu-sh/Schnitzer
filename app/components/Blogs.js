import { TechBlogs } from "@/Blogs";
import React from "react";
import Image from "next/image";
import { Anton, Quicksand, Mandali } from "next/font/google";
import Link from "next/link";

const anton = Anton({
  weight: "400",
  subsets: ["vietnamese"],
});

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const mandali = Mandali({
  weight: "400",
  subsets: ["latin"],
});

const Blogs = () => {
  return (
    <div>
      <div
        className={`${anton.className} mt-20 flex justify-center text-4xl md:text-6xl`}>
        BLOGS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 ">
        {TechBlogs.map((e) => {
          return (
            <div key={e.id} className="border-2 border-gray-300 rounded-xl p-3">
              <Image
                src={e.Blog_Image}
                height={500}
                width={500}
                alt={e.Blog_Title}
                className="h-[10rem] w-[20rem]"
              />
              <div
                className={`${quicksand.className} text-sm text-gray-700 mt-2`}>
                {e.Publish_Date}
              </div>
              <div className={`${quicksand.className} text-xl font-bold mt-2`}>
                {e.Blog_Title}
              </div>

              <Link
                href="#"
                className="p-2 border-2 border-gray-500 flex justify-center px-10 rounded-lg mt-7 font-sans hover:bg-black hover:text-white">
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
