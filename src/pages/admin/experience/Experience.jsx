import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { getAdminExperience, addExperience } from "../../../axios/experience";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parse, format } from "date-fns";

import {
  faPhone,
  faPlus,
  faClose,
  faTrash,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import create from "../../../utils/Theme";
import DateTimeFormatter from "../../../utils/dateTime_functionality";
import { useWindowWide } from "../utils/useWindowWide";
import AdminProject from "../project/AdminProjects";
import AddNew from "../utils/AddNew";
import AllTextFields from "../utils/AllTextFields";
import LoadingComponent from "../../../utils/loader";
import { getResponseForGivenPrompt } from "../../../axios/gemini";
import { EditorContent } from "@tiptap/react";
import CustomEditor from "../../../utils/editor";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import pencilIcon from "../../../assets/svg/pencil-square.svg";
import { CustomDialog } from "../utils/CustomDialog";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

const ExperienceItem = ({ experience, handleEdit, handleDelete }) => {
  const theme = create();
  return (
    <tr key={experience._id}>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.title}
          onChange={(e) => handleEdit(experience._id, "title", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.company}
          onChange={(e) =>
            handleEdit(experience._id, "company", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="text"
          value={experience.location}
          onChange={(e) =>
            handleEdit(experience._id, "location", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={experience.from}
          onChange={(e) => handleEdit(experience._id, "from", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="date"
          value={experience.to}
          onChange={(e) => handleEdit(experience._id, "to", e.target.value)}
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <input
          type="checkbox"
          checked={experience.current}
          onChange={(e) =>
            handleEdit(experience._id, "current", e.target.checked)
          }
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.description}
          onChange={(e) =>
            handleEdit(experience._id, "description", e.target.value)
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.skills.join(", ")}
          onChange={(e) =>
            handleEdit(experience._id, "skills", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <textarea
          value={experience.highlights.join(", ")}
          onChange={(e) =>
            handleEdit(experience._id, "highlights", e.target.value.split(", "))
          }
          className="w-full"
        />
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(experience._id)}
        >
          Save
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(experience._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export const AdmivExperienceItem = ({
  title,
  value,
  placeholder,
  textArea,
  lines,
  classs,
  isCheckBox = false,
  size,
}) => {
  const theme = create();
  return (
    <div
      className={`flex w-full ${
        isCheckBox === true ? "flex-row" : "flex-col"
      } justify-start items-start mb-10 ${classs}`}
    >
      <label
        className={` ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[14px]`}
      >
        {title}
      </label>

      {(value || value == "") && (
        <input
          type={isCheckBox ? "checkbox" : "text"}
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={value}
        />
      )}
      {textArea && (
        <textarea
          type="text"
          rows={lines || 6}
          className={`w-full rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
            theme.theme !== "light" && "text-[#1e1e2f]"
          } `}
          placeholder={placeholder}
          value={textArea}
        />
      )}
    </div>
  );
};

function AdminExperience({ isFromCreateProtfolio = false }) {
  const theme = create();
  const [loading, setLoading] = useState(true);
  const { createPortfolioData } = useSelector((state) => state.aiResponse);

  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (createPortfolioData) {
      setExperiences(createPortfolioData?.experience);
      console.log("experience", experiences);
    }
  }, []);

  const { data, isLoading, isSuccess, isError, error } = useQuery(
    "exp",
    () => getAdminExperience(),
    {
      retry: 1,
      retryDelay: 1,
      onError: (error) => {
        errorMessage(error?.response?.data?.message);
        setLoading(false);
      },
      onSuccess: (data) => {
        setLoading(false);
        if (isFromCreateProtfolio) return;
        console.log(data.data?.data?.experiences);
        setExperiences(data?.data?.data);
      },
    }
  );

  const [experiences, setExperiences] = useState([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [JoiningFrom, setJoiningFrom] = useState("");
  const [joiningTo, setJoiningTo] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [description, setDescription] = useState("Enter Text...");
  const [highlightList, setHighlightList] = useState([]);
  const [highlight, setHighlight] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [skill, setSkill] = useState("");
  const [editHigtlightIndex, setEditHighlightIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [updated, setUpdated] = useState(false);

  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);

  const addExpMutation = useMutation((data) => addExperience(data), {
    onSuccess: (data) => {
      console.log(data);
      successMessage("Experience Added Successfully");
      setUpdated(true);
    },
    onError: (error) => {
      console.log(error);
      errorMessage(error?.response?.data?.message || "Something went wrong");
    },
  });

  const handleEdit = (id, field, value) => {
    const updatedExperiences = experiences.map((experience) => {
      if (experience._id === id) {
        return { ...experience, [field]: value };
      }
      return experience;
    });
    setExperiences(updatedExperiences);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/experiences/${id}`);
    const updatedExperiences = experiences.filter(
      (experience) => experience._id !== id
    );
    setExperiences(updatedExperiences);
  };

  const handleGenerateDescriptionFromAI = async (id) => {
    var errorMsg = "";
    if (title === "") {
      errorMsg = "Title is required";
    } else if (company === "") {
      errorMsg = "Company is required";
    } else if (location === "") {
      errorMsg = "Location is required";
    } else if (JoiningFrom === "") {
      errorMsg = "Joining From is required";
    } else if (skillList.length === 0) {
      errorMsg = "Skills are required";
    }
    if (errorMsg !== "") {
      errorMessage(errorMsg);
      return;
    }
    const prompt =
      "Create a 1000-character point-wise description of a software engineer's experience at Acme Corporation, focusing on the key responsibilities and achievements outlined in the provided payload. Include 3 main highlights from the experience.";
    var payload = {
      job_title: title,
      company_name: company,
      location: location,
      start_date: JoiningFrom,

      skills_used: skillList,
      highlight_and_achievements: highlightList,
    };
    if (joiningTo != null) {
      payload["end_date"] = joiningTo;
    } else {
      payload["currentlyWorking"] = true;
    }
    const data =
      prompt + "Here's is the data in json format" + JSON.stringify(payload);
    const response = await getResponseForGivenPrompt(data);
    if (response) {
      handleEdit(id, "description", response);
      setDescription(response);
    }
  };

  const width425 = useWindowWide(480);

  const addSkills = (skill) => {
    setSkill("");
    if (skillList.includes(skill) || skill === "") {
      return;
    }
    setSkillList([...skillList, skill]);
  };

  const addHighlight = (highligh) => {
    setHighlight("");
    if (highlightList.includes(highligh) || highligh === "") {
      return;
    }
    setHighlightList([...highlightList, highligh]);
  };

  const saveExperience = async () => {
    const data = {
      title,
      company,
      location,
      from: JoiningFrom,
      to: joiningTo,
      current: currentlyWorking,
      description,
      skills: skillList,
      highlights: highlightList,
    };

    addExpMutation.mutate(data);
  };

  function correctDateFormat(dateString) {
    const possibleFormats = [
      "yyyy-MM-dd", // 2024-01-07
      "MM/dd/yyyy", // 01/07/2024
      "dd-MM-yyyy", // 07-01-2024
      "MMMM dd, yyyy", // January 07, 2024
      "MMM yyyy", // Jan 2024
      "MMMM yyyy", // January 2024
      "dd MMM yyyy", // 07 Jan 2024
      "MM-dd-yy", // 01-07-24
      "MM/dd/yy", // 01/07/24
      "yy-MM-dd", // 24-01-07
      "yyyy/MM/dd", // 2024/01/07
      "yyyy.MM.dd", // 2024.01.07
      "dd MMMM yyyy", // 07 January 2024
      "MMMM dd", // January 07
      "MMM dd, yyyy", // Jan 07, 2024
    ];

    for (let formatString of possibleFormats) {
      try {
        const parsedDate = parse(dateString, formatString, new Date());

        if (!isNaN(parsedDate)) {
          // Successfully parsed, format it to YYYY-MM-DD
          return format(parsedDate, "yyyy-MM-dd");
        }
      } catch (error) {
        // Continue to the next format if this one fails
        continue;
      }
    }
    return dateString;
  }

  const handleEditing = (index, field, value) => {
    const tempData = [...experiences];
    tempData[index] = { ...tempData[index], [field]: value };
    setExperiences(tempData);
  };

  const handleAddAllExperience = async () => {
    var tempData = [];

    for (let exp of experiences) {
      console.log(exp);
      let expp = exp;

      if (exp?.to?.toLowerCase() == "present" || exp?.to == null) {
        expp = {
          ...exp,
          current: true,
          from: correctDateFormat(exp.from),
        };
        delete expp.to;
      } else {
        expp = {
          ...exp,
          from: correctDateFormat(exp.from),
          to: correctDateFormat(exp.to),
        };
      }
      // if (expp.skills.length == 0) {
      //   expp = { ...expp, skills: ["HTML"] };
      // }
      // if (expp.highlights.length == 0) {
      //   expp = { ...expp, highlights: ["Developed a website"] };
      // }
      tempData.push(expp);
    }

    for (let i = 0; i < tempData.length; i++) {
      addExpMutation.mutate(tempData[i]);
    }
  };
  const navigate = useNavigate();
  const handleNext = () => {
    if (!updated) {
      setOpenDialog(true);
      return;
    }
    navigate("/create-portfolio/3");
  };

  const handleModifyHighlight = (index, value, forAdd = true, editIdx) => {
    var tempData = [...experiences];
    if (value == "") {
      errorMessage("Highlight cannot be empty");
      return;
    }
    if (forAdd) {
      if (tempData[index].highlights.includes(value)) {
        errorMessage("Highlight already exists");
        return;
      }
      tempData = tempData.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            highlights:
              editIdx == null
                ? [...item.highlights, value]
                : item.highlights.map((highlight, i) => {
                    if (i === editIdx) {
                      return value;
                    }
                    return highlight;
                  }),
          };
        }
        return item;
      });
    } else {
      tempData = tempData.map((item, idx) => {
        console.log(`highlights : ${item.highlights}`);
        if (idx === index) {
          return {
            ...item,
            highlights: item.highlights.filter((highlight, i) => editIdx !== i),
          };
        }
        return item;
      });
    }
    setExperiences(tempData);
  };

  const handleModifySkill = (index, value, forAdd = true) => {
    var tempData = [...experiences];
    if (value == "") {
      errorMessage("Skill cannot be empty");
      return;
    }
    if (forAdd) {
      if (tempData[index].skills.includes(value)) {
        errorMessage("Skill already exists");
        return;
      }
      tempData = tempData.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            skills: [...item.skills, value],
          };
        }
        return item;
      });
    } else {
      console.log(`skills : ${tempData[index].skills}`);
      tempData = tempData.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            skills: item.skills.filter((skill) => skill !== value),
          };
        }
        return item;
      });
    }
    setExperiences(tempData);
  };

  return (
    <WrapperContent title="Experience">
      <div
        className={`flex flex-wrap flex-row justify-between items-center mx-auto w-full max-w-[950px]  rounded-[8px] py-1 mb-5`}
      >
        <p className="px-10 text-[20px]">Experience</p>
        <div className="bg-white-500 flex gap-x-5">
          {isFromCreateProtfolio && (
            <div className="flex w-full flex-col justify-start items-end">
              <Button
                className="bg-[#1e1e2f] rounded-[4px] px-8 py-4 text-[#e8e9fa] text-[12px]"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          )}
          {isFromCreateProtfolio && !updated && (
            <button
              className="flex justify-center
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f] w-full font-semiblod text-[12px] py-4 px-4 rounded-[4px] mr-5"
              onClick={handleAddAllExperience}
            >
              <FontAwesomeIcon className="mr-2" icon={faCheckCircle} />
              Add All
            </button>
          )}
          <button
            className="hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f] font-semiblod text-[12px]  rounded-full p-2"
            onClick={() => {
              setOpenAddProjectModel(true);
            }}
          >
            <FontAwesomeIcon
              className={`p-0 h-8 w-8 m-0 ${
                theme.theme == "light" ? "text-black" : "text-white"
              }`}
              icon={faPlus}
            />
          </button>
        </div>
      </div>
      {loading && <LoadingComponent width={100} />}
      {experiences?.length == 0 && !loading && (
        <div>
          <p>No Experience Found</p>
        </div>
      )}

      {experiences?.length > 0 &&
        experiences.map((experience, index) => (
          <div className=" mx-auto mb-10 max-w-[1000px] rounded-[10px]  p-10">
            <div
              className={`flex flex-wrap flex-row justify-between items-start mx-auto w-full  gap-x-10 `}
            >
              <div
                className={` ${
                  theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"
                } py-[38px] px-[25px] rounded-[8px]  ${
                  width425 ? "w-[450px]" : "w-full"
                } flex flex-col justify-start items-center`}
              >
                <AllTextFields
                  title="Title"
                  name={"title"}
                  value={experience?.title}
                  placeholder="About Title"
                  onChange={(val) => handleEditing(index, "title", val)}
                />
                <AllTextFields
                  title="Company"
                  name={"company"}
                  onChange={(val) => handleEditing(index, "company", val)}
                  value={experience?.company}
                  placeholder="About Company"
                />
                <AllTextFields
                  title="Location"
                  value={experience?.location}
                  name={"location"}
                  onChange={(val) => handleEditing(index, "location", val)}
                  placeholder="About Location"
                />
                <div className="flex w-full gap-10 justify-start items-center ">
                  <AllTextFields
                    title="Joining From"
                    name={"from"}
                    onChange={(val) => handleEditing(index, "from", val)}
                    value={DateTimeFormatter.getFormattedDate(experience?.from)}
                    placeholder="About Location"
                  />
                  {experience?.current !== true && experience?.to !== null && (
                    <AllTextFields
                      classs="ml-5"
                      title="End Date"
                      name={"to"}
                      onChange={(val) => handleEditing(index, "to", val)}
                      value={
                        experience?.to &&
                        DateTimeFormatter.getFormattedDate(experience?.to)
                      }
                      placeholder="About Location"
                    />
                  )}
                </div>

                <AllTextFields
                  title="Current Working"
                  isCheckBox={true}
                  size={"12px"}
                  classs={"w-full items-start"}
                  name={"current"}
                  onChange={(val) => {
                    console.log(`current : ${val} & ${typeof val}`);
                    handleEditing(
                      index,
                      "current",
                      experience?.current === true ? false : true
                    );
                  }}
                  isFullWidth={false}
                  checked={experience?.current === true}
                  value={experience?.current}
                  // placeholder="About Location"
                />

                <AllTextFields
                  title="About Description"
                  lines={10}
                  name={"description"}
                  onChange={(val) => handleEditing(index, "description", val)}
                  textArea={experience?.description}
                  placeholder="About Description"
                />
              </div>

              <div
                className={`${width425 ? "w-[450px]" : "w-full"}  ${
                  theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"
                } py-[38px] px-[25px] rounded-[8px] `}
              >
                <div className="flex flex-col justify-start items-start">
                  <div className=" w-full">
                    <label
                      className={`${lableTextStyle} flex gap-x-5 items-center ${
                        theme.theme !== "light" && "text-[#f1f1f1]"
                      } `}
                    >
                      Highlights & Achievements{" "}
                    </label>

                    {experience.highlights?.map((item, i) => (
                      <div className="flex w-full gap-x-5 justify-start items-start">
                        <AllTextFields
                          lines={3}
                          classs={"mb-0"}
                          textArea={item}
                          placeholder={`Highlights ${i + 1}`}
                        />
                        <div className="flex flex-col gap-y-5 justify-start items-center">
                          <img
                            src={pencilIcon}
                            onClick={() => {
                              setHighlight(item);
                              setEditHighlightIndex(i);
                            }}
                            className={`h-12 w-12 cursor-pointer rounded-xl p-1 ${
                              theme.theme == "light"
                                ? "hover:bg-gray-300"
                                : "hover:bg-gray-300"
                            }`}
                          />
                          <div
                            className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                            onClick={() =>
                              handleModifyHighlight(index, item, false, i)
                            }
                          >
                            <FontAwesomeIcon className="" icon={faClose} />
                          </div>
                        </div>
                      </div>
                    ))}
                    {(experience.highlights?.length < 3 ||
                      editHigtlightIndex != null) && (
                      <>
                        <label
                          className={`${lableTextStyle} mt-5 flex gap-x-5 items-center ${
                            theme.theme !== "light" && "text-[#f1f1f1]"
                          } `}
                        >
                          Enter Highlight
                          <FontAwesomeIcon
                            className="cursor-pointer"
                            onClick={() => {
                              handleModifyHighlight(
                                index,
                                highlight,
                                true,
                                editHigtlightIndex
                              );
                              setEditHighlightIndex(null);
                              setHighlight("");
                            }}
                            icon={faCheck}
                          />
                        </label>
                        <AllTextFields
                          lines={3}
                          textArea={highlight}
                          onChange={(val) => setHighlight(val)}
                        />
                      </>
                    )}
                  </div>

                  <label
                    className={`${lableTextStyle} flex gap-x-5 items-center ${
                      theme.theme !== "light" && "text-[#f1f1f1]"
                    } `}
                  >
                    Skills{" "}
                  </label>

                  <div className="flex w-full justify-center gap-x-5 items-center">
                    <AllTextFields
                      title=""
                      value={skill}
                      placeholder="About Title"
                      onChange={(val) => setSkill(val)}
                    />
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => {
                        handleModifySkill(index, skill);
                        setSkill("");
                      }}
                      icon={faCheck}
                    />
                  </div>

                  <div className="flex flex-row flex-wrap  justify-start items-center mt-5">
                    {experience &&
                      experience.skills?.map((item, i) => (
                        <div className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-4 py-2 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer flex text-[13px]">
                          {item}

                          <div
                            className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                            onClick={() =>
                              handleModifySkill(index, item, false)
                            }
                          >
                            <FontAwesomeIcon className="" icon={faClose} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {openDialog && (
        <CustomDialog
          open={openDialog}
          onSubmit={() => {
            setOpenDialog(false);
            navigate("/create-portfolio/3");
          }}
          cancel={setOpenDialog}
          text="You have not updated the Experience section. Are you sure you want to continue?"
        />
      )}
      <AddNew
        open={openAddProjectModel}
        cancel={() => {
          setOpenAddProjectModel(false);
        }}
        title={"Add New Experience"}
        onSubmit={() => {
          saveExperience();
        }}
        body={
          <div className="mt-2">
            <AllTextFields
              isFullWidth={true}
              title="title"
              classs={"text-gray-500 flex-col w-full"}
              value={title}
              isRequired={true}
              name="name"
              onChange={(e) => {
                setTitle(e);
              }}
              placeholder="Enter Job/Internship title"
            />
            <AllTextFields
              isFullWidth={true}
              title="Company"
              isRequired={true}
              classs={"text-gray-500 flex-col w-full"}
              value={company}
              onChange={(e) => setCompany(e)}
              placeholder="Enter company name"
            />
            <AllTextFields
              isFullWidth={true}
              title="Location"
              isRequired={true}
              classs={"text-gray-500 flex-col w-full"}
              value={location}
              onChange={(e) => setLocation(e)}
              placeholder="Enter company location"
            />
            <div className="flex w-full gap-5 justify-start items-start ">
              <AllTextFields
                isFullWidth={false}
                title="Joining From"
                isRequired={true}
                classs={"text-gray-500 flex-col w-full"}
                value={JoiningFrom}
                onChange={(e) => setJoiningFrom(e)}
                placeholder="Joining From"
              />

              {!currentlyWorking && (
                <AllTextFields
                  isFullWidth={false}
                  title="End Date"
                  isRequired={true}
                  classs={"text-gray-500 flex-col w-full"}
                  value={JoiningFrom}
                  onChange={(e) => setJoiningFrom(e)}
                  placeholder="End Date"
                />
              )}
            </div>
            <AllTextFields
              title="Currently Working"
              isCheckBox={true}
              isFullWidth={false}
              classs={"text-gray-500 gap-10 align-start"}
              size={"25px"}
              value={currentlyWorking}
              onChange={(e) => setCurrentlyWorking((prev) => !prev)}
              placeholder="Enter company location"
            />

            <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Skills & Tools Used
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="E.g., Python"
                  value={skill}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => addSkills(skill)}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {skillList?.length > 0 &&
                  skillList.map((item, index) => (
                    <div
                      className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-full px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
                    >
                      {item}
                      <div
                        className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                        onClick={() => {
                          setSkillList(
                            skillList.filter((skill) => skill !== item)
                          );
                        }}
                      >
                        <FontAwesomeIcon className="" icon={faClose} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Highlights & Achievements
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  readOnly={highlightList?.length > 2}
                  className={`h-[45px] flex-auto rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setHighlight(e.target.value)}
                  placeholder={
                    highlightList?.length > 2
                      ? "Highlights can be Max 3"
                      : "Python"
                  }
                  value={highlight}
                />
                <button
                  disabled={highlightList?.length > 2}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => addHighlight(highlight)}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {highlightList?.length > 0 &&
                  highlightList.map((item, index) => (
                    <div
                      className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-[12px] px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
                    >
                      {item}
                      <div
                        className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                        onClick={() => {
                          setHighlightList(
                            highlightList.filter((tag) => tag !== item)
                          );
                        }}
                      >
                        <FontAwesomeIcon className="" icon={faClose} />
                      </div>
                    </div>
                  ))}
              </div>

              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px] mt-10`}
              >
                Description
              </label>

              {/* <AllTextFields
                onChange={(e) => setDescription(e.target.value)}
                textArea={description}
                classs={"overflow-y-auto"}
                placeholder={"Enter Description"}
              /> */}

              <CustomEditor
                key={"job-description-editor"}
                placeholder="Enter message"
                // className={`p-2 ${" text-blackShade-50 bg-white"}`}
                onChange={(e) => {
                  setDescription(e);
                }}
                value={description}
                // editor={editor}
              />
              <button
                className="text-white font-semibold text-[12px] py-2 px-4 ml-2 border-2 border-blue-500 rounded-[10px] mt-10"
                onClick={handleGenerateDescriptionFromAI}
              >
                Generate With AI
              </button>
            </div>
            {/* <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Image
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                  type="file"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                />
              </div>
            </div> */}
          </div>
        }
      />
    </WrapperContent>
  );
}
export default AdminExperience;
