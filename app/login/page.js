"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  weight: "600",
  subsets: ["cyrillic"],
});

const page = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        {session.user.name}

        <div>
          <button onClick={() => signOut()}>Log Out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h1
        className={`${exo.className} flex justify-center text-5xl font-bold mt-20`}>
        Login
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-center mt-10 w-1/4 p-4 rounded-2xl  border-2 border-gray-200">
          <button className="" onClick={() => signIn("google")}>
            <span>
              {" "}
              <FcGoogle className="h-8 w-8" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
