import React, {useEffect, useState} from "react";
import { IClientProps } from "@/types/layout";
import { useRouter } from 'next/router'
import SideMenu from "@/components/Menu";


const ClientLayout: React.FC<IClientProps> = ({ children, space, spaceDetail }) => {

  const [active, setActive] = useState('');

  const router = useRouter()

  useEffect(() => {
    const activeItem = router.pathname;
    setActive(activeItem);
  }, [router]);

  return (
    <div className="h-screen grid lg:grid-cols-12">
      <div className="w-0 bg-blue-200 col-span-1 z-10">
        <SideMenu active={active} />
      </div>
      <div className="col-span-8 px-8 py-12 bg-white h-full">
        {children}
      </div>
      <div className="w-full lg:w-60 ml-0 flex flex-col h-full lg:mr-10 bg-white">
        <div className="text-sm mt-28 md:mx-60 mx-16 lg:mx-0 font-bold">
          <a href="#about">About</a> • <a href="#about">Blog</a> •{" "}
          <a href="#about">Contact</a> • <a href="#about">Terms</a>
        </div>
        <div className="my-8 mx-16 md:mx-60 lg:mx-0 border-t-2 border-b-2">
          <p className="text-large pt-2 pb-2 font-bold">{space}</p>
          <p className="text-xs pt-2 pb-2 text-gray-600">
            {spaceDetail}
          </p>
        </div>
        <div className="h-60 w-60 mx-16 md:mx-60 lg:mx-0 p-4 mb-2 rounded-md bg-[#ED5A4C]"></div>
        <div className="h-80 w-60 mx-16 md:mx-60 lg:mx-0  p-4 rounded-md  bg-[#FF5F00]"></div>
      </div>
    </div>
  );
};

export default ClientLayout;
