import React from "react";
import cn from "classnames";

function ReadMoreButton(props) {
  return (
    <div className={cn(props.className)}>
      <button>{props.ReadMoreButtonName}</button>
    </div>
  );
}

export default ReadMoreButton;
