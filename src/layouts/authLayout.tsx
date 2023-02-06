import React from "react";
import logo from "@/assets/imgs/Vector.png";
import Image from "next/image";
import { IAuthProps } from "@/types/layout";

const AuthLayout: React.FC<IAuthProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen xl:bg-[#F2F2F2] flex justify-center items-center">
        {children}
        <div className="hidden sm:block absolute bottom-0 right-6 h-16 w-16">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
