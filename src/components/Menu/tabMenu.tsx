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
          <Link href="/">
            <div className="flex justify-center">
              <FaHome color={active === "/" ? "black" : "gray"} size={20} />
            </div>
            <p className="text-sm">Home</p>
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/likes">
            <div className="flex justify-center">
              <FaHeart
                color={active === "/affirmations/likes" ? "black" : "gray"}
                size={20}
              />
            </div>
            <p className="text-sm">Likes</p>
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/random">
            <div className="flex justify-center">
              <FaRandom
                color={active === "/affirmations/random" ? "black" : "gray"}
                size={20}
              />
            </div>
            <p className="text-sm">Random</p>
          </Link>
        </li>
      </ul>
      <ul className="flex-0 mr-5">
        <li className="py-2">
          <Link href="/affirmations/search">
            <div className="flex justify-center">
              <FaSearch
                color={active === "/affirmations/search" ? "black" : "gray"}
                size={20}
              />
            </div>
            <p className="text-sm">Search</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabMenu;
