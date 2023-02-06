import React from "react";

interface IconProps {
    color: string;
    size: number;
  }

export interface IBadgeProps {

    icon:React.FC<IconProps>,
    value:string,

}

