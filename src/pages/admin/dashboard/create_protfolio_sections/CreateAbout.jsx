import React, { useEffect, useRef, useState } from "react";
import LoadingComponent from "../../../../utils/loader";
import AllTextFields from "../../utils/AllTextFields";
import { AddPassionDialog, SocialMediaItem } from "../../about/AdminAbout";
import { useSelector } from "react-redux";
import create from "../../../../utils/Theme";
import { errorMessage, successMessage } from "../../../../utils/Toast";
import { Button } from "@material-tailwind/react";
import { createAbout } from "../../../../axios/about";
import { useMutation } from "react-query";
import { getResponseForGivenPrompt } from "../../../../axios/gemini";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import { CustomDialog } from "../../utils/CustomDialog";

const CreateAbout = () => {
  const { createPortfolioData, loading, error } = useSelector(
    (state) => state.aiResponse
  );
  const [about, setAbout] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const theme = create();
  const navigate = useNavigate();

  const lableTextStyle = "text-[#1e1e2f] font-semibold text-[20px]";

  const handleNext = () => {
    if (!updated) {
      setOpenDialog(true);
      return;
    }

    navigate("/create-portfolio/2");
  };

  useEffect(() => {
    if (createPortfolioData) {
      setAbout({
        ...createPortfolioData?.about,
        passion: createPortfolioData?.hobbies ?? [],
      });
      console.log("data", about);
    }
  }, []);

  const [usingAI, setUsingAI] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleGenerateDescriptionFromAI = async (id) => {
    setUsingAI(true);
    const prompt = `Please write a only 500 character professional summary for a user profile that will attract recruiters. The summary should be tailored to highlight key achievements, skills, and experience while maintaining a tone of confidence and professionalism. It should reflect the user's background in the tech industry and showcase their ability to deliver results in software development. Here's the user's profile information. \nwrite as your being user, response should be text format that contain only summary:\n\n ${JSON.stringify(
      createPortfolioData
    )}`;

    await getResponseForGivenPrompt(prompt)
      .then((response) => {
        if (response) {
          setAbout({ ...about, description: response });
        }
        setUsingAI(false);
      })
      .catch((error) => {
        setUsingAI(false);
        errorMessage(error);
      });
  };

  const editAboutMutation = useMutation(() => createAbout(about), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      successMessage("About updated successfully");
      setSubmitLoading(false);
      setUpdated(true);
    },
    onError: (error) => {
      errorMessage(error);
      setSubmitLoading(false);
      setUpdated(true);
    },
  });

  const handleUpdateAbout = async () => {
    console.log("about data ", about);
    setSubmitLoading(true);

    editAboutMutation.mutate();
  };

  const handleFieldChange = (name, val) => {
    setAbout({ ...about, [name]: val });
  };

  const handleSocialMediaChange = (e) => {
    setAbout({
      ...about,
      social_links: { ...about.social_links, [e.target.name]: e.target.value },
    });
  };
  const onPassionSubmit = (val) => {
    if (val == null || val == "") return;

    setAbout({
      ...about,
      passion: [...about.passion, val],
    });
    // navigate(-1);
  };
  return (
    <>
      <div className="flex w-full flex-col justify-start items-end">
        <Button
          className="bg-[#1e1e2f] rounded-[10px] px-5 py-3 text-[#e8e9fa] text-[14px]"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
      <div
        className={`mt-10 overflow-hidden flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[980px] mb-10 `}
      >
        {submitLoading && <LoadingComponent width={100} />}

        <div className="flex flex-col max-w-[100%]">
          <div
            className={`mb-10  ${
              theme.theme == "light" ? "bg-white" : "bg-[#1e1e2f]"
            } py-[38px] px-[25px] rounded-[8px]`}
          >
            <AllTextFields
              title="Title"
              value={about?.title ?? ""}
              name="title"
              onChange={(val) => handleFieldChange("title", val)}
              placeholder="About Title"
            />
            <AllTextFields
              title="About Description"
              textArea={about?.description ?? ""}
              name="description"
              loading={usingAI}
              onUseAI={handleGenerateDescriptionFromAI}
              onChange={(val) => handleFieldChange("description", val)}
              placeholder="About Description"
            />

            {about?.passion && (
              <label
                className={`${lableTextStyle} ${
                  theme.theme !== "light" && "text-[#f1f1f1]"
                } `}
              >
                Passion
              </label>
            )}
            {
              <div className="flex flex-row flex-wrap w-[500px] justify-start items-center mt-5">
                {about?.passion &&
                  about?.passion?.map((item, index) => (
                    <div
                      className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-5 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
           text-[14px]
        "
                    >
                      {item}
                    </div>
                  ))}
                <AddPassionDialog onSubmit={onPassionSubmit} />
              </div>
            }
          </div>
          <div className="flex flex-row justify-end items-center">
            <Button
              className="bg-[#1e1e2f] rounded-[10px] px-5 py-3 text-[#e8e9fa] text-[14px]
         hover:bg-[#e8e9fa] hover:text-[#1e1e2f] cursor-pointer"
              onClick={handleUpdateAbout}
            >
              Update
            </Button>
          </div>
        </div>

        <div
          className={`w-[400px] mb-10 ${
            theme.theme == "light" ? "bg-white" : "bg-[#1e1e2f]"
          } py-[38px] px-[25px] rounded-[8px]`}
        >
          <div className="flex flex-col justify-start items-start">
            <label
              className={`${lableTextStyle}  ${
                theme.theme !== "light" && "text-[#f1f1f1]"
              } `}
            >
              Social Media
            </label>
            <div className="flex flex-row flex-wrap w-full justify-start items-center mt-5">
              <SocialMediaItem
                title="Facebook"
                name="facebook"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.facebook}
                placeholder="Facebook"
              />
              <SocialMediaItem
                title="Twitter"
                name="twitter"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.twitter}
                placeholder="Twitter"
              />
              <SocialMediaItem
                title="Instagram"
                name="instagram"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.instagram}
                placeholder="Instagram"
              />
              <SocialMediaItem
                title="LinkedIn"
                name="linkedin"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.linkedin}
                placeholder="LinkedIn"
              />
              <SocialMediaItem
                title="GitHub"
                name="github"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.github}
                placeholder="GitHub"
              />
              <SocialMediaItem
                title="StackOverflow"
                name="stackoverflow"
                onChange={handleSocialMediaChange}
                value={about?.social_links?.stackoverflow}
                placeholder="StackOverflow"
              />

              {about?.social_links?.others?.map((item, index) => (
                <SocialMediaItem
                  title={item?.title}
                  name={item?.name}
                  onChange={handleSocialMediaChange}
                  value={item?.link}
                  placeholder={item?.title}
                />
              ))}
            </div>
          </div>
        </div>
        {openDialog && (
          <CustomDialog
            open={openDialog}
            onSubmit={() => {
              setOpenDialog(false);
              navigate("/create-portfolio/2");
            }}
            cancel={setOpenDialog}
            text="You have not updated the about section. Are you sure you want to continue?"
          />
        )}
      </div>
    </>
  );
};

export default CreateAbout;
