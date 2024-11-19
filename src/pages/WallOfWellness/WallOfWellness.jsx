import React, { useEffect, useState } from "react";
import wallBgImage from "../../assets/wallOfWellness/wall_bg_image.png";
import wow from "../../assets/wallOfWellness/wow.svg";
import edit from "../../assets/wallOfWellness/edit.svg";
import frame from "../../assets/wallOfWellness/frame.png";
import arrowRight from "../../assets/wallOfWellness/arrowRight.svg";
import WOWAppBar from "./components/WOWAppBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const WallOfWellness = () => {
  const [userData, setUserData] = useState({
    name: null,
    userId: null,
    imageUrl: null,
    accessToken:
      "6b5531bd276939cccfa67d4237da0a0e7043df4740b41212c2749b243c43f88eadf76e275b4883ca479f4497b1abf632",
  });
  // const tripId = "ec96e83d-f126-464f-8526-fbb9df3ec227";
  const [wowStories, setWoWStories] = useState([]);
  const [tripId, setTripId] = useState(null);
  const [tripIdIndex, setTripIdIndex] = useState(0);
  const [latestTrips, setLatestTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLatestTrips = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.koshiqa.com/gateway/trekking/user/v1/trekking/fetchAllTripIdByDate",
        {
          headers: {
            "Content-Type": "application/json",
            // "x-user-id": "86662af3-0110-4024-b132-831e533bfe6b",
            // accessToken: userData.accessToken,
          },
        }
      );
      const filteredList = [];
      response.data.forEach((trip) => {
        if (
          !trip.name.toLowerCase().includes("sample") &&
          !trip.name.toLowerCase().includes(" test")
        ) {
          // console.log(`trip : ${trip.name}`);
          filteredList.push(trip);
        }
      });

      console.log(`filteredList : ${filteredList[1].name}`);
      setLatestTrips(filteredList);
      if (filteredList.length > 0) {
        setTripId(filteredList[tripIdIndex].id);
        setTripIdIndex(tripIdIndex + 1);
      }
    } catch (error) {
      console.error("Cannot fetch all the trips correctly!", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLatestTrips();
  }, []);

  const fetchWoWStories = async () => {
    if (tripId === null) return;
    try {
      const response = await axios.get(
        // `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/getUserStoryByTrip/${tripId}`,
        `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/getUserStoryByTrip/ec96e83d-f126-464f-8526-fbb9df3ec239`,

        {
          headers: {
            "Content-Type": "application/json",
            // "x-user-id": "86662af3-0110-4024-b132-831e533bfe6b",
            // accessToken: userData.accessToken,
          },
        }
      );
      console.log(`wow cards response : ${response.data}`);
      setWoWStories((prevStories) => [...prevStories, ...response.data]);
    } catch (error) {
      console.error("Cannot fetch all the trips correctly!", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10 &&
      !isLoading
    ) {
      if (tripIdIndex < latestTrips.length) {
        setTripId(latestTrips[tripIdIndex].id);
        setTripIdIndex(tripIdIndex + 1);
      }
    }
  };

  // Fetch stories when tripId changes
  useEffect(() => {
    fetchWoWStories(tripId);
  }, [tripId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tripId]);

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
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    return () => {
      delete window.receiveUserData;
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Dynamic Page Title */}
        <title>{"WoW - Wall Of Wellness"}</title>

        {/* Meta Tags for Open Graph (used by Facebook, LinkedIn) */}
        <meta property="og:title" content={"WoW - Wall Of Wellness"} />
        <meta
          property="og:description"
          content={
            "This wall of wellness from Koshiqa is so inspiring.\nLoved these medal winning journey and experience of people with Koshiqa. Do read it"
          }
        />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png"
          }
        />
        <meta
          property="og:url"
          content={"https://portfoliahub.vercel.app/#/wow"}
        />
        <meta property="og:type" content="website" />

        {/* Meta Tags for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"WoW - Wall Of Wellness"} />
        <meta
          name="twitter:description"
          content={
            "This wall of wellness from Koshiqa is so inspiring.\nLoved these medal winning journey and experience of people with Koshiqa. Do read it"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://res.cloudinary.com/dolqf9s3y/image/upload/v1732011613/wow_ss_gel6dh.png"
          }
        />
        <meta
          name="twitter:url"
          content={"https://portfoliahub.vercel.app/#/wow"}
        />
      </Helmet>
      <div className="bg-[#24262bec]">
        <div className="mx-auto max-w-[400px] bg-[#24262B]">
          <WOWAppBar userId={userData.userId} forceClose={true} />

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
            <p className="text-[27px] text-center text-white">
              WALL OF WELLNESS 1
            </p>
            <p className="text-[16px] mt-[10.5px] mx-[30px] text-center text-[#FFFFFFCC]">
              Join the Wall of Wellness (WoW) by sharing your Koshiqa story!
            </p>
            {userData.userId !== null && (
              <Link to="/wow/create">
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
                    Write Your Story (+1)
                  </p>
                </div>
              </Link>
            )}
            {userData.userId !== null && (
              <p className="text-[14px] text-[#FFFFFFCC] text-center leading-[18.2px] font-medium">
                Get yourself featured on the WoW
              </p>
            )}
          </div>

          <div className="py-[20px] px-[20px] bg-white rounded-t-[30.6px]">
            <div className="mt-[28px] mb-2 mx-[29px]">
              <p className="text-[18px] font-semibold text-center leading-[22px] text-[#1F222A]">
                Champions fuelling the Torty’s Mission of Fit India & Green
                India{" "}
              </p>
            </div>

            {/*  */}
            {wowStories.map((wowStory, index) => (
              <StoryCard rotate={index == 0} wowStory={wowStory} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const StoryCardBottomText = ({ title, subtitle }) =>
  // : {
  //   title: string;
  //   subtitle: String;
  // }
  {
    return (
      <div className="flex items-center flex-col">
        <p className="text-[10px] text-white font-medium leading-[12.5px]">
          {" "}
          {title}
        </p>
        <p className="text-[14px] text-white font-semibold leading-[17.5px] ">
          {subtitle}
        </p>
      </div>
    );
  };
const StoryCard = ({ rotate = false, wowStory }) =>
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
                wowStory?.photoURL ??
                "https://s3-alpha-sig.figma.com/img/300f/32ae/27071ef94f8189b31899140af51636be?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4vGQ7A3qLi-2bOye178VnzXwO1kHtwLbKoVtq8tinL2SbcD9fDs-QYwm52FR~4VXT0JgBl3XiLpzmgk42UGqCmsEe54tG-4aIFsQaBDjws4gXIDlP2YpVfk~lu5LOm-sD4CZ8f1~FCwFG3nxcpS-vxt4i2PJa17JMhkpuC1O9SaOyWKxXdVfrLugG8zoXzOX6X0RNVP60mdG9N~nCV~lqQbcNQONG9IJdJkM8MQLhKmWlpXHdLsEQK23ugxqEJlPYcgfCy2efycktgCSuGlC1x~SrXGOgHpR3rwTDQCpHrA5Q1FcWk4YI2H29dXffcG-A9ccMoz3oGcYwg~oUHy7Q__"
              }
              alt="Frame"
              className="inset-0 object-cover top-[10px]"
              style={{
                zIndex: -1,
                marginTop: "8px",
                marginLeft: "8px",

                height: "125px",
                overflow: "hidden",
              }}
              height={"125px"}
              width={"125px"}
            />
          </div>
          <div>
            <div className="relative min-h-[64px]">
              {wowStory?.title?.length < 70 ? (
                <p className="text-[14px] text-[#003B2F] ml-[160px] font-medium leading-[18.2px] text-right trim-text">
                  “{wowStory?.title}”
                </p>
              ) : (
                <>
                  <p className="text-[14px] text-[#003B2F] ml-[160px] font-medium leading-[18.2px] text-right trim-text">
                    “{wowStory?.title}
                  </p>
                  <div className="absolute w-[20px] right-0 bottom-[1px] bg-[#D3FFF6]">
                    <p className="text-[14px] text-[#1F222A]  font-medium leading-[18.2px] text-right trim-text">
                      ...”
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="relative ml-auto hover:cursor-pointer">
              <Link
                to={`/wow/${wowStory?.userStoryId || ""}`}
                className="cursor-pointer mt-[50px] ml-auto justify-end flex items-center"
              >
                <p className="text-black">Read More</p>
                <img
                  src={arrowRight}
                  alt="Arrow Right"
                  className="h-[20px] ml-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="px-5 py-4 rounded-b-[12px] bg-[#025B4B] flex justify-around">
          <StoryCardBottomText
            title="Medal"
            subtitle={`#${wowStory.medalInfo.completedTripsCount}`}
          />
          <StoryCardBottomText
            title="Completed in"
            subtitle={
              wowStory.daysBetween == null
                ? "-"
                : `${wowStory.daysBetween} Days`
            }
          />
          <StoryCardBottomText
            title="Total Steps"
            subtitle={`${wowStory.stepsMoved}`}
          />
        </div>
      </div>
    );
  };

export default WallOfWellness;
