import React from "react";
import Link from "next/link";
import { Prompt, Red_Hat_Display } from "next/font/google";

const sourceFont = Prompt({
  weight: "600",
  subsets: ["thai"],
});

const redFont = Red_Hat_Display({
  style: "normal",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div>
      <div
        className={`${sourceFont.className} text-6xl ml-2 flex justify-center md:justify-start md:ml-24 mt-10`}>
        <h1>Thank You For Your Order!</h1>
      </div>
      <p className={`${redFont.className}text-md ml-2 md:ml-24 mt-5`}>
        Your Order has been confirmed. You will be recieving email confirmation
        shortly.
      </p>
      <div className="ml-2 md:ml-24 mt-5 flex justify-center md:justify-start  text-white ">
        <Link className="bg-black p-3 rounded-lg px-10" href="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default page;
