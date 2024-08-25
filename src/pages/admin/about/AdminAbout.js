import { React, useEffect, useState } from "react";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { Mutation, useMutation, useQuery } from "react-query";
import { getAdminAbout, updateAbout } from "../../../axios/about";
import create from "../../../utils/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import AddNew from "../utils/AddNew";
import AllTextFields from "../utils/AllTextFields";
import LoadingComponent from "../../../utils/loader";
import { getResponseForGivenPrompt } from "../../../axios/gemini";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[20px]";

export const AboutItem = ({
  title,
  value,
  placeholder,
  textArea = null,
  onChange,
  name,
}) => {
  const theme = create();
  return (
    <div className="flex flex-col justify-start items-start mb-10">
      <label
        className={` ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[14px]`}
      >
        {title}
      </label>
      {value !== null && textArea === null && (
        <input
          type="text"
          name={name}
          onChange={(e) => onChange(e)}
          className={`w-full h-[50px] rounded-[10px] border-[1px] w-[500px] border-[#e8e9fa] outline-none px-4 text-[13px] py-2 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={value}
        />
      )}
      {textArea && (
        <textarea
          type="text"
          rows={6}
          name={name}
          onChange={(e) => onChange(e)}
          className={`w-full rounded-[10px] border-[1px] w-[500px] border-[#e8e9fa] outline-none px-4 py-2 mt-2 text-[13px] ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={textArea}
        />
      )}
    </div>
  );
};

export const SocialMediaItem = ({
  title,
  value,
  placeholder,
  onChange,
  name,
}) => {
  const theme = create();
  return (
    <div className="flex flex-col mb-5 w-full">
      <label
        className={`font-normal text-[12px] ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } `}
      >
        {title} <span className="text-[#ff0000db]">*</span>
      </label>
      <input
        type="text"
        name={name}
        onChange={(e) => onChange(e)}
        className="w-full h-[40px] rounded-[10px] border-[1px] border-[#e8e9fa] outline-none px-4 py-2 mt-2 ::placeholder text-[#1e1e2f] font-normal text-[12px] "
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export function AddPassionDialog({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [passion, setPassion] = useState("");

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-5 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[14px] hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-black hover:border-[#1e1e2f] border-[1px] border-[#e8e9fa] hover:bg-transparent
              "
        onClick={handleOpen}
      >
        Add Passion <FontAwesomeIcon className="ml-2" icon={faPlus} />
      </Button>

      <AddNew
        open={open}
        cancel={() => {
          handleOpen(false);
        }}
        title={"Add New Project"}
        onSubmit={() => {
          onSubmit(passion);
          handleOpen(false);
        }}
        body={
          <div className="mt-2">
            {/* <AboutItem
              isFullWidth={true}
              title="Title"
              classs={"text-gray-500 flex-col w-full"}
              value={""}
              placeholder="Enter project title"
            /> */}
            <AllTextFields
              title="Add Passion"
              value={passion}
              name="passion"
              onChange={(val) => {
                setPassion(val);
              }}
              placeholder="Singing"
            />
          </div>
        }
      />
    </>
  );
}

function AdminAbout() {
  const theme = create();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { data: projectsData, refetch: refetchProjects } = useQuery(
    "getAdminAbout",
    () => getAdminAbout(),
    {
      retry: 1,
      retryDelay: 1,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setAbout(data.data?.data);
        setLoading(false);
      },
      onError: (error) => {
        setLoading(false);
      },
    }
  );

  const [about, setAbout] = useState({});

  const handleFieldChange = (e) => {
    setAbout({ ...about, [e.target.name]: e.target.value });
  };

  const handleSocialMediaChange = (e) => {
    setAbout({
      ...about,
      social_links: { ...about.social_links, [e.target.name]: e.target.value },
    });
  };

  const editMutation = useMutation(() => updateAbout(about), {
    onSuccess: (data) => {
      // setAbout(data.data?.data);
      refetchProjects();
      successMessage("About Updated Successfully");
    },
    onError: (error) => {
      errorMessage(error);
    },
  });

  const handleUpdate = () => {
    console.log("about data ", about);
    editMutation.mutate();
  };

  const handleAboutGenerateDescriptionFromAI = async (id) => {
    const userData = {
      name: about?.user?.firstName + " " + about?.user?.lastName,
      title: about?.title,
      passion: about?.passion,
      career: about?.career,
    };
    const prompt = `considering you are ${
      userData.name
    } Create only 500 character professional description for portfolio that attracts recruiters for yourself. \n\nhere's my details:\n\n ${JSON.stringify(
      userData
    )}`;

    const response = await getResponseForGivenPrompt(prompt);
    if (response) {
      setAbout({ ...about, description: response });
    }
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
    <WrapperContent title="About">
      <div
        className={`mt-10 overflow-hidden flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[980px] mb-10 `}
      >
        {loading && <LoadingComponent width={100} />}
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
              onChange={(val) => {
                setAbout({ ...about, title: val });
              }}
              placeholder="About Title"
            />
            <AllTextFields
              title="About Description"
              textArea={about?.description ?? ""}
              name="description"
              onChange={handleFieldChange}
              placeholder="About Description"
              onUseAI={handleAboutGenerateDescriptionFromAI}
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
              onClick={handleUpdate}
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
      </div>
    </WrapperContent>
  );
}

export default AdminAbout;
