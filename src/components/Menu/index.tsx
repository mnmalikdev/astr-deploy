import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/ASTRLogo.png";
import { IMenuProps } from "@/types/Menu";
import { FaHome, FaHeart, FaRandom, FaSearch } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import user from "@/data/user.json";
import SideMenu from "./sideMenu";
import TabMenu from "./tabMenu";
import NavMenu from "./navMenu";

const Menu: React.FC<IMenuProps> = ({ active }) => {
  return (
    <>
      <div>
        <SideMenu active={active} />
      </div>

      <div className="lg:hidden lg:block mb-12">
        <NavMenu active={active} />
      </div>

      <div className="lg:hidden lg:block">
        <TabMenu active={active} />
      </div>
    </>
  );
};

export default Menu;
