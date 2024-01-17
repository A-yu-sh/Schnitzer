import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20 gap-2 border-t  border-primary/10 pt-8">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/collection"}>Collection</Link>
            </li>
            <li>
              <Link href={"#"}>Contact US</Link>
            </li>
            {/* <li>
              <Link href={"#"}>Terms & Condition</Link>
            </li> */}
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={"https://github.com/A-yu-sh"}>
            <FaGithub className="h-7 w-7" />
          </Link>
          <Link href={"https://www.linkedin.com/in/ayush-p-4ab129221/"}>
            <FaLinkedin className="h-7 w-7" />
          </Link>
        </div>
      </div>
      <div className="mt-10 gap-2 bg-black border-t border-primary/10 pt-8 pb-2">
        <p className="text-center text-white text-sm">
          @2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
