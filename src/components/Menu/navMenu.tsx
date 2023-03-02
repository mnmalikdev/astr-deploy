import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/logo.svg";
import { IMenuProps } from "@/types/Menu";
import user from "@/data/user.json";
import Modal from "../modal";

const NavMenu : React.FC <IMenuProps> = ({active, space, spaceDetail}) => {


  return (
    <nav className="fixed top-0 right-0 left-0 w-full flex items-center justify-between border-2 border-l-0 border-r-0 bg-white text-black">
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
                  className={` bg-gradient-to-r text-white from-[#2CB673] to-[#0AD3FF] px-2 py-1.5  rounded-full`}
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