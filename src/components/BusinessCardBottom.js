import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function BusinessCardBottom(props) {
  return (
    <div className={cn("pt-14")}>
      <div
        className={cn(
          "bg-gray-900 px-20 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        )}
      >
        <div className={cn("pb-8 text-center")}>
          <sup className={cn("text-white inline font-normal text-3xl")}>
            {props.dolorSign}
          </sup>
          <p className={cn("text-white inline text-5xl font-normal")}>
            {props.price}
          </p>
          <sub className={cn("text-white inline text-xs font-normal")}>
            {props.month}
          </sub>
        </div>

        <div
          className={cn(
            " border-t-2 border-gray-500 border-b-2 border-gray-500 pt-8 pb-8"
          )}
        >
          <p className={cn("text-white text-lg text-center")}>{props.title}</p>
          <p className={cn("text-gray-500 font-normal text-center pt-5")}>
            {props.visualization}
          </p>
          <p className={cn("text-gray-500 font-normal text-center pt-2")}>
            {props.planning}
          </p>
          <p className={cn("text-gray-500 font-normal text-center pt-2")}>
            {props.selection}
          </p>
          <p className={cn("text-gray-500 font-normal text-center pt-2")}>
            {props.construction}
          </p>
        </div>
        <div className={cn("pt-6 pb-2 text-center")}>
          <ReadMoreButton
            className={cn(
              "bg-white p-3 w-8/12 hover:bg-yellow-500  transition duration-500 ease-in-out text-sm font-bold"
            )}
            ReadMoreButtonName={props.ReadMoreButtonName}
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessCardBottom;
