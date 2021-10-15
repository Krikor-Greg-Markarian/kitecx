import React, { useState } from "react";
import cn from "classnames";

const TestZIndex = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    // <div className={cn("relative")}>
    //   <div className={cn("absolute h-40 w-40 bg-red-600 z-20")}></div>
    //   <div
    //     onMouseEnter={() => {
    //       setisHovered(true);
    //     }}
    //     onMouseLeave={() => {
    //       setisHovered(false);
    //     }}
    //     className={cn(
    //       "absolute top-20 left-20 h-40 w-40 bg-blue-600",
    //       {
    //         "z-10": !isHovered,
    //       },
    //       {
    //         "z-30": isHovered,
    //       }
    //     )}
    //   ></div>
    // </div>

    <div className = {cn("relative")}>
      <div className= {cn("bg-blue-400 w-40 h-40 absolute z-20")}>

      </div>
      <div onMouseEnter={()=>{setisHovered(true);}} onMouseLeave={()=>{setisHovered(false);}} className= {cn("bg-red-400 w-40 h-40 absolute left-20 top-20", {"z-10" : !isHovered}, {"z-30" : isHovered} )}  >

      </div>
    </div>
  );
};

export default TestZIndex;
