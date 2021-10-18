import cn from "classnames";
import React from "react";

function ProjectInfoItem(props) {
  return (
    <div className={cn("border-r-2 border-gray-500 p-6 mt-12")}>
      <div className={cn("flex justify-center items-center")}>
        <img
          className={cn("w-20 h-20 rounded-full")}
          src={props.imagUrl}
          alt="icons"
        />
      </div>
      <p className={cn("text-white text-4xl text-center pt-5")}>
        {props.number}
      </p>
      <p className={cn("text-gray-500 text-center text-sm pt-2")}>
        {props.text}
      </p>
    </div>
  );
}

export default ProjectInfoItem;
