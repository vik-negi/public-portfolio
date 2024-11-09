import React from "react";
import { WOWWhiteAppBar } from "./components/WOWAppBar";
import images from "../../assets/wallOfWellness/images.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WriteYourWoWStoryStep = () => {
  const [headline, setHeadline] = useState(
    "Consistency was my biggest weakness but that’s starting to change!"
  );
  const [story, setStory] = useState(
    "Participating in the Stepathon contest has been a game changer for my fitness journey. Before joining, I struggled with consistency in my workouts and often found excuses to skip my routines. However, the competitive spirit of the contest motivated me to stay on track. Each step forward not only made me feel more accountable but also made exercising more fun."
  );

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onUploadFile = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  return (
    <div className="bg-[#f9f9f9]">
      <div className="mx-auto max-w-[400px] bg-[#FAFAFA]">
        <WOWWhiteAppBar title={"Write your WoW Story"} />
        <div className="p-[28px]">
          {/* Inline style for the placeholder in a specific input */}
          <style>
            {`
          .headline-input::placeholder {
            font-family: 'General Sans', sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.25px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
          }
            .story-input::placeholder {
            font-family: 'General Sans', sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.25px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
          }
        `}
          </style>
          <input
            type="text"
            value={headline}
            placeholder="Story Headline"
            maxLength={4}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-[#0E986A] mb-4 headline-input text-[20px] font-semibold text-[#1C1C1C] leading-[20px]"
          />

          <div className="mt-4">
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="flex items-center bg-[#24262B] px-4 py-2 text-white text-sm font-semibold rounded-[8px]"
            >
              <img src={images} alt="Choose Picture" className="" />
              Upload Images/Videos
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={onUploadFile}
              multiple // Allow selecting multiple files
            />
          </div>
          {selectedFiles.length > 0 && (
            <div className="mt-4 h-[182px] w-[182px]">
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
                {selectedFiles.map((file, index) => (
                  <SwiperSlide
                    key={index}
                    // className="h-[182px] w-[182px] rounded-xl shadow-md"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      height={"182px"}
                      width={"182px"}
                      className="rounded-3xl "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Write your story"
            className="w-full focus:outline-none mt-4 story-input text-[14px] font-medium text-[#1C1C1C] leading-[20px]"
            rows={10}
          />
        </div>

        <div className="mt-[36px] max-w-[344px] w-full m-[28px] ">
          <button
            onClick={() => {
              window.location.href = "/#/wall-of-wellness/create/write-story";
            }}
            className="bg-[#0E986A] max-w-[344px] mb-[28px] w-full fixed bottom-0 text-white py-[18px] rounded-[16px] font-semibold"
          >
            Send your story
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteYourWoWStoryStep;
