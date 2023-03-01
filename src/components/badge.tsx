import React from "react";
import Image from "next/image";
import { IBadgeProps } from "@/types/badge";
import { IoIosArrowForward } from "react-icons/io";

const Badge: React.FC<IBadgeProps> = ({ icon: Icon, value, boldedWord }) => {

  const withBoldedWord = value.replace(new RegExp(boldedWord, 'gi'), '<strong>$&</strong>');

  return (
    <div className="max-w-sm mt-2 overflow-hidden shadow-lg bg-white rounded-full">
      <div className="h-20">
        <div className="grid grid-cols-5 gap-1 justify-evenly">
          <div className="w-26 h-20 col-span-1">
            <div className="text-dark pt-3">
              <div className="h-14 w-14 shadow-xl absolute rounded-xl bg-yellow-400 flex items-center justify-center">
                <Image src={Icon} width={45} alt="" />
              </div>
            </div>
          </div>
          <div className="w-26 h-20 col-span-3 flex items-center">
            <p className="text-dark text-[#3D4849] px-1"dangerouslySetInnerHTML={{ __html: withBoldedWord }}></p>
          </div>
          <div className="w-26 h-20 col-span-1 flex items-center justify-center">
            <button className="rounded-full h-10 w-10 shadow-lg bg-gradient-to-r  from-[#0AD3FF] to-[#2CB673] flex items-center justify-center font-bold text-xl">
              <IoIosArrowForward color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
