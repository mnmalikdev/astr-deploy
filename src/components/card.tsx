import React, { FC, useState } from "react";
import { ICardProps } from "@/types/card";
import { AiFillHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Card: FC<ICardProps> = ({ source, message, isLiked, type }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="bg-white p-2 pt-3 rounded-3xl">
      <div className="m-1">
        <p className="text-xs text-gray-600">Source</p>
        <p className="text-xs font-bold">{source}</p>
      </div>
      <div
        className={`${
          type === "large" ? "w-80 h-96" : "w-36 sm:w-44 h-40 md:w-60 md:h-64 lg:w-52 lg:h-56"
        }`}
      >
        <div
          className={`${
            type === "large" ? "w-80 h-96" : "w-36 sm:w-44 h-40 md:w-60 md:h-64 lg:w-52 lg:h-56"
          } rounded-2xl bg-[#EFCA08] overflow-hidden shadow-xl`}
        >
          <div className="px-3 py-3 h-full w-full flex items-center justify-center">
            <p
              className={`${
                type === "large" ? "text-2xl" : ""
              } text-black text-center font-semibold`}
            >
              {message}
            </p>
          </div>
        </div>
        <div className="mt-3 md:flex md:items-center md:justify-center">
          <button
            className="flex border border-gray-100 px-3 md:px-5 py-1.5 rounded-md"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <AiFillHeart
                className={`flex items-center justify-center text-red-500 hover:text-red-700 mr-1`}
                size={22}
              />
            ) : (
              <FaRegHeart
                className={`flex items-center justify-center hover:text-red-700 mr-1`}
                size={20}
              />
            )}
            <span className="text-xs mt-0.5">{liked ? "Unlike" : "Like"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
