import React from "react";
import arrowBack from "../../../assets/arrow_left.svg";
import arrowBackGrey from "../../../assets/wallOfWellness/arrow_left.svg";
import shareIcon from "../../../assets/wallOfWellness/share.svg";

const WOWAppBar = () => {
  return (
    <div className="py-[20px] px-[20px] flex max-w-[420px] items-center sticky top-0 bg-[#24262B] z-10">
      <img
        src={arrowBack}
        alt="Arrow Back"
        className="float-left h-[28px] mr-[8px]"
      />
      <p className="text-[18px] font-bold text-white">Wall of Wellness</p>
      <img
        src={shareIcon}
        alt="Arrow Back"
        className="float-left ml-auto  h-[20px]"
      />
    </div>
  );
};

export const WOWWhiteAppBar = ({ title }) =>
  // :{}
  {
    return (
      <div
        className={`py-[20px] px-[20px] flex max-w-[420px] items-center sticky top-0 bg-[#FAFAFA] z-10`}
      >
        <img
          onClick={() => {
            window.history.back();
          }}
          src={arrowBackGrey}
          alt="Arrow Back"
          className="float-left h-[28px] mr-[8px]"
        />
        <p className="text-[18px] font-medium leading-[24.3px] text-black">
          {title}
        </p>
      </div>
    );
  };

export default WOWAppBar;