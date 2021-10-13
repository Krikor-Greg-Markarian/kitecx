import React from "react";
import cn from "classnames";

function ReadMoreButton(props) {
  return (
    <button className={cn(props.className)}>{props.ReadMoreButtonName}</button>
  );
}

export default ReadMoreButton;
