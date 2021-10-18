import React from "react";
import cn from "classnames";
import Link from "next/link";

function Servicesitem(props) {
  return (
    <div>
      <div className={cn("building")}>
        <div className={cn("transform translate-y-24")}>
          <p className={cn("text-white text-4xl font-bold text-center")}>
            {props.title}
          </p>
          <div className={cn("text-center pt-4")}>
            <li
              className={cn(
                "inline text-white hover:underline text-sm font-bold"
              )}
            >
              <Link href="">
                <a href="">{props.homeTag}</a>
              </Link>
            </li>
            <li className={cn("inline text-white text-sm font-bold")}>
              <Link href="">
                <a href="">{props.servicesTag}</a>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicesitem;
