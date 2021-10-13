import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function TrustItem(props) {
  return (
    <div>
      <div className={cn("blackBackground")}>
        <div className={cn("transform translate-y-36")}>
          <p className={cn("text-gray-500 text-lg text-center")}>
            {props.smallTitle}
          </p>

          <p className={cn("text-white text-5xl text-center pt-4")}>
            {props.title}
          </p>
          <div className={cn("flex justify-center items-center pt-10")}>
            <ReadMoreButton
              className={cn(
                "bg-white w-2/12 text-center text-sm font-bold hover:bg-yellow-500 text-white pt-8"
              )}
              ReadMoreButtonName={"LEARN MORE"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustItem;
