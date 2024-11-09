import React from "react";
import { StoryCardText } from "../IndividualWallOfWellness";
import frame from "../../../assets/wallOfWellness/frame.png";

const WoWIndividualStoryCard = ({ userImage, name }) => {
  return (
    <div
      className="p-4 bg-[#D3FFF6] justify-between flex rounded-[12px] relative min-h-[204px] mx-[26px] mt-[24px] "
      style={{
        boxShadow: "0px 6px 0px 0px #0E986A",
      }}
    >
      <div className="">
        <p className="text-[14px] max-w-[105px] text-[#005D3E] font-semibold leading-[17.5px]">
          Kolkata Medal Contest
        </p>
        <StoryCardText title="Medal" subtitle="#2" />
        <StoryCardText title="Completed in" subtitle="40 Days" />
        <StoryCardText title="Total Steps" subtitle="6,00,000 Steps" />
      </div>
      <div className={`  mt-[-36px] mr-[-8px] transform rotate-[2deg]`}>
        <img
          src={frame}
          alt="Frame"
          style={{}}
          className="inset-0 object-cover"
          height={"176px"}
          width={"212px"}
        />
        <img
          src={
            userImage ??
            "https://s3-alpha-sig.figma.com/img/300f/32ae/27071ef94f8189b31899140af51636be?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4vGQ7A3qLi-2bOye178VnzXwO1kHtwLbKoVtq8tinL2SbcD9fDs-QYwm52FR~4VXT0JgBl3XiLpzmgk42UGqCmsEe54tG-4aIFsQaBDjws4gXIDlP2YpVfk~lu5LOm-sD4CZ8f1~FCwFG3nxcpS-vxt4i2PJa17JMhkpuC1O9SaOyWKxXdVfrLugG8zoXzOX6X0RNVP60mdG9N~nCV~lqQbcNQONG9IJdJkM8MQLhKmWlpXHdLsEQK23ugxqEJlPYcgfCy2efycktgCSuGlC1x~SrXGOgHpR3rwTDQCpHrA5Q1FcWk4YI2H29dXffcG-A9ccMoz3oGcYwg~oUHy7Q__"
          }
          alt="userImage"
          className="inset-0 top-[10px] left-[10px] absolute object-cover transform rotate-[0deg]"
          style={{
            zIndex: -1,
            height: "200px",
            overflow: "hidden",
          }}
          height={"200px"}
          width={"190px"}
        />
        <p className="text-[14px] text-[#000000CC] tex-[10px] font-semibold leading-[10.5px] absolute bottom-[20px]  ml-4 mb-4 left-1/2 transform -translate-x-1/2">
          {name ?? ""}
        </p>
      </div>
      <div className="h-1 bg-["></div>
    </div>
  );
};

export default WoWIndividualStoryCard;
