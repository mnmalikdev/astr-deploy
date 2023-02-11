import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { FaHome, FaHeart, FaRandom, FaSearch } from "react-icons/fa";
import user from "@/data/user.json";
import { IMenuProps } from "@/types/Menu";
import { BiMessageAdd } from "react-icons/bi";

const SideMenu: React.FC<IMenuProps> = ({ active }) => {
  return (
    <nav className="hidden lg:block lg:flex flex-col lg:fixed lg:items-center border-2 h-screen bg-white text-black">
      <ul className="flex-1 mt-5">
        <Link href="/dashboard">
          <Image src={logo} alt="logo" />
        </Link>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/">
            <FaHome color={active === "/" ? "black" : "gray"} />
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/likes">
            <FaHeart
              color={active === "/affirmations/likes" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/random">
            <FaRandom
              color={active === "/affirmations/random" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/search">
            <FaSearch
              color={active === "/affirmations/search" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-1">
        <li className="p-4">
          <Link href="affirmations/addnew">
            <BiMessageAdd
              color={active === "/affirmations/addnew" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/account">
            <span
              className={`${
                active === "/account"
                  ? "text-black font-semibold"
                  : "text-white"
              } bg-gradient-to-r from-[#2CB673] to-[#0AD3FF] px-2 py-1.5 rounded-3xl`}
            >
              {user.initials}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
