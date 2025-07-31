"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    localStorage.setItem("user-session", JSON.stringify(session.user));
  }

  return (
    <div>
      {/* <div className="mt-32 font-bold text-xl flex justify-center">
        Sign Up Or Log In
      </div>
      <form>
        <div className="outline-1 outline-black flex justify-center  ">
          <input
            type="email"
            placeholder="Enter Your Email id"
            className="border w-1/4 mt-5"
          />
        </div>
        <div className=" flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="bg-black text-white px-10 mt-5 py-3 rounded-xl"
          />
        </div>
      </form>
      <div className=" text-xl flex justify-center">Or</div>
      <div className=" text-xl flex justify-center">Continue With</div> */}
      <div className="mt-56 text-xl flex justify-center">
        Please Continue With
      </div>
      <div className="flex justify-center gap-4 mt-12 ">
        <button className="" onClick={() => signIn("google")}>
          <FcGoogle />
        </button>
        <button className="" onClick={() => signIn("github")}>
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default page;
