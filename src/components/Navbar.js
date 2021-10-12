import React from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitch,
  FaTwitter,
  FaPrint,
} from "react-icons/fa";
import cn from "classnames";

function Navbar(props) {
  return (
    <div className={cn("bg-black")}>
      <div className={cn("p-3")}>
        {/* <div className={cn("flex")}>
          <div className={cn("flex-shrink pt-1")}>
            <FaPhoneAlt className={cn("text-yellow-400 text-sm")} />
          </div>
          <div className={cn("flex-shrink")}>
            <p
              className={cn(
                "text-gray-500 pl-2 text-sm hover:text-yellow-400 cursor-pointer"
              )}
            >
              {props.number}
            </p>
          </div>
          <div className={cn("flex-shrink pt-1 pl-3 ")}>
            <FaRegEnvelope className={cn("text-yellow-400 text-sm")} />
          </div>
          <div className={cn("flex-shrink")}>
            <p
              className={cn(
                "text-gray-500 pl-2  text-sm hover:text-yellow-400 cursor-pointer"
              )}
            >
              {props.hotmailAddress}
            </p>
          </div>
        
        <div className = {cn("float-right")}>
        <div className={cn("flex")}>
  <div className={cn("flex-shrink")}>
    <FaTwitter className = {cn("text-white text-sm")} />
  </div>
  <div className={cn("flex-shrink")}>
  <FaFacebook className = {cn("text-white text-sm")} />
  </div>
  <div className={cn("flex-shrink")}>
  <FaInstagram className = {cn("text-white text-sm")} />
  </div>
  <div className={cn("flex-shrink")}>
  <FaPinterestP className = {cn("text-white text-sm")} />
  </div>
</div>
</div>
         
        </div> */}

        <div>
          <FaPhoneAlt className={cn("text-yellow-400 text-sm inline")} />
          <p
            className={cn(
              "text-gray-500 pl-2 text-sm hover:text-yellow-400 cursor-pointer inline"
            )}
          >
            {props.number}
          </p>
          <div className={cn("inline pl-2")}>
            <FaRegEnvelope className={cn("text-yellow-400 text-sm inline")} />
            <p
              className={cn(
                "text-gray-500 pl-2  text-sm hover:text-yellow-400 cursor-pointer inline"
              )}
            >
              {props.hotmailAddress}
            </p>
          </div>
          <div className={cn("inline float-right")}>
            <FaTwitter className={cn("text-sm text-white inline")} />
            <div className={cn("inline pl-4")}>
              <FaFacebook className={cn("text-sm text-white inline")} />
            </div>
            <div className={cn("inline pl-4")}>
            <FaInstagram className={cn("text-sm text-white inline")} />
            </div>
            <div className={cn("inline pl-4")}>
            <FaPinterestP className={cn("text-sm text-white inline")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
