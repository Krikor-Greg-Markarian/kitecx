import React from "react";
import cn from "classnames";

function WhyWhereItem(props) {
  return (
    <div className={cn("flex")}>
      <div className={cn("flex-shrink")}>
        <div className={cn("bg-black")}>
          <div className={cn("transform translate-y-20 text-center")}>
            <p className={cn("text-white pt-4 h-64 w-72 text-2xl")}>
              {props.text}
            </p>
          </div>
        </div>
      </div>
      <div className={cn("flex-shrink")}>
        <img className={cn("h-64 w-72")} src={props.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default WhyWhereItem;
