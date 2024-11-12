import React, { useEffect, useState } from "react";
import { WOWWhiteAppBar } from "./components/WOWAppBar";
import images from "../../assets/wallOfWellness/images.svg";
import WoWIndividualStoryCard from "./components/WoWIndividualStoryCard";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WriteYourWoWStory = () => {
  const [userData, setUserData] = useState({
    name: null,
    userId: null,
    imageUrl: null,
    accessToken:
      "3bae8df17e4a3c04bb237e24275077027088f58ec98ed76c251361987c3b3cf1db739d91b07c77ce31546e2db2b79b81",
  });
  const [moveToNextStep, setMoveToNextStep] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const onUploadCardImage = (e) => {
    const files = e.target.files;
    setSelectedFile(files[0]);
  };

  const [headline, setHeadline] = useState("");
  const [story, setStory] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onUploadFile = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  const [tripDetails, setTripDetails] = useState(null);
  const [tripDetailsLoading, setTripDetailsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestTripDetails = async () => {
      setTripDetailsLoading(true);
      try {
        const response = await axios.get(
          `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/wowPageTripDetailsByUserId`,
          {
            headers: {
              "Content-Type": "application/json",
              accessToken: userData.accessToken,
            },
          }
        );
        setTripDetails(response.data);
      } catch (error) {
        console.error("Cannot fetch all the trips correctly!", error);
      }
      setTripDetailsLoading(false);
    };
    fetchLatestTripDetails();
  }, []);

  // const tripId = "ec96e83d-f126-464f-8526-fbb9df3ec227";

  const uploadFile = async ({ file, fileType }) => {
    const formData = new FormData();
    formData.append("mediaFile", file);
    formData.append("mediaType", fileType);

    try {
      const response = await axios.post(
        `https://api.koshiqa.com/gateway/media/service/media?mediaType=${fileType}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accessToken: userData.accessToken,
          },
        }
      );
      console.log("File uploaded successfully!", response);
      return response.data.response.link;
    } catch (error) {
      console.error("Cannot upload the file correctly!", error);
    }
    return null;
  };

  const handleUploadStoryImages = async (storyId, photoUrl) => {
    try {
      const response = await axios.post(
        `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/addPhotoToUserStory/${storyId}?photoURL=${photoUrl}`,
        {},

        {
          headers: {
            "Content-Type": "application/json",
            accessToken: userData.accessToken,
          },
        }
      );
      console.log("File uploaded successfully!", response);
      return true;
    } catch (error) {
      console.error("Cannot upload the file correctly!", error);
    }
    return false;
  };

  const [loadingCreateStory, setLoadingCreateStory] = useState(false);

  const handleCreateStory = async () => {
    setLoadingCreateStory(true);
    let data = {
      content: story,
      title: headline,
    };

    const cardImage = await uploadFile({
      file: selectedFile,
      fileType: "PHOTO",
    });
    if (cardImage === null) {
      setLoadingCreateStory(false);
      return;
    }
    data["photoURL"] = cardImage;
    let storyId = null;

    try {
      const response = await axios.post(
        `https://api.koshiqa.com/gateway/trekking/trekking/createUserStory/${tripDetails.tripDetails.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: userData.accessToken,
          },
        }
      );
      if (response.status !== 201) {
        setLoadingCreateStory(false);
        return;
      }
      storyId = response.data.userStoryId;

      console.log("Story created successfully!", response);
    } catch (error) {
      console.error("Cannot create the story correctly!", error);
      setLoadingCreateStory(false);
      return;
    }
    if (storyId == null) return;
    for (const file of selectedFiles) {
      const storyImage = await uploadFile({
        file,
        fileType: file.type.startsWith("video/") ? "VIDEO" : "PHOTO",
      });
      if (storyImage === null) {
        continue;
      }
      handleUploadStoryImages(storyId, storyImage);
    }
    setLoadingCreateStory(false);
  };

  return (
    <div
      className="
     bg-[#f9f9f9]
  "
    >
      <div className="mx-auto max-w-[400px] bg-[#FAFAFA] min-h-[100vh]">
        <WOWWhiteAppBar title={"Write your WoW Story"} />
        <div className="bg-[#0000001A] h-[1px]" />
        {!moveToNextStep ? (
          <>
            <div className="pt-[36px] px-[28px] pb-[28px]">
              <button
                onClick={() => document.getElementById("fileInputCard").click()}
                className="flex items-center bg-[#24262B] px-4 py-2 text-white text-sm font-semibold rounded-[8px]"
              >
                <img src={images} alt="Choose Picture" className="" />
                <span className="text-[12px] text-[#FFFFFF] font-semibold leading-[15.6px]  ml-[6px]">
                  Upload Your Photo
                </span>
                <input
                  type="file"
                  id="fileInputCard"
                  style={{ display: "none" }}
                  onChange={onUploadCardImage}
                  multiple // Allow selecting multiple files
                />
              </button>

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
              userImage={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : userData.imageUrl
              }
              name={userData.name}
              tripName={
                tripDetailsLoading ? "--" : tripDetails?.tripDetails?.tripName
              }
              totalSteps={
                tripDetailsLoading
                  ? "-"
                  : tripDetails?.tripDetails?.stepsData?.stepsMoved
              }
              completedIn={
                tripDetailsLoading
                  ? "-"
                  : tripDetails?.tripDetails?.stepsData?.tripCompletionDate
              }
              medal={
                tripDetailsLoading
                  ? "-"
                  : tripDetails?.medalData?.completedTripsCount
              }
            />
          </>
        ) : (
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
              <div
                className="mt-4 h-[182px] w-[182px]"
                style={{
                  maxHeight: "182px",
                  maxWidth: "182px",
                }}
              >
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
                      {file.type.startsWith("video/") ? (
                        <video
                          height="182px"
                          width="182px"
                          controls
                          style={{
                            objectFit: "cover",
                            maxHeight: "182px",
                            maxWidth: "182px",
                          }}
                          className="rounded-3xl"
                        >
                          <source
                            src={URL.createObjectURL(file)}
                            type={file.type}
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          height={"182px"}
                          width={"182px"}
                          style={{
                            objectFit: "cover",
                            maxHeight: "182px",
                            maxWidth: "182px",
                          }}
                          className="rounded-3xl"
                        />
                      )}
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
        )}
        <WriteYourWoWStoryStepChoosePicture
          onTap={() => {
            if (!moveToNextStep) {
              if (selectedFile === null && userData.imageUrl === null) {
                alert("Please upload a photo");
                return;
              }
              setMoveToNextStep(true);
            } else {
              handleCreateStory();
            }
          }}
          showLoading={loadingCreateStory && moveToNextStep}
          text={moveToNextStep ? "Send your story" : "Next"}
        />

        {/* <div className="mt-[36px] max-w-[344px] w-full m-[28px] ">
          <button

            onClick={() => {
              setMoveToNextStep(true);
              window.location.href = "/#/wow/create/write-story";
            }}
            className="bg-[#0E986A] max-w-[344px] mb-[28px] w-full fixed bottom-0 text-white py-[18px] rounded-[16px] font-semibold"
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export const WriteYourWoWStoryStepChoosePicture = ({
  onTap,
  text,
  showLoading,
}) => {
  return (
    <div className="mt-[36px] max-w-[344px] w-full m-[28px] ">
      <button
        onClick={onTap}
        className="bg-[#0E986A] max-w-[344px] mb-[28px] w-full fixed bottom-0 text-white py-[18px] rounded-[16px] font-semibold"
      >
        {showLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-2 border-t-[4px] border-[#fff] rounded-full animate-spin" />
          </div>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default WriteYourWoWStory;
