import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { IMenuProps } from "@/types/Menu";
import { RiErrorWarningLine } from "react-icons/ri";
import user from "@/data/user.json";

const NavMenu : React.FC <IMenuProps> = ({active}) => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between border-2 bg-white text-black">
          <ul className="flex-0 mr-5">
            <li className="p-4">
              <Link href="/dashboard">
                <Image src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
          <ul className="flex-0 mr-5">
            <li className="p-4">
              <Link href="/affirmations/likes">
                <p className="font-bold flex">
                  {active === "/"
                    ? "Home"
                    : active === "/affirmations/likes"
                    ? "Likes"
                    : active === "/affirmations/random"
                    ? "Random"
                    : active === "/affirmations/search"
                    ? "Search"
                    : active === "/account"
                    ? "Account"
                    : null}{" "}
                  <RiErrorWarningLine
                    size={18}
                    className="mt-1 text-gray-600"
                  />
                </p>
              </Link>
            </li>
          </ul>
          <ul className="flex-0 mr-5">
            <li className="p-4">
              <Link href="/account">
                <span
                  className={`${
                    active === "/account"
                      ? "text-black font-semibold"
                      : "text-white"
                  } bg-gradient-to-r from-[#2CB673] to-[#0AD3FF] px-2 py-1 rounded-3xl`}
                >
                  {user.initials}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
  )
}

export default NavMenu