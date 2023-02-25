import { IModalProps } from "@/types/modal";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegWindowMinimize } from "react-icons/fa";
import React from "react";

const Modal: React.FC<IModalProps> = ({ active, space, spaceDetail }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div>
        <p className="font-bold flex">
          {active === "/"
            ? "HOME"
            : active === "/affirmations/likes"
            ? "LIKES"
            : active === "/affirmations/random"
            ? "RANDOM"
            : active === "/affirmations/search"
            ? "SEARCH"
            : active === "/account"
            ? "ACCOUNT"
            : null}{" "}
          <RiErrorWarningLine onClick={() => setShowModal(true)} size={20} className="mt-0.5 text-gray-500" />
        </p>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-t-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center border-b border-solid border-slate-200 rounded-t">
                  <button className="p-1" onClick={() => setShowModal(false)}>
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <FaRegWindowMinimize color="#373F51" />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col h-full align-center">
                    <div className="text-sm my-2 text-right mx-16 lg:mx-0 font-bold">
                      <a href="#about">About</a> • <a href="#about">Blog</a> •{" "}
                      <a href="#about">Contact</a> • <a href="#about">Terms</a>
                    </div>
                    <div className="my-2 border-t-2 border-b-2">
                      <p className="text-large pt-2 pb-2 font-bold">{space}</p>
                      <p className="text-xs pt-2 pb-2 text-gray-600">
                        {spaceDetail}
                      </p>
                    </div>
                    <div className="h-36 w-44  mx-20  p-4 mb-2 rounded-md bg-[#ED5A4C]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
