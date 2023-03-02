import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/logo.svg";
import { FaHome, FaHeart, FaRandom, FaSearch } from "react-icons/fa";
import user from "@/data/user.json";
import { IMenuProps } from "@/types/Menu";
import { BiMessageAdd } from "react-icons/bi";
import Tooltip from "../tooltip";

const SideMenu: React.FC<IMenuProps> = ({ active }) => {
  return (
    <nav className="hidden lg:block lg:flex flex-col w-20 fixed lg:items-center border-r-2 h-screen bg-white text-black">
      <ul className="flex-1 mt-5">
        <Link href="/">
          <Image src={logo} alt="logo"  />
        </Link>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/">
            <div className="group flex relative">
              <FaHome color={active === "/" ? "black" : "gray"} size={20} />
              <Tooltip content="Home" />
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/likes">
            <div className="group flex relative">
              <FaHeart
                color={active === "/affirmations/likes" ? "black" : "gray"}
                size={20}
              />
              <Tooltip content="Likes" />
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/random">
            <div className="group flex relative">
              <FaRandom
                color={active === "/affirmations/random" ? "black" : "gray"}
                size={20}
              />
              <Tooltip content="Random" />
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/affirmations/search">
            <div className="group flex relative">
              <FaSearch
                color={active === "/affirmations/search" ? "black" : "gray"}
                size={20}
              />
              <Tooltip content="Search" />
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex-1">
        <li className="p-4">
          <Link href="/affirmations/addnew">
            <div className="group flex relative">
              <BiMessageAdd
                color={active === "/affirmations/addnew" ? "black" : "gray"}
                size={20}
              />
              <Tooltip content="New" />
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex-0">
        <li className="p-4">
          <Link href="/account">
            <span
              className={`bg-gradient-to-r text-white from-[#2CB673] to-[#0AD3FF] px-2 py-1.5 rounded-full`}
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
