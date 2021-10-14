import React, { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";
import cn from "classnames";
import styles from "../../styles/rollOver.module.css";

function ProfessionalItem(props) {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div
      className={cn("bg-white p-6 py-20 cursor-pointer", {
        [styles.rollOver]: isHovered,
      })}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <div className={cn("pb-3")}>
        <img
          className={cn("w-20 h-20 rounded-full")}
          src={props.imageUrl}
          alt=""
        />
      </div>
      <p
        className={cn("text-2xl", {
          "text-white underline transition duration-500 ease-in-out transform ":
            isHovered,
        })}
      >
        {props.title}
      </p>
      <p className={cn("text-gray-500 pt-6 pb-6 w-9/12")}>
        {props.description}
      </p>
      <ReadMoreButton
        className={cn("font-bold text-sm", {
          "text-white underline": isHovered,
        })}
        ReadMoreButtonName={props.ReadMoreButtonName}
      />
    </div>
  );
}

export default ProfessionalItem;
