import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { IMenuProps } from "@/types/Menu";
import user from "@/data/user.json";
import Modal from "../modal";

const NavMenu : React.FC <IMenuProps> = ({active, space, spaceDetail}) => {


  return (
    <nav className="fixed top-0 w-full flex items-center justify-between border-2 bg-white text-black">
          <ul className="flex-0 mr-5">
            <li className="p-4">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
          <ul className="flex-0 mr-5">
            <li className="p-4">
              <Modal active={active} space={space} spaceDetail={spaceDetail} />
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
                  } bg-gradient-to-r from-[#2CB673] to-[#0AD3FF] p-2 rounded-full`}
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