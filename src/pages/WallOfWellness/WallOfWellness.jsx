import React, { useEffect, useState } from "react";
import wallBgImage from "../../assets/wallOfWellness/wall_bg_image.png";
import wow from "../../assets/wallOfWellness/wow.svg";
import edit from "../../assets/wallOfWellness/edit.svg";
import frame from "../../assets/wallOfWellness/frame.png";
import arrowRight from "../../assets/wallOfWellness/arrowRight.svg";
import WOWAppBar from "./components/WOWAppBar";
import { Link } from "react-router-dom";

const WallOfWellness = () => {
  const [userData, setUserData] = useState({
    name: "",
    userId: "",
    imageUrl: "",
  });

  useEffect(() => {
    window.receiveUserData = (data) => {
      console.log("User Data received:", data);
      setUserData({
        name: data.name,
        userId: data.userId,
        imageUrl: data.imageUrl,
      });
    };

    // Clean up the function when the component unmounts
    return () => {
      delete window.receiveUserData;
    };
  }, []);

  return (
    <div className="bg-[#24262bec]">
      <div className="mx-auto max-w-[400px] bg-[#24262B]">
        <WOWAppBar />

        <div className="relative ">
          <img
            src={wallBgImage}
            alt="Wall of Wellness"
            className="z-0 object-cover pb-[70px]"
          />
          <div
            style={{
              background:
                "linear-gradient(0deg, #24262B 10%, rgba(36, 38, 43, 0) 100%)",
            }}
            className="absolute inset-0 pb-7"
          />
        </div>

        <div className="mt-[-120px] mb-[44px] relative">
          <img
            src={wow}
            alt="Wall of Wellness"
            className="object-cover flex ml-auto mr-[24px] relative"
          />
          <p className="text-[27px] text-center text-white">WALL OF WELLNESS</p>
          <p className="text-[16px] mt-[10.5px] mx-[30px] text-center text-[#FFFFFFCC]">
            Join the Wall of Wellness (WoW) by sharing your Koshiqa story!
          </p>
          <Link to="/wall-of-wellness/create/choose-picture">
            <div
              className="mt-[32px] mb-[10px] py-[18px] rounded-[16px] flex items-center justify-center mx-[24px]"
              style={{
                background:
                  "linear-gradient(360deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              }}
            >
              <img
                src={edit}
                alt="Share Icon"
                className="float-left mr-[10px] h-[20px]"
              />
              <p className="text-[14px] font-semibold text-white leading-[18.2px]">
                Write Your Story
              </p>
            </div>
          </Link>

          <div className="flex items-center justify-center text-white mt-5">
            <img src={userData.imageUrl} alt="User" className="h-[30px] ml-2" />
            <p className="text-[14px] font-semibold text-white leading-[18.2px]">
              {userData.name} , {userData.userId} ,
            </p>
          </div>
          <p className="text-[14px] text-[#FFFFFFCC] text-center leading-[18.2px] font-medium">
            Get yourself featured on the WoW
          </p>
        </div>

        <div className="py-[20px] px-[20px] bg-white rounded-t-[30.6px]">
          <div className="mt-[28px] mb-2 mx-[29px]">
            <p className="text-[18px] font-semibold text-center leading-[22px] text-[#1F222A]">
              Champions fuelling the Torty’s Mission of Fit India & Green India{" "}
            </p>
          </div>

          {/*  */}
          <StoryCard />
          <StoryCard rotate={true} />
          <StoryCard rotate={true} />
          <StoryCard rotate={true} />
        </div>
      </div>
    </div>
  );
};

const StoryCardBottomText = ({ title, subtitle }) =>
  // : {
  //   title: string;
  //   subtitle: String;
  // }
  {
    return (
      <Link to="/wall-of-wellness/1">
        <div className="flex items-center flex-col">
          <p className="text-[10px] text-white font-medium leading-[12.5px]">
            {" "}
            {title}
          </p>
          <p className="text-[14px] text-white font-semibold leading-[17.5px] ">
            {subtitle}
          </p>
        </div>
      </Link>
    );
  };
const StoryCard = ({ rotate = false }) =>
  // : { rotate?: Boolean }
  {
    return (
      <div className={`relative ${rotate ? "mt-[52px]" : "mt-[45px]"}`}>
        <div className="p-4 bg-[#D3FFF6] rounded-t-[12px] relative">
          <div
            className={`absolute inset-0 ${
              rotate ? "top-[-33.3px]" : "top-[-20px]"
            } left-4 ${rotate && "transform rotate-[-6deg]"}`}
          >
            <img
              src={frame}
              alt="Frame"
              className="absolute inset-0 object-cover"
              height={"165px"}
              width={"137px"}
            />
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/300f/32ae/27071ef94f8189b31899140af51636be?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4vGQ7A3qLi-2bOye178VnzXwO1kHtwLbKoVtq8tinL2SbcD9fDs-QYwm52FR~4VXT0JgBl3XiLpzmgk42UGqCmsEe54tG-4aIFsQaBDjws4gXIDlP2YpVfk~lu5LOm-sD4CZ8f1~FCwFG3nxcpS-vxt4i2PJa17JMhkpuC1O9SaOyWKxXdVfrLugG8zoXzOX6X0RNVP60mdG9N~nCV~lqQbcNQONG9IJdJkM8MQLhKmWlpXHdLsEQK23ugxqEJlPYcgfCy2efycktgCSuGlC1x~SrXGOgHpR3rwTDQCpHrA5Q1FcWk4YI2H29dXffcG-A9ccMoz3oGcYwg~oUHy7Q__"
              }
              alt="Frame"
              className=" inset-0 object-cover"
              style={{
                zIndex: -1,
                padding: "10px",
                height: "125px",
                overflow: "hidden",
              }}
              height={"125px"}
              width={"125px"}
            />
          </div>
          <div>
            <div className="relative">
              <p className="text-[14px] text-[#003B2F] ml-[160px] font-medium leading-[18.2px] text-right trim-text">
                “Consistency was my biggest weakness but that’s starting to
                change...”
              </p>
              <div className="absolute w-[20px] right-0 bottom-[1px] bg-[#D3FFF6]">
                <p className="text-[14px] text-[#1F222A]  font-medium leading-[18.2px] text-right trim-text">
                  ...”
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end mt-[50px]">
              <p className="text-black">Read More</p>
              <img
                src={arrowRight}
                alt="Arrow Right"
                className="h-[20px] ml-1"
              />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="px-5 py-4 rounded-b-[12px] bg-[#025B4B] flex justify-around">
          <StoryCardBottomText title="Medal" subtitle="#2" />
          <StoryCardBottomText title="Completed in" subtitle="40 Days" />
          <StoryCardBottomText title="Total Steps" subtitle="6,00,000" />
        </div>
      </div>
    );
  };

export default WallOfWellness;
