import { IModalProps } from "@/types/modal";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegWindowMinimize } from "react-icons/fa";
import React from "react";

const Modal: React.FC<IModalProps> = ({ active, space, spaceDetail }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div>
        <p className="font-bold flex gap-1">
          {active === "/"
            ? "HOME"
            : active === "/affirmations/likes"
            ? "LIKES"
            : active === "/affirmations/random"
            ? "RANDOM"
            : active === "/affirmations/random/[id]"
            ? "RANDOM"
            : active === "/affirmations/search"
            ? "SEARCH"
            : active === "/account"
            ? "ACCOUNT"
            : null}{" "}
          <RiErrorWarningLine onClick={() => setShowModal(true)} size={21} className="text-gray-500" />
        </p>
      </div>
      <div 
        className={`${
          showModal ? "translate-y-0 ease-out" : "translate-y-full ease-in"
        } fixed inset-0 flex justify-center items-end  left-0 z-50 w-full h-full overflow-x-auto transition duration-300 transform`}
      >
              <div className="max-w-3xl bg-white rounded-t-3xl h-full w-full shadow-lg overflow-hidden">
                <div className="flex justify-center py-4 px-4">
                  <button onClick={() => setShowModal(false)}>
                    <FaRegWindowMinimize color="#373F51" />
                  </button>
                </div>
                <div className="px-6 py-4">
                  <div className="text-sm my-2 text-right mx-14 lg:mx-0 font-bold">
                    <a href="#about">About</a> • <a href="#about">Blog</a> •{" "}
                    <a href="#about">Contact</a> • <a href="#about">Terms</a>
                  </div>
                  <div className="my-2 border-t-2 border-b-2">
                    <p className="text-large pt-2 pb-2 font-bold">{space}</p>
                    <p className="text-xs pt-2 pb-2 text-gray-600">
                      {spaceDetail}
                    </p>
                  </div>
                  <div className="h-36 w-44 md:w-60  mx-20 md:mx-52 p-4 mb-2 rounded-md bg-[#ED5A4C]"></div>
                  <div className="h-48 w-44 md:w-60  mx-20 md:mx-52 p-4 mb-2 rounded-md bg-[#FF5F00]"></div>
                </div>
              </div>
            </div>
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
};

export default Modal;
