"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcGoogle } from "react-icons/fc";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const [isToogling, setIsToggling] = useState(true);
  const [open, setOpen] = useState(true);
  const [login, setLogin] = useState("");

  if (status === "authenticated") {
    localStorage.setItem("user-session", JSON.stringify(session.user));
    return (
      <div>
        <button className=" rounded-lg mt-5 ml-4 md:ml-14 md:mt-7 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session.user.image}
                height={30}
                width={30}
                alt={session.user.name}
                className="rounded-xl  border-2 border-gray-500"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CgProfile />
                <span className="ml-2">
                  <Link href="/profile">Profile</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <button className="flex" onClick={() => signOut()}>
                  <MdLogout className="mt-[0.10rem]" />
                  <span className="ml-2">Logout</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </button>

        <div></div>
      </div>
    );
  }

  return (
    <div className=" mt-5 md:mt-7 ">
      <Link
        href="/login"
        className="px-7 py-2 rounded-lg mt-2 ml-7 md:ml-14 md:mt-20 text-white bg-black">
        Login
      </Link>
    </div>
  );
};

export default LoginButton;
