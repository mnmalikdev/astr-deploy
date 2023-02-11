import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { IMenuProps } from "@/types/Menu";
import { FaHome, FaHeart, FaRandom, FaSearch } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import user from "@/data/user.json";
import SideMenu from "./sideMenu";

const TabMenu: React.FC<IMenuProps> = ({ active }) => {
  return (
    <nav className="fixed px-6 bottom-0 w-full flex items-center justify-between border-2 bg-white text-black">
      <ul className="flex-0 mr-5">
        <li className="p-4">
          <Link href="/">
            <FaHome color={active === "/" ? "black" : "gray"} />
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="p-4">
          <Link href="/affirmations/likes">
            <FaHeart
              color={active === "/affirmations/likes" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="p-4">
          <Link href="/affirmations/random">
            <FaRandom
              color={active === "/affirmations/random" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="p-4">
          <Link href="/affirmations/search">
            <FaSearch
              color={active === "/affirmations/search" ? "black" : "gray"}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabMenu;
