import { React, useEffect, useState } from "react";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { useMutation, useQuery } from "react-query";
import { dashboard } from "../../../axios/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEye,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import pdfToText from "react-pdftotext";
import { getResponseForGivenPrompt } from "../../../axios/gemini";
import AddNew from "../utils/AddNew";
import create from "../../../utils/Theme";
import { useWindowWide } from "../utils/useWindowWide";
import { createAbout } from "../../../axios/about";
import { Axios } from "../../../axios/axios";
import { getToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setError,
  setResponseData,
  setSkillsData,
} from "../../../redux/admin/CreatePortfolio";
import LoadingComponent from "../../../utils/loader";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjs;
export const DashboardDetails = ({
  icon,
  title,
  subTitle,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <div
      className={`flex mr-6   ${
        primaryColor && primaryColor
      }  mb-5 rounded-[5px] justify-start items-center`}
    >
      {/* <div className="flex h-full flex-row justify-start items-center"> */}
      <div
        className={`px-5 py-5  ${
          secondaryColor && secondaryColor
        } rounded-tl-[5px] rounded-full rounded-bl-[5px]`}
      >
        <FontAwesomeIcon icon={icon} className="text-white text-[25px]" />
      </div>
      <div className="flex flex-col justify-start items-start pr-5 h-full">
        <p className="text-[28px] text-white font-bold ml-[10px]">
          {title != null ? title : 0}
        </p>
        <p className="text-[14px] text-white font-semibold ml-[10px]">
          {subTitle}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

const DynamicForm = ({
  data,
  title,
  isList = false,
  currIndex,
  loading,
  changeIndex,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(data);
  const theme = create();

  const handleChange = (e, path) => {
    const { name, value } = e.target;
    const keys = path.split(".");
    const newFormData = { ...formData };
    let temp = newFormData;

    for (let i = 0; i < keys.length - 1; i++) {
      temp = temp[keys[i]];
    }

    temp[keys[keys.length - 1]] = value;

    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const [inputFields, setInputFields] = useState("");

  const renderListFileds = (arr, path = "") => {
    return (
      <>
        <label
          className={` ${
            theme.theme === "light" && "text-[#1e1e2f]"
          } font-semibold text-[14px]`}
        >
          {title}
        </label>
        <div className="flex flex-row w-full justify-start items-center mt-5">
          <input
            type="text"
            className={`h-[45px] flex-auto rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
              theme.theme !== "light" && "text-[#1e1e2f]"
            }`}
            onChange={(e) => {
              // setHighlight(e.target.value);
            }}
            placeholder={
              ""
              // highlightList?.length > 2
              //   ? "Highlights can be Max 3"
              //   : "Python"
            }
            value={inputFields}
          />
          <button
            // disabled={highlightList?.length > 2}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => {}}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap mt-4">
          {data?.length > 0 &&
            data.map((item, index) => (
              <div
                className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-[12px] px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
              >
                {item}
                <div
                  className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                  onClick={() => {
                    // setHighlightList(
                    //   highlightList.filter((tag) => tag !== item)
                    // );
                  }}
                >
                  <FontAwesomeIcon className="" icon={faClose} />
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };

  const renderInputFields = (obj, path = "") => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      const fullPath = path ? `${path}.${key}` : key;

      if (
        (typeof value === "object" && value !== null) ||
        Array.isArray(value)
      ) {
        return (
          <div key={fullPath} style={{ marginLeft: "20px" }}>
            {fullPath == "" && (
              <label
                className="text-[16px] mb-[20px] font-semibold text-[#f1f1f1]
            "
              >
                {title.toUpperCase()}
              </label>
            )}
            {!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
              key
            ) &&
              value.length > 0 && (
                <label
                  className="text-[16px] mb-[20px] font-semibold text-[#f1f1f1]
            "
                >
                  {key.toUpperCase()}
                </label>
              )}
            {renderInputFields(value, fullPath)}
          </div>
        );
      } else {
        return (
          <div
            key={fullPath}
            className="flex flex-col mb-5 justify-start items-start"
            style={{ marginLeft: "20px" }}
          >
            <label>{key[0].toUpperCase() + key.slice(1)} </label>
            <input
              type="text"
              name={key}
              className={`h-[45px] w-full mb-5 rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
                theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
              } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
              value={value || ""}
              onChange={(e) => handleChange(e, fullPath)}
            />
          </div>
        );
      }
    });
  };

  return (
    <form>
      {isList ? renderListFileds(formData) : renderInputFields(formData)}
      <div className="flex mb-5 justify-between">
        <button>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              if (currIndex > 0) {
                changeIndex(currIndex - 1);
              }
            }}
            className="text-white"
          />
        </button>
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-7 rounded-[12px]"
        >
          {loading ? "Loading..." : "Save & Next"}
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={handleSubmit}
            className="text-white ml-2"
          />
        </button>
      </div>
    </form>
  );
};

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({});
  const [resumeTextData, setResumeTextData] = useState("");
  const [extractedJson, setExtractedJson] = useState(null);
  const [loading, setLoading] = useState(false);
  const smallScreen = useWindowWide(640);

  const handleGetSkills = async (text) => {
    try {
      const prompt = `
I have provided my resume below. Please extract and format the information as a JSON object. Here's an dummy example structure: please return the data in json format only. add as much skill possible and skill is in captalized form.

{
    "skills": [
    {
      "skills": [
        {
          "skillCategory": "Frontend",
          "skill": {
            "name": "React Js"
          }
        },
        {
          "skillCategory": "Backend",
          "skill": {
            "name": "Node Js"
          }
        }
      ],
      "category": "Frontend"
    }
  ]
}

Here is the resume text: ${text} \n strictly Ensure data is in Proper json format.
`;

      const response = await getResponseForGivenPrompt(prompt);
      if (response) {
        console.log("Response from GPT-3: ", response);

        const startIdx = response.indexOf("{");
        const endIdx = response.lastIndexOf("}");
        const extractedJson = response.slice(startIdx, endIdx + 1);
        console.log("Extracted JSON: ", startIdx, endIdx, extractedJson);
        const jsonData = JSON.parse(extractedJson);

        console.log("data after json : ", jsonData);
        dispatch(setSkillsData(jsonData));
      }
    } catch (e) {
      console.log(e);
      dispatch(setError(e.message));
    } finally {
      setLoading(false);
      dispatch(setLoading(false));
    }
  };

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }
    setLoading(true);
    try {
      pdfToText(file).then(async (text) => {
        const prompt = `
I have provided my resume below. Please extract and format the information as a JSON object. Here's an dummy example structure: please return the data in json fomrat only. in experience if present then make current true and else assign end date to to key. skill is in captalized form. Ensure data is in Proper json format. add as much data possible.

{
  "about": {
    "name": "Vikram Negi",
    "email": "vikramnegi175@gmail.com",
    "location": "New Delhi, India",
    "social_links": {
      "linkedin": "https://www.linkedin.com/in/vikramnegi1/",
      "twitter": "https://twitter.com/viki_2024"
    },
    "description": "I'm a skilled Software Engineer with expertise in Flutter, web development, databases, and machine learning."
  },
  "education": [
    {
      "degree": "Bachelor of Information Technology",
      "institution": "Dr. A.P.J. Abdul Kalam Technical University",
      "year": "2024"
    }
  ],
  "experience": [
    {
      "title": "Flutter Developer",
      "company": "Koshiqa",
      "location": "Remote",
      "from": "2024-01-01T00:00:00.000Z",
                      "current": true,
      "description": "Focused on Flutter-based app development and feature implementation.",
      "skills": ["Flutter", "Rest APIs", "Node.js"],
      "highlights": [
        "Led the design and implementation of new features based on business requirements."
      ]
    }
  ],
  
  "projects" : [
      {
        "name": "BookMark",
        "title": "BookMark - Let's make book non disposable",
        "description":
          "BookMark is not just an application; it's a movement to redefine our relationship with books. In a world of disposables, ",
        "level": "Advanced",
        "order": 2,
        "tags": [
          "Python",
          "Flutter",
          "MongoDB",
          "Node.js",
          "Express",
          "Django",
          "Machine Learning",
          "sqlite"
        ],
        "skillsUsed": [
          "Python",
          "Flutter",
          "MongoDB",
          "Node.js",
          "Express",
          "Machine Learning",
          "Django",
          "sqlite"
        ]
      }
    ],
  "achievements": ["Built 5+ cross-platform mobile apps", "Reduced API response time by 40%"],
  "responsibilities": ["Lead design", "Implement features", "Debug and resolve software defects"],
  "hobbies": ["Coding", "Singing"]
}

Here is the resume text: ${text}
`;
        handleGetSkills(text);
        const response = await getResponseForGivenPrompt(prompt);
        if (response) {
          console.log("Response from GPT-3: ", response);
          setResumeTextData(response);
          handleExtractJson(response);
        }
      });
    } catch (e) {
      console.log(e);
      dispatch(setError(e.message));
    } finally {
      setLoading(false);
      dispatch(setLoading(false));
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExtractJson = (text) => {
    const startIdx = text.indexOf("{");
    const endIdx = text.lastIndexOf("}");
    const extractedJson = text.slice(startIdx, endIdx + 1);
    console.log("Extracted JSON: ", extractedJson);
    const jsonData = JSON.parse(extractedJson);

    setExtractedJson(jsonData);
    dispatch(setResponseData(jsonData));
    navigate("/admin/create-portfolio/1");
  };

  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);

  return (
    <WrapperContent title="Dashboard">
      {loading && <LoadingComponent width={100} />}
      <div className={`${smallScreen && "px-10"}  flex flex-col w-full`}>
        <div className=" flex flex-wrap justify-start items-start">
          <DashboardDetails
            icon={faMagnifyingGlass}
            subTitle="Total Portfolio views"
            title={dashboardData?.totalUpdatesTillNow}
            primaryColor="bg-[#7266BA]"
            secondaryColor="bg-[#675CA8]"
          />
          <DashboardDetails
            icon={faEye}
            subTitle="Total Portfolio views, this week"
            title={dashboardData?.totalUpdatesThisWeek}
            primaryColor="bg-[#42A5F6]"
            secondaryColor="bg-[#3C94DC]"
          />
        </div>
        {extractedJson && (
          <button
            className="mt-10"
            onClick={() => {
              // setOpenAddProjectModel(true);
            }}
          >
            Develop Resume
          </button>
        )}

        <div class="my-auto mt-10 flex font-sans text-gray-900 items-center  border-box">
          <div class="flex justify-center w-full mx-auto sm:max-w-lg">
            <div class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-4/4 sm:rounded-lg sm:shadow-xl">
              <div class="mt-10 mb-10 text-center">
                <h2 class="text-3xl font-semibold mb-2">Upload your files</h2>
                <p class="text-2xs text-gray-500">
                  File should be of format .pdf
                </p>
              </div>
              <form
                action="#"
                class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
              >
                <input
                  type="file"
                  id="file-upload"
                  class="hidden"
                  onChange={handleResumeUpload}
                />
                <label
                  for="file-upload"
                  class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                >
                  <p class="z-10 text-[14px] font-light text-center text-gray-500">
                    Drag & Drop your files here
                  </p>
                  <svg
                    class="z-10 w-12 h-12 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                  </svg>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <AddNew
        open={openAddProjectModel}
        cross={() => {
          setOpenAddProjectModel(false);
        }}
        title={"Develop Portfolio"}
        body={
          <div>
            {
              // <DynamicForm data={dummy.about} />

              <div>
                {currIndex === 0 && (
                  <DynamicForm
                    data={extractedJson?.about}
                    title={"About"}
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                    onSubmit={handleUpdateAbout}
                  />
                )}
                {currIndex === 1 && (
                  <DynamicForm
                    data={extractedJson?.education}
                    title="Education"
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                  />
                )}
                {currIndex === 2 && (
                  <DynamicForm
                    data={extractedJson?.experience}
                    title="Experience"
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                  />
                )}
                {currIndex === 3 && (
                  <DynamicForm
                    data={extractedJson?.skills}
                    title="Skills"
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                    isList={true}
                  />
                )}
                {currIndex === 4 && (
                  <DynamicForm
                    data={extractedJson?.achievements}
                    title="Achievements"
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                    isList={true}
                  />
                )}
                {currIndex === 5 && (
                  <DynamicForm
                    data={extractedJson?.responsibilities}
                    title="Responsibilities"
                    isList={true}
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                  />
                )}
                {currIndex === 6 && (
                  <DynamicForm
                    data={extractedJson?.hobbies}
                    title={"Hobbies"}
                    isList={true}
                    currIndex={currIndex}
                    changeIndex={(index) => {
                      setCurrIndex(index);
                    }}
                    loding={loading}
                  />
                )}
              </div>
            }
          </div>
        }
      /> */}
    </WrapperContent>
  );
}

export default Dashboard;

const dummy = {
  about: {
    name: "VIKRAM NEGI",
    email: "vikramnegi175@gmail.com",
    location: "New Delhi, Delhi",
    social_links: {
      linkedin: "https://www.linkedin.com/in/vikramnegi1/",
      twitter: "https://twitter.com/viki_2024",
    },
    description: null,
  },
  education: [
    {
      degree: "Bachelor of Technology (Information Technology)",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      year: "June 2024",
    },
  ],
  experience: [
    {
      title: "Software Developer",
      company: "Koshiqa",
      location: "Guragaon, Haryana",
      from: "January 2024",
      to: "Present",
      description:
        "- Spearheaded development of the Koshiqa app, scaling to 10k+ users\n- Engineered comprehensive E-commerce and Profile sections, enhancing user experience.\n- Leveraged advanced techniques including Isolates, Generics, sophisticated error handling, etc.",
      skills: [],
      highlights: [],
    },
    {
      title: "Flutter Developer",
      company: "Employee Forums",
      location: "Mumbai, Maharashtra",
      from: "March 2023",
      to: "January 2024",
      description:
        "- Architected Employee Forums app, reducing size by 50% and transitioning to Bloc architecture.\n- Led design and implementation of 10+ features, resolving 200+ bugs for a high-quality application.\n- Integrated 300+ APIs, boosting app performance by 70%.",
      skills: [],
      highlights: [],
    },
    {
      title: "Software Developer",
      company: "NeonFlake",
      location: "Remote",
      from: "January 2022",
      to: "February 2023",
      description:
        "- Delivered over 6 cross-platform mobile and 3 web projects, ensuring adherence to design specifications.\n- Integrated, developed, and deployed 500+ APIs, resulting in a 40% reduction in API response time.\n- Integrated Google Maps, language localization, payment gateway, and local data storage, like 10+ SDK’s.",
      skills: [],
      highlights: [],
    },
  ],
  skills: [
    "C++",
    "C",
    "Dart",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Flutter",
    "Django",
    "NodeJs",
    "React Native",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Getx",
    "Bloc",
    "Mobx",
    "Provider",
    "Pandas",
    "Matplotlib",
    "Numpy",
    "React Js",
    "Express",
  ],
  achievements: [
    "Built 5+ cross-platform mobile apps",
    "Reduced API response time by 40%",
  ],
  responsibilities: [
    "Lead design",
    "Implement features",
    "Debug and resolve software defects",
  ],
  hobbies: ["Coding", "Singing"],
};

const tempTT = () => {
  // setOpenAddProjectModel(true);
  // console.log("Resume Text: ", dummy);
  // handleExtractJson(resumeTextData);
};
