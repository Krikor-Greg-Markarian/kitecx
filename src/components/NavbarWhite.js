import React from "react";
import { FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import cn from "classnames";
import Link from "next/link";

function NavbarWhite(props) {
  return (
    <div>
      <div className={cn("bg-white p-5")}>
        <FaHome className={cn("inline text-3xl")} />
        <p className={cn("inline pl-1 text-3xl")}>{props.title}</p>
        <div className={cn("inline")}>
          <li className={cn("text-gray-500 hover:text-black inline pl-6")}>
            <Link href="/">
              <a href="">{props.home}</a>
            </Link>
          </li>
          <li className={cn("text-gray-500 hover:text-black inline pl-4")}>
            <Link href="/">
              <a href="">{props.services}</a>
            </Link>
          </li>
          <li className={cn("text-gray-500 hover:text-black inline pl-4")}>
            <Link href="/">
              <a href="">{props.portfolio}</a>
            </Link>
          </li>
          <li className={cn("text-gray-500 hover:text-black inline pl-4")}>
            <Link href="/">
              <a href="">{props.news}</a>
            </Link>
          </li>
          <li className={cn("text-gray-500 hover:text-black inline pl-4")}>
            <Link href="/">
              <a href="">{props.pages}</a>
            </Link>
          </li>
          <li className={cn("text-gray-500 hover:text-black inline pl-4")}>
            <Link href="/">
              <a href="">{props.contact}</a>
            </Link>
          </li>
        </div>
        <div className={cn("float-right inline")}>
          <div className={cn("inline border-l border-2 mr-6 pb-3")}></div>
          <FaSearch className={cn("inline text-2xl mt-1 ")} />
          <FaShoppingCart className={cn("inline text-2xl mt-1 ml-5")} />
        </div>
      </div>
    </div>
  );
}

export default NavbarWhite;
