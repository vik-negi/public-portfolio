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
import Lottie from "lottie-react";
import loader from "../../assets/wallOfWellness/loader.json";
import trash from "../../assets/wallOfWellness/trash.svg";
import { WriteYourWoWStoryStepChoosePicture } from "./WriteYourWoWStory";
import { useParams } from "react-router-dom";

const EditYourWoWStory = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    name: null,
    userId: null,
    imageUrl: null,
    accessToken:
      "3a2787cd62dfd0604afeca7155e2bbaaf37496b2e47e827fd67ceb33906d1645e29004157580f0b264dc11d6d72e8159",
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

  const [wowStory, setWoWStory] = useState(null);

  const fetchWoWStories = async (token) => {
    setTripDetailsLoading(true);
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
      setHeadline(response.data?.userStory.title);
      setStory(response.data?.userStory.content);
    } catch (error) {
      console.error("Cannot fetch all the trips correctly!", error);
    }
    setTripDetailsLoading(false);
  };

  const deleteImageFile = async (uid) => {
    console.log(`uuuid : ${uid}`);
    const imageToBeDeleted = wowStory.userStory.photos.find(
      (file) => file.id === uid
    );
    setWoWStory((prevStory) => {
      const newStory = { ...prevStory };
      newStory.userStory.photos = newStory.userStory.photos.filter(
        (file) => file.id !== uid
      );
      return newStory;
    });
    const isDeleted = await deleteFiles(uid, "photo");
    if (!isDeleted) {
      setWoWStory((prevStory) => {
        const newStory = { ...prevStory };
        newStory.userStory.photos.push(imageToBeDeleted);
        return newStory;
      });
    }
  };
  const deleteVideoFile = async (uid) => {
    const videoToBeDeleted = wowStory.userStory.videos.find(
      (file) => file.id === uid
    );
    setWoWStory((prevStory) => {
      const newStory = { ...prevStory };
      newStory.userStory.videos = newStory.userStory.videos.filter(
        (file) => file.id !== uid
      );
      return newStory;
    });

    const isDeleted = await deleteFiles(uid, "video");
    if (!isDeleted) {
      setWoWStory((prevStory) => {
        const newStory = { ...prevStory };
        newStory.userStory.videos.push(videoToBeDeleted);
        return newStory;
      });
    }
  };

  const deleteFiles = async (uid, type) => {
    try {
      const response = await axios.delete(
        type === "photo"
          ? `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/deleteUserStoryPhoto/${id}?uniquePhotoId=${uid}`
          : `https://api.koshiqa.com/gateway/trekking/user/v1/trekking/deleteUserStoryVideo/${id}?uniqueVideoId=${uid}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            // "x-user-id": "86662af3-0110-4024-b132-831e533bfe6b",
            accessToken: userData.accessToken,
            "Allow-Cross-Origin": "*",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return true;
    } catch (error) {
      console.error("Cannot fetch all the trips correctly!", error);
    }
    return false;
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    console.log(`storedUserData : ${storedUserData}`);
    if (storedUserData) {
      const data = JSON.parse(storedUserData);
      setUserData(data);
      //   fetchLatestTripDetails(data.accessToken);
      fetchWoWStories();
    }
    fetchWoWStories();
    // fetchLatestTripDetails(userData.accessToken);
  }, []);

  const [tripDetailsLoading, setTripDetailsLoading] = useState(false);

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

  const handleEditStory = async () => {
    setLoadingCreateStory(true);
    let data = {
      content: story,
      title: headline,
    };
    if (selectedFile == null && wowStory.userStory.photoURL == null) {
      setLoadingCreateStory(false);
      return;
    }
    if (selectedFile !== null) {
      const cardImage = await uploadFile({
        file: selectedFile,
        fileType: "PHOTO",
      });
      if (cardImage === null) {
        setLoadingCreateStory(false);
        return;
      }
      data["photoURL"] = cardImage;
    } else {
      data["photoURL"] = wowStory.userStory.photoURL;
    }
    let storyId = wowStory.userStory.userStoryId;

    try {
      const response = await axios.post(
        `https://api.koshiqa.com/gateway/trekking/trekking/updateUserStoryByUserStoryId/${storyId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            accessToken: userData.accessToken,
          },
        }
      );
      if (response.status !== 200 && response.status !== 201) {
        setLoadingCreateStory(false);
        return;
      }

      console.log("Story created successfully!", response);
    } catch (error) {
      console.error("Cannot create the story correctly!", error);
      setLoadingCreateStory(false);
      return;
    }

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
    window.history.back();
    setLoadingCreateStory(false);
  };

  return (
    <div
      className="
     bg-[#f9f9f9]
  "
    >
      {tripDetailsLoading ? (
        <div className="mx-auto max-w-[400px] bg-[#FAFAFA] min-h-[100vh]">
          <Lottie
            style={{
              height: "100vh",
            }}
            animationData={loader}
            alt=""
          />
        </div>
      ) : (
        <div className="mx-auto max-w-[400px] bg-[#FAFAFA] min-h-[100vh]">
          <WOWWhiteAppBar title={"Update your WoW Story"} />
          <div className="bg-[#0000001A] h-[1px]" />
          {!moveToNextStep ? (
            <>
              <div className="pt-[36px] px-[28px] pb-[28px]">
                <button
                  onClick={() =>
                    document.getElementById("fileInputCard").click()
                  }
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
                    : wowStory?.userStory?.photoURL
                }
                name={userData.name}
                tripName={tripDetailsLoading ? "--" : wowStory?.tripName}
                totalSteps={tripDetailsLoading ? "-" : wowStory?.stepsMoved}
                completedIn={
                  tripDetailsLoading ? "-" : wowStory?.tripCompletedInDays
                }
                medal={
                  tripDetailsLoading
                    ? "-"
                    : wowStory?.medalInfo?.completedTripsCount
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
                style={{
                  backgroundColor: "#FAFAFA !important",
                  color: "#FAFAFA !important",
                  background: "#FAFAFA !important",
                }}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full bg-[#FAFAFA] border-b border-gray-300 focus:outline-none focus:border-[#0E986A] mb-4 headline-input text-[20px] font-semibold text-[#1C1C1C] leading-[20px]"
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
                  style={{
                    display: "none",
                    backgroundColor: "#FAFAFA",
                  }}
                  onChange={onUploadFile}
                  multiple // Allow selecting multiple files
                />
              </div>
              {(selectedFiles.length > 0 ||
                wowStory.userStory.photos.length > 0 ||
                wowStory.userStory.videos.length > 0) && (
                <div
                  className="mt-4 h-[182px] w-[182px]"
                  style={{
                    height: "182px",
                    width: "182px",
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
                              height: "182px",
                              width: "182px",
                            }}
                            className="rounded-[5.02px]"
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
                              height: "182px",
                              width: "182px",
                            }}
                            className="rounded-[5.02px]"
                          />
                        )}
                        <button
                          onClick={() => {
                            setSelectedFiles((prevFiles) => {
                              const newFiles = [...prevFiles];
                              newFiles.splice(index, 1);
                              return newFiles;
                            });
                          }}
                        >
                          <div className="absolute top-[4px] right-[4px] p-1 rounded-[5px] bg-white">
                            <img src={trash} alt="Delete" />
                          </div>
                        </button>
                      </SwiperSlide>
                    ))}
                    {wowStory.userStory.videos?.map((video, index) => (
                      <SwiperSlide
                        key={index}
                        // className="h-[182px] w-[182px] rounded-xl shadow-md"
                      >
                        <video
                          height="182px"
                          width="182px"
                          controls
                          style={{
                            objectFit: "cover",
                            height: "182px",
                            width: "182px",
                          }}
                          className="rounded-[5.02px]"
                        >
                          <source src={video.videoURL} type={"video"} />
                          Your browser does not support the video tag.
                        </video>

                        <button
                          onClick={() => {
                            deleteVideoFile(video.id);
                          }}
                        >
                          <div className="absolute top-[4px] right-[4px] p-1 rounded-[5px] bg-white">
                            <img src={trash} alt="Delete" />
                          </div>
                        </button>
                      </SwiperSlide>
                    ))}

                    {wowStory.userStory.photos.map((photo, index) => (
                      <SwiperSlide
                        key={index}
                        // className="h-[182px] w-[182px] rounded-xl shadow-md"
                      >
                        <img
                          src={photo.photoURL}
                          alt={"image"}
                          height={"182px"}
                          width={"182px"}
                          style={{
                            objectFit: "cover",
                            height: "182px",
                            width: "182px",
                          }}
                          className="rounded-[5.02px]"
                        />

                        <button
                          onClick={() => {
                            deleteImageFile(photo.id);
                          }}
                        >
                          <div className="absolute top-[4px] right-[4px] p-1 rounded-[5px] bg-white">
                            <img src={trash} alt="Delete" />
                          </div>
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Write your story"
                color="#FAFAFA"
                style={{
                  backgroundColor: "#FAFAFA !important",
                  color: "#FAFAFA !important",
                  // background: "#FAFAFA !important",
                  background: "#FAFAFA",
                }}
                className="w-full focus:outline-none mt-[28px] story-input text-[14px] font-medium text-[#1C1C1C] leading-[20px]"
                rows={10}
              />
            </div>
          )}
          <WriteYourWoWStoryStepChoosePicture
            onTap={() => {
              if (!moveToNextStep) {
                if (
                  selectedFile === null &&
                  wowStory?.userStory?.photoURL === null
                ) {
                  alert("Please upload a photo");
                  return;
                }
                setMoveToNextStep(true);
              } else {
                handleEditStory();
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
      )}
    </div>
  );
};

export default EditYourWoWStory;