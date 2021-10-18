import React from "react";
import cn from "classnames";
import {
  FaHome,
  FaPhone,
  FaRegEnvelope,
  FaMapMarker,
  FaTwitter,
  FaFacebookSquare,
  FaPinterestP,
  FaInstagram,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import ReadMoreButton from "./ReadMoreButton";

function Footer(props) {
  return (
    <div>
      <div
        className={cn("bg-black pt-12 pb-12 border-b-2 border-gray-500 p-2")}
      >
        <div className={cn("grid md:grid-cols-4 md:container mx-auto w-8/12")}>
          <div className={cn("col-span-1")}>
            <div className={cn("flex")}>
              <div className={cn("flex-shrink")}>
                <FaHome className={cn("text-white text-3xl pt-1")} />
              </div>
              <div className={cn("flex-shrink")}>
                <p className={cn("text-white font-normal text-3xl")}>
                  {props.title}
                </p>
              </div>
            </div>
          </div>
          <div className={cn("col-span-2")}>
            <div className={cn("flex")}>
              <p className={cn("text-gray-500 pt-2 text-lg")}>
                {props.contactUs}
              </p>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <ReadMoreButton
              className={cn(
                " p-4 w-5/12 bg-yellow-500 sm:float-left md:float-right sm:mt-4 sm:w-6/12 sm:py-2 md:w-5/12 md:py-0 md:mt-0 transition duration-500 ease-in-out"
              )}
              ReadMoreButtonName={props.ReadMoreButtonName}
            />
          </div>
        </div>
      </div>

      <div className={cn("blackCircleDesign")}>
        <div className={cn("grid md:grid-cols-6 md:container mx-auto w-8/12")}>
          <div className={cn("col-span-2 p-2 transform translate-y-28")}>
            <p className={cn("text-white text-2xl")}>{props.subTitle}</p>
            <p
              className={cn(
                "border-b-2 border-gray-500 text-lg text-gray-500 pb-4 pt-4"
              )}
            >
              {props.description}
            </p>
            <div className={cn("flex pt-6 pb-2")}>
              <div className={cn("flex-shrink")}>
                <FaPhone className={cn("text-yellow-500")} />
              </div>
              <div className={cn("flex-shrink pl-2")}>
                <p
                  className={cn(
                    "text-white hover:text-yellow-600 cursor-pointer"
                  )}
                >
                  {props.number}
                </p>
              </div>
            </div>
            <div className={cn("flex pt-2 pb-2")}>
              <div className={cn("flex-shrink")}>
                <FaRegEnvelope className={cn("text-yellow-500")} />
              </div>
              <div className={cn("flex-shrink pl-2")}>
                <p
                  className={cn(
                    "text-white hover:text-yellow-600 cursor-pointer"
                  )}
                >
                  {props.hotmailAddress}
                </p>
              </div>
            </div>
            <div className={cn("flex pt-2 pb-2")}>
              <div className={cn("flex-shrink")}>
                <FaMapMarker className={cn("text-yellow-500")} />
              </div>
              <div className={cn("flex-shrink pl-2")}>
                <p className={cn("text-white")}>{props.info}</p>
              </div>
            </div>
          </div>

          <div className={cn("col-span-1 transform translate-y-28 pl-2")}>
            <p className={cn("text-white text-2xl")}>{props.Links}</p>
            <p
              className={cn(
                "text-gray-500  pt-6 cursor-pointer hover:text-white"
              )}
            >
              {props.aboutus}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.ourMisson}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.meetTheTeam}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.ourProject}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.contact}
            </p>
          </div>
          <div
            className={cn(
              "col-span-1 transform sm:pl-3 md:pl-0 translate-y-28 sm:col-span-2 md:col-span-1"
            )}
          >
            <p className={cn("text-white text-2xl sm:mt-12 md:mt-0")}>
              {props.Explore}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-6 cursor-pointer hover:text-white"
              )}
            >
              {props.TypesOf}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.OurStory}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.LatestNews}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.HelpCenter}
            </p>
            <p
              className={cn(
                "text-gray-500 pt-2 cursor-pointer hover:text-white"
              )}
            >
              {props.OurServices}
            </p>
          </div>
          <div
            className={cn(
              "col-span-2 transform translate-y-28 pl-3 sm:mb-10 md:mt-0"
            )}
          >
            <p className={cn("text-white text-2xl")}>{props.Newsletter}</p>
            <p className={cn("text-gray-500 pt-6 pb-4")}>{props.signUp}</p>

            <input
              className={cn(
                "pb-5 focus:outline-none bg-transparent inline w-11/12 text-gray-500 sm:mb-32 md:mb-0"
              )}
              placeholder="Email address"
              type="text"
              name=""
              id=""
            />

            <FaLongArrowAltRight
              className={cn(
                "text-white text-2xl inline hover:text-yellow-600 cursor-pointer"
              )}
            />
            <div
              className={cn(
                "pt-5 sm:mt-10 md:mt-0 sm:text-center md:text-left"
              )}
            >
              <FaTwitter
                className={cn(
                  "text-white inline text-2xl cursor-pointer hover:text-yellow-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              />
              <FaFacebookSquare
                className={cn(
                  "text-white inline text-2xl cursor-pointer hover:text-yellow-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              />
              <FaPinterestP
                className={cn(
                  "text-white inline text-2xl cursor-pointer hover:text-yellow-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              />
              <FaInstagram
                className={cn(
                  "text-white inline text-2xl cursor-pointer hover:text-yellow-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cn("bg-black pt-2 pb-2")}>
        <div className={cn("md:container mx-auto w-8/12")}>
          <div className={cn("inline")}>
            <p
              className={cn(
                "text-gray-500 sm:mt-20 pb-10 sm:text-center md:text-left pb-0 md:mt-0"
              )}
            >
              {props.copyright}
            </p>
            <div className={cn("sm:text-center md:text-right ")}>
              <li
                className={cn(
                  "text-gray-500 hover:text-yellow-600 transition duration-500 ease-in-out list-none inline"
                )}
              >
                <a href="">{props.privacy}</a>
              </li>
              <li
                className={cn(
                  "text-gray-500 hover:text-yellow-600 transition duration-500 ease-in-out list-none inline pl-4"
                )}
              >
                <a href="">{props.termsAndConditions}</a>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={cn("grid md:grid-cols-2 bg-black pt-12 pb-12")}>
        <div className={cn("col-span-1 inline")}>
          <p className={cn("text-gray-500")}>{props.copyright}</p>
        </div>
        <div className={cn("flex justify-end")}>
          <li
            className={cn(
              "text-gray-500 hover:text-yellow-600 transition duration-500 ease-in-out list-none inline"
            )}
          >
            <a href="">{props.privacy}</a>
          </li>
          <li
            className={cn(
              "text-gray-500 hover:text-yellow-600 transition duration-500 ease-in-out list-none inline pl-4"
            )}
          >
            <a href="">{props.termsAndConditions}</a>
          </li>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
