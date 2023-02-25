import { ITooltipProps } from "@/types/tooltip";
import React from "react";

const Tooltip: React.FC<ITooltipProps> = ({ content }) => {
  return (
    <span
      className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 bottom-2 opacity-0 m-4 mx-auto"
    >
      {content}
    </span>
  );
};

export default Tooltip;
