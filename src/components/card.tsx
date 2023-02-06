import React, { FC, useState } from "react";
import { ICardProps } from "@/types/card";
import { AiFillHeart } from "react-icons/ai";

const Card: FC<ICardProps> = ({ source, message, isLiked, type }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div>
      <div className="m-1">
        <p className="text-xs text-gray-600">Source</p>
        <p className="text-xs font-bold">{source}</p>
      </div>
      <div className={`${type==='large'? "w-80 h-80":"w-36 h-36 md:w-60 md:h-60" }`}>
        <div className={`${type==='large'? "w-80 h-80":"w-36 h-36 md:w-60 md:h-60" } rounded-2xl bg-[#EFCA08] overflow-hidden shadow-xl`}>
          <div className="px-3 py-3 h-full w-full flex items-center justify-center">
            <p className={`${type==='large'?"text-2xl":""} text-black text-center font-semibold text-xs md:text-base`}>{message}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <button className="flex" onClick={() => setLiked(!liked)}>
            <AiFillHeart
              className={`flex items-center justify-center text-red-500 hover:text-red-700 mt-1 mr-1 ${
                liked ? "text-red-500" : "text-gray-500"
              }`}
            />
            {liked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
