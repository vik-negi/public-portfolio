import React, { useState } from "react";
import WOWAppBar from "./components/WOWAppBar";
import calendar from "../../assets/wallOfWellness/calendar.svg";

import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appStore.png";
import { Helmet } from "react-helmet";
import WoWIndividualStoryCard from "./components/WoWIndividualStoryCard";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import loader from "../../assets/wallOfWellness/loader.json";
import Lottie from "lottie-react";

const IndividualWallOfWellness = () => {
  const [wowStory, setWoWStory] = useState(null);

  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const [loadingAllData, setLoadingAllData] = useState(true);

  const fetchWoWStories = async (token) => {
    setLoadingAllData(true);
    try {
      const response = await axios.get(
        `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/getuserStoryById/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            // "x-user-id": "86662af3-0110-4024-b132-831e533bfe6b",
            // accessToken: token,
          },
        }
      );
      setWoWStory(response.data);
      let lists = [];
      for (let i = 0; i < response.data?.userStory.videos.length; i++) {
        lists.push({
          link: response.data?.userStory.videos[i].videoURL,
          type: "video",
        });
      }
      for (let i = 0; i < response.data?.userStory.photos.length; i++) {
        lists.push({
          link: response.data?.userStory.photos[i].photoURL,
          type: "photo",
        });
      }
      setFiles(lists);
    } catch (error) {
      console.error("Cannot fetch all the trips correctly!", error);
    }
    setLoadingAllData(false);
  };

  const [userData, setUserData] = useState({
    name: null,
    userId: null,
    imageUrl: null,
    accessToken:
      "1cf06b4364c1cd3909f728cbaa5cbfe2c6199973a431c0b752b91f2a2997178f60d5d1ea20276ab01eb481d28f1eafeb",
  });

  const getFormattedDate = (inputDate) => {
    if (inputDate === null || inputDate == undefined) return "";
    console.log("Input Date", inputDate);
    const formatDate = (isoString) => {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);
    };

    // Usage
    const formattedDate = formatDate(inputDate);

    return formattedDate;
  };

  useEffect(() => {
    window.receiveUserData = (data) => {
      console.log("User Data received:", data);
      localStorage.setItem("userData", JSON.stringify(data));

      setUserData({
        name: data.name,
        userId: data.userId,
        imageUrl: data.imageUrl,
        accessToken: data.accessToken,
      });
    };

    const storedUserData = localStorage.getItem("userData");
    console.log(`storedUserData : ${storedUserData}`);
    if (storedUserData) {
      const data = JSON.parse(storedUserData);
      setUserData(data);
      fetchWoWStories(data.accessToken);
    }
    // fetchWoWStories(userData.accessToken);

    return () => {
      delete window.receiveUserData;
    };
  }, []);

  return (
    <div className="bg-[#24262bec]">
      {/* <Helmet>
        <title>WoW - Wall of Wellness</title>
        <meta
          name="description"
          content="
        Walking has been a transformative experience in my life, offering both physical and mental benefits that have shaped my well-being. It started as a simple activity, a way to get from one place to another, but over time, it evolved into a cherished routine that I look forward to every day.
        "
        />
        <meta name="theme-color" content="#24262B" />
        <meta
          name="keywords"
          content="Walking, Physical Health, Mental Health"
        />
      </Helmet> */}
      <div className="mx-auto max-w-[400px] bg-[#24262B]">
        {userData?.userId === null && <WOWAppBar />}
        {loadingAllData ? (
          <Lottie
            style={{
              height: "100vh",
            }}
            animationData={loader}
            alt=""
          />
        ) : (
          <>
            <div className="bg-[#FFFFFF1A] h-[1px]" />
            <div className="pt[17px] px-[24px] mt-[17px] pb-[4px]">
              <div className="relative">
                <p className="text-[18px] text-[#FFFFFF] font-general font-semibold leading-[22px] trim-text">
                  “{wowStory?.userStory.title}”
                </p>
                {/* <div className="absolute w-[20px] right-0 bottom-[1px] bg-[#24262B]">
              <p className="text-[18px] text-[#FFFFFF]  font-semibold leading-[22px] text-right trim-text">
                ...”
              </p>
            </div> */}
              </div>

              <div className="mt-[10px]">
                <img
                  src={calendar}
                  alt="Calendar"
                  className="h-[20px] w-[20px] float-left mr-[10px]"
                />
                {wowStory?.userStory?.createdAt !== null && (
                  <p className="text-[12px] text-[#FFFFFF66] font-medium leading-[15px]">
                    {getFormattedDate(wowStory?.userStory.createdAt)}
                  </p>
                )}
              </div>
            </div>

            {/*  */}
            <WoWIndividualStoryCard
              name={wowStory?.firstName + " " + wowStory?.lastName}
              tripName={wowStory?.tripName}
              userImage={wowStory?.userStory?.photoURL}
              completedIn={wowStory?.tripCompletedInDays}
              totalSteps={wowStory?.stepsMoved}
              medal={wowStory?.medalInfo?.completedTripsCount}
            />

            <div className="mt-[36px] pb-[100px] p-[28px] bg-white rounded-t-[16px]">
              {/* <img
            src="https://s3-alpha-sig.figma.com/img/d830/c648/dd6eccbf40a9914b7c671ec1e553aaa5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~Qn2Hh92rdPuYi3MGn1GC9yPwHzaim~BOsgpNwVt-P188XsNUAO-mGiTEeiJRCtjhrGFbd9e7G7vAw1f0-q0K-IKcbHrXGEEhDHoLx3goAee6lmG8mh-h3c1VuG5psn2IjN~baLdxh8EDvszuYSavbv7rvvTMcEFADkNQsS-nVDiqMGlk0gAKctfaIms4-oTV91bbe60w9xvuN3lUjcUp3~W4SNia0yq4a-4zh9LZgCcdpR4tOPdvul~IWOnZnmEb-EZgpI51jz98V5jhmHTbSXxZjXOEzwZkLwvkUnLZKVYDHjKrA-6pu38Ar0NyVp1JM5O74XRyV7i03I9UWcgA__"
            alt="Image"
            className="w-full h-[310px] object-cover rounded-[10px]"
          /> */}

              {files.length > 0 && (
                <div className="mt-4">
                  {/* {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Upload"
                  className="h-20 w-20"
                />
                <p className="text-[14px] text-[#1C1C1C] font-medium leading-[20px] ml-4">
                  {file.name}
                </p>
              </div>
            ))} */}

                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                  >
                    {files.map((file, index) => (
                      <SwiperSlide
                        key={index}
                        // className="h-[182px] w-[182px] rounded-xl shadow-md"
                      >
                        {file.type === "video" ? (
                          <video
                            src={file.link}
                            controls
                            className="rounded-3xl"
                            // height={"320px"}
                            // width={"320px"}
                          ></video>
                        ) : (
                          <img
                            src={file.link}
                            alt={file.link}
                            // height={"320px"}
                            // width={"320px"}
                            className="rounded-3xl object-cover"
                          />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              <div className="mt-[20px]">
                <p className="text-[#000000] font-medium leading-[24px]">
                  <span className="text-[24px] leading-[38.4px]">
                    {wowStory?.userStory.content?.charAt(0)}
                  </span>
                  <span className="text-[14px] leading-[17.5px]">
                    {wowStory?.userStory.content?.slice(1)}
                  </span>
                </p>
              </div>
            </div>
            {userData.userId === null && <FooterAppDowwnload />}
          </>
        )}
      </div>
    </div>
  );
};

export const StoryCardText = ({ title, subtitle }) =>
  // : { title: string; subtitle: String }
  {
    return (
      <div className={`${title == "Medal" ? "mt-[32px]" : "mt-[22px]"}`}>
        <p className="text-[10px] text-[#00000099] font-medium leading-[12.5px]">
          {title}
        </p>
        <p className="text-[12px] text-[#000000CC] font-medium leading-[15px]">
          {subtitle}
        </p>
      </div>
    );
  };
const FooterAppDowwnload = () => {
  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.koshiqa",
      "_blank"
    );
  };
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/in/app/koshiqa/id1627654638", "_blank");
  };
  return (
    <div className="bg-white max-w-[400px] min-w-[400px]">
      <div
        className={`py-4 max-w-[400px] w-[100%] fixed bottom-0 bg-white rounded-t-[16px] flex justify-center`}
        style={{
          boxShadow: "0px 0px 8px 0px #00000024",
        }}
      >
        <img
          onClick={handlePlayStoreClick}
          src={playStore}
          alt="Play Store"
          className="h-[42px] "
        />
        <img
          onClick={handleAppStoreClick}
          src={appStore}
          alt="App Store"
          className="h-[42px]  ml-3"
        />
      </div>
    </div>
  );
};

export default IndividualWallOfWellness;
