import React from "react";
import { IMenuProps } from "@/types/Menu";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRouter } from 'next/router'
import SideMenu from "./sideMenu";
import TabMenu from "./tabMenu";
import NavMenu from "./navMenu";

const Menu: React.FC<IMenuProps> = ({ active, space, spaceDetail }) => {

  const router = useRouter()

  return (
    <>
      <div>
        <SideMenu active={active} space={""} spaceDetail={""} />
      </div>

      <div className="lg:hidden lg:block mb-12">
        <NavMenu active={active} space={space} spaceDetail={spaceDetail} />
      </div>
      <div className="lg:hidden lg:block">
        <div className="fixed bottom-20 right-8">
          <BsFillPlusCircleFill size={40} color="#373F51" onClick={()=>router.push('/affirmations/addnew')} />
        </div>
        <TabMenu active={active} space={""} spaceDetail={""} />
      </div>
    </>
  );
};

export default Menu;
