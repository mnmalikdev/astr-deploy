import React from "react";
import { IBadgeProps } from "@/types/badge";
import { AiOutlineFund } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Badge: React.FC<IBadgeProps> = ({ icon: Icon, value }) => {
  return (
    <div className="max-w-sm mt-2  overflow-hidden shadow-lg bg-gradient-to-r from-rose-100 to-teal-100 rounded-3xl">
      <div className="h-20">
        <div className="grid grid-cols-4 gap-1 justify-evenly">
          <div className="w-26 h-20 col-span-1">
            <div className="text-dark p-4">
              <div className="h-12 w-12 rounded-md  bg-yellow-400 flex items-center justify-center">
                <Icon color='white' size={40} />
              </div>
            </div>
          </div>
          <div className="w-26 h-20 col-span-2 flex items-center justify-center">
            <p className="text-dark text-center">{value}</p>
          </div>
          <div className="w-26 h-20 col-span-1 flex items-center justify-center">
            <button className="rounded-full h-10 w-10 bg-gradient-to-r from-[#0AD3FF] to-[#2CB673] flex items-center justify-center font-bold text-xl">
              <IoIosArrowForward color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
