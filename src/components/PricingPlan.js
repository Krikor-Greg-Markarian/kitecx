import React from "react";
import { FaCheck } from "react-icons/fa";
FaCheck;
import cn from "classnames";

function PricingPlan(props) {
  return (
    <div>
      <div className={cn("flex pt-8")}>
        <div className={cn("flex-shrink pt-2")}>
          <div className={cn("bg-black w-14 h-14 rounded-full")}>
            <div
              className={cn(
                "flex justify-center items-center transform translate-y-5"
              )}
            >
              <FaCheck className={cn("text-white")} />
            </div>
          </div>
        </div>
        <div className={cn("flex-shrink pl-6")}>
          <p className = {cn("text-lg")}>{props.title}</p>
          <p className={cn("text-gray-500 font-normal pt-5")}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
