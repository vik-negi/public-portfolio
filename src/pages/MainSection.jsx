import React, { useEffect, useState } from "react";
import StringUtils from "../utils/String";
import { useQuery } from "react-query";
import { publicInfo } from "../axios/dashboard";
import MyData from "../data/MyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MainDashboard from "./MainDashboard";
import { mainProfile } from "../data/constants";

export default function MainSection({ username }) {
  const [userInfo, setUserInfo] = useState();
  const { isLoading } = useQuery("main-section", () => publicInfo(username), {
    onSuccess: (data) => {
      setUserInfo(data.data?.data);
    },
    onError: (error) => {
      // setUserInfo(MyData.publicInfo);
    },
  });

  if (isLoading) {
    return (
      <section
        className="section mt-[120px] px-[12rem] only-bg flex flex-row justify-between items-center w-full"
        id="home"
        tabIndex="42"
      >
        <div class="flex flex-col gap-2 pt-4 w-full ">
          <h1>
            <div className=" w-11/12 h-[55px] mb-5 bg-gray-600 rounded-2xl animate-pulse delay-200"></div>
            <div className="w-2/6 h-[55px] mb-10 bg-gray-600 rounded-2xl animate-pulse delay-[0.25s]"></div>
            <div className="w-full h-5 mb-2 bg-gray-600 rounded-2xl animate-pulse delay-[0.3s]"></div>
            <div className="w-4/4 h-5 mb-2 mt-5 bg-gray-600 rounded-2xl animate-pulse delay-[0.35s]"></div>
            <div className="w-5/6 h-5 mb-2 bg-gray-600 rounded-2xl animate-pulse delay-[0.4s]"></div>
            <div className="w-3/4 h-5 mb-2 bg-gray-600 rounded-2xl animate-pulse delay-[0.45s]"></div>
            <div className="w-3/5 h-5 mb-2 bg-gray-600 rounded-2xl animate-pulse delay-[0.5s]"></div>
            <div className="flex gap-10 mt-10">
              <div className="w-[150px] h-[45px] bg-gray-600 rounded-2xl animate-pulse delay-[0.5s]"></div>
              <div className="w-[150px] h-[45px] bg-gray-600 rounded-2xl animate-pulse delay-[0.55s]"></div>
            </div>
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div
            className=" bg-gray-600  rounded-[200px] animate-pulse"
            style={{ height: "300px", width: "300px" }}
          ></div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section home-section mt-24 only-bg"
      id="home"
      // className="section mt-[120px] px-[12rem] only-bg flex flex-row justify-between items-center w-full"
      tabIndex="42"
    >
      {userInfo && (
        <div>
          <h1>
            Hey, I'm{" "}
            <span className="name text-center">
              {StringUtils.capitalizeString(userInfo?.user.firstName) +
                " " +
                StringUtils.capitalizeString(userInfo?.user.lastName)}
            </span>
          </h1>
          <p
            style={{
              letterSpacing: "1.3px",
              fontFamily: "Poppins",
              lineHeight: "1.6",
            }}
            className="aboutShort text-[13px] sm:text-[18px]"
          >
            {userInfo?.profileDescription}
          </p>
          {/* bg-[#060a2e94] */}
          <button
            className={`text-2xl px-8 py-4 mt-4 bg-[#efcf5e]  rounded-full text-black font-semibold hover:bg-[#f0c14b] hover:text-black cursor-pointer`}
            name="about"
            // onClick="scrollToSection(this)"
            tabIndex="2"
          >
            About Me
            {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
          </button>
          {/* <a
            // open in another tab
            target="_blank"
            href={MyData.about.resume}
            download={
              StringUtils.capitalizeString(userInfo?.user.firstName) +
              StringUtils.capitalizeString(userInfo?.user.lastName) +
              "Resume"
            }
          >
            <div
              className=" bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded flex items-center justify-center cursor-pointer gap-2"
              name=""
              // onClick="scrollToSection(this)"
              tabIndex="2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </div>
          </a> */}
        </div>
      )}
      <div className="img_sec">
        <img
          src={userInfo?.user?.profilePic ?? mainProfile}
          style={{
            // width: "40%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "end",
            filter: "grayscale(0.5)",
          }}
          className={`profile-image   shadow-2xl ${
            userInfo?.user?.profilePic !== null
              ? "rounded-xl w-[300px] h-[350px]"
              : "rounded-lg"
          }`}
          alt="ProfileImage"
        />
      </div>
    </section>
  );
}
