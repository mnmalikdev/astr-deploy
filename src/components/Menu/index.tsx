import React from "react";
import { IMenuProps } from "@/types/Menu";
import { BsFillPlusCircleFill } from "react-icons/bs";
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
        <div className="fixed bottom-16 right-8">
          <BsFillPlusCircleFill size={40} color="#373F51" />
        </div>
        <TabMenu active={active} />
      </div>
    </>
  );
};

export default Menu;
