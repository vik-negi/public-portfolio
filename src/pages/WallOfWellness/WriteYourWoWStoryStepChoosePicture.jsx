import React, { useEffect, useState } from "react";
import { WOWWhiteAppBar } from "./components/WOWAppBar";
import images from "../../assets/wallOfWellness/images.svg";
import WoWIndividualStoryCard from "./components/WoWIndividualStoryCard";

const WriteYourWoWStoryStepChoosePicture = () => {
  const [userData, setUserData] = useState({
    name: null,
    userId: null,
    imageUrl: null,
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div
      className="
     bg-[#f9f9f9]
  "
    >
      <div className="mx-auto max-w-[400px] bg-[#FAFAFA] min-h-[100vh]">
        <WOWWhiteAppBar title={"Write your WoW Story"} />
        <div className="bg-[#0000001A] h-[1px]" />
        <div className="pt-[36px] px-[28px] pb-[28px]">
          <div className="bg-[#24262BE5] px-[10px] py-2 flex rounded-[8px] w-fit">
            <img src={images} alt="Choose Picture" className="" />
            <span className="text-[12px] text-[#FFFFFF] font-semibold leading-[15.6px]  ml-[6px]">
              Upload Your Photo
            </span>
          </div>

          <div className="mt-[38px]">
            <div className="flex items-center">
              <p className="text-[14px] text-[#1C1C1C80]  font-medium leading-[20px]">
                PREVIEW
              </p>
              <div className="ml-[6px] h-[1px] bg-[#0000001A] w-full" />
            </div>
          </div>
        </div>
        <WoWIndividualStoryCard
          userImage={userData.imageUrl}
          name={userData.name}
        />

        <div className="mt-[36px] max-w-[344px] w-full m-[28px] ">
          <button
            onClick={() => {
              window.location.href = "/#/wall-of-wellness/create/write-story";
            }}
            className="bg-[#0E986A] max-w-[344px] mb-[28px] w-full fixed bottom-0 text-white py-[18px] rounded-[16px] font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteYourWoWStoryStepChoosePicture;
