import React from "react";
import cn from "classnames";

function AboutItem(props) {
  return (
    <div className={cn("comtainer mx-auto pl-5 text-lg font-normal pt-28")}>
      <p className={cn("text-gray-500 text-sm")}>{props.smallTitle}</p>
      <p className={cn("text-4xl font-bold")}>{props.titleOne}</p>
      <p className={cn("text-gray-500 text-base pt-10")}>{props.description}</p>

      <div className="grid grid-rows-1 md:grid-flow-col pt-12">
        <div className="row-span-1">
          <div className={cn("sm:w-60 h-60")}>
            <img
              className={cn("w-full sm:w-60 h-60 shake-chunk")}
              src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_233,h_244/https://www.gavias-theme.com/wp/kitecx/wp-content/uploads/2021/04/image-4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={cn("pl-2")}>
          <div className={cn("flex border-b-2 pb-3 pt-6 w-full")}>
            <div className={cn("flex-shrink")}>
              <img
                className={cn("w-20 h-20")}
                src={props.commpassImageUrl}
                alt="compass"
              />
            </div>
            <div className={cn("flex-shrink pl-2")}>
              <p className={cn("text-gray-500 w-7/12")}>{props.title}</p>
            </div>
          </div>
          <div className={cn("flex pb-2 pt-3 w-full")}>
            <div className={cn("flex-shrink ")}>
              <img
                className={cn("w-20 h-20")}
                src={props.housemapImageUrl}
                alt="compass"
              />
            </div>
            <div className={cn("flex-shrink pl-2")}>
              <p className={cn("text-gray-500  w-7/12")}>
                {props.anotherTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={cn("border-8")}>
        <div className={cn("flex border-b-2 pb-3 pt-6")}>
          <div className={cn("flex-shrink")}>
            <img
              className={cn("rounded-full w-20 h-20")}
              src={props.commpassImageUrl}
              alt="compass"
            />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <p className={cn("text-gray-500 w-7/12")}>{props.title}</p>
          </div>
        </div>
        <div className={cn("flex pb-2 pt-3")}>
          <div className={cn("flex-shrink")}>
            <img
              className={cn("rounded-full w-20 h-20")}
              src={props.housemapImageUrl}
              alt="compass"
            />
          </div>
          <div className={cn("flex-shrink pl-2")}>
            <p className={cn("text-gray-500  w-7/12")}>{props.anotherTitle}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutItem;
