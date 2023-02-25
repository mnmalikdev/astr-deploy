import React from "react";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { IMenuProps } from "@/types/Menu";
import { FaHome, FaHeart, FaRandom, FaSearch } from "react-icons/fa";

const TabMenu: React.FC<IMenuProps> = ({ active }) => {
  return (
    <nav className="fixed px-6 bottom-0 w-full flex items-center justify-between border-2 bg-white text-black">
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/" className="flex justify-center">
            <FaHome color={active === "/" ? "black" : "gray"} />
          </Link>
          <p className="text-sm">Home</p>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/likes" className="flex justify-center">
            <FaHeart
              color={active === "/affirmations/likes" ? "black" : "gray"}
            />
          </Link>
          <p className="text-sm">Likes</p>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/random" className="flex justify-center">
            <FaRandom
              color={active === "/affirmations/random" ? "black" : "gray"}
            />
          </Link>
          <p className="text-sm">Random</p>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/search" className="flex justify-center">
            <FaSearch
              color={active === "/affirmations/search" ? "black" : "gray"}
            />
          </Link>
          <p className="text-sm">Search</p>
        </li>
      </ul>
    </nav>
  );
};

export default TabMenu;
