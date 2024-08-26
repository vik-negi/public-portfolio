import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { useMutation, useQuery } from "react-query";
import WrapperContent from "../../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faPlus,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowWide } from "../../utils/useWindowWide";
import create from "../../../../utils/Theme";
import AddNew from "../../utils/AddNew";
import {
  addSkillByFile,
  getAdminSkills,
  addSkill,
  getAllSkills,
} from "../../../../axios/skills";
import AllTextFields from "../../utils/AllTextFields";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminSkills({ isFromCreateProtfolio = false }) {
  const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

  const [openAddskillModel, setOpenAddskillModel] = useState(false);
  const [
    openAddManyskillThroughFileModel,
    setOpenAddManyskillThroughFileModel,
  ] = useState(false);

  const [categoryName, setCategoryName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState({});
  const [skillLevel, setSkillLevel] = useState("");

  const [allSkills, setAllSkills] = useState([]);

  const [skills, setSkills] = useState([]);

  const { data: mySkillsData } = useQuery("skills", () => getAllSkills(), {
    retry: 1,
    retryDelay: 1,
    refetchOnWindowFocus: false,
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      setAllSkills(data?.data?.data);
    },
  });
  const { data, refetch: refetchskills } = useQuery(
    "my-skills",
    () => getAdminSkills(),
    {
      retry: 1,
      retryDelay: 1,
      refetchOnWindowFocus: false,
      onError: (error) => {
        errorMessage(error?.response?.data?.message);
      },
      onSuccess: (data) => {
        if (isFromCreateProtfolio) return;
        setSkills(data?.data?.skills);
      },
    }
  );

  const navigate = useNavigate();
  const { skillsData } = useSelector((state) => state.aiResponse);

  const [submitLoading, setSubmitLoading] = useState(false);
  useEffect(() => {
    if (skillsData) {
      console.log("skillsData : ", skillsData);
      var myskills = skillsData?.skills ?? [];

      const updatedSkills = myskills.map((category) => {
        return {
          category:
            category.category == null || category.category == "null"
              ? category?.skillCategory ?? "Other"
              : category.category,
          skills: category.skills.map((item) => {
            return {
              skill: allSkills.find((skill) => {
                // console.log("item : ", skill, " and ", item);
                return (
                  skill?.name?.toLowerCase() ==
                  (item?.skill?.name || item?.name).toLowerCase()
                );
              }),
              level: item.level,
            };
          }),
        };
      });
      setSkills(updatedSkills);
      console.log("skills", updatedSkills);
    }
  }, []);

  const [skillsFromFile, setSkillsFromFile] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = function (event) {
      const jsonData = event.target.result;
      setSkillsFromFile(jsonData);
    };

    console.log("data ", skillsFromFile);

    reader.onerror = function (event) {
      console.error("File reading error:", event.target.error);
    };
  };

  const addSkillsByFileMutation = useMutation((data) => addSkillByFile(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      successMessage("skill Added Successfully");
      refetchskills();
    },
  });

  const handleAddAllSkills = () => {
    console.log("data : ", skills);

    const userSkillsFromResume = [];

    skills.map((skill) => {
      skill.skills.map((item) => {
        if (item?.skill?._id == null) return;
        userSkillsFromResume.push({
          skillCategory: skill.category,
          skill: item.skill._id,
          level: item?.level ?? "Intermediate",
        });
      });
    });

    // console.log("userSkillsFromResume : ", userSkillsFromResume);

    for (let i = 0; i < userSkillsFromResume.length; i++) {
      addSkillsMutation.mutate(userSkillsFromResume[i]);
      if (i == userSkillsFromResume.length - 1) {
        successMessage("All Skills Added Successfully");
      }
    }
  };

  const addSkillsMutation = useMutation((data) => addSkill(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      if (!openAddskillModel) {
        return;
      }
      successMessage("skill Added Successfully");
      refetchskills();
      setOpenAddskillModel(false);
      // goBack();
    },
  });

  const handleSendFile = () => {
    addSkillsByFileMutation.mutate(skillsFromFile);
  };

  const handleAddSkill = () => {
    if (selectedSkill == {} || skillLevel == "" || categoryName == "") {
      errorMessage("Please fill all the fields");
      return;
    }
    const data = {
      skillCategory: categoryName,
      skill: selectedSkill._id,
      level: skillLevel,
    };

    console.log("data : ", data);

    addSkillsMutation.mutate(data);
  };
  //   const goBack = () => {
  //     navigate(-1);
  //   };

  const theme = create();
  const width425 = useWindowWide(425);
  const skillCardStyle = `my-5 p-5  bg-[#100F22] rounded-lg shadow-lg flex flex-col  items-start ${
    theme.theme === "light" && "bg-[#E1EBF5]"
  }`;

  const [suggesstionCategory, setSuggesstionCategory] = useState([]);
  const [suggesstionSkills, setSuggesstionSkills] = useState([]);
  const allCategories = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Design",
    "Testing",
    "Mobile",
    "App Development",
    "AI/ML",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Web Development",
    "Game Development",
    "Blockchain",
    "IoT",
    "Networking",
  ];

  const handleSuggesstion = (value) => {
    setCategoryName(value);
    const filtered = allCategories.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggesstionCategory(filtered);
  };
  const handleSkillSuggesstion = (value) => {
    if (value === "") {
      setSuggesstionSkills([]);
      return;
    }
    const filtered = allSkills.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggesstionSkills(filtered);
  };

  return (
    <WrapperContent title="skill">
      <div
        className={` mx-auto max-w-[1100px] rounded-[5px] flex justify-between items-center w-full p-1`}
      >
        <p className="px-10 text-[20px]">Skills</p>
        <div className="flex gap-5">
          <div className="border-4px bg-white-500">
            <button
              className="flex justify-center sticky z-5 top-5
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-semiblod text-[12px] py-4 px-4 rounded-[4px]"
              onClick={handleAddAllSkills}
            >
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Add All Skills
            </button>
          </div>
          <div className="border-4px bg-white-500">
            <button
              className="flex justify-center sticky z-5 top-5
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-semiblod text-[12px] py-4 px-4 rounded-[4px]"
              onClick={() => {
                setOpenAddskillModel(true);
              }}
            >
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Add Skill
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col sm:justify-between justify-start items-start mx-auto w-full max-w-[1100px]`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className={`max-w-[500px]  border shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer ${skillCardStyle} hover:bg-transparent hover:shadow-none transition duration-500 ease-in-out hover:border-2 hover:border-blue-500`}
            >
              <div className="px-6 py-4 align-top">
                <h3
                  className={`text-3xl mb-[20px] ${
                    theme.theme == "light" ? "text-gray-800" : "text-white"
                  } font-semibold mb-4  text-center`}
                >
                  {skill.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className={`flex items-center ${
                        theme.theme !== "light" && "bg-gray-900"
                      }  border border-gray-400 dark:border-gray-600 rounded-md py-2 px-4 transform hover:rotate-6 hover:scale-110 transition duration-300`}
                    >
                      <img
                        src={item.skill?.image}
                        alt={item.skill?.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span
                        className={` ${
                          theme.theme == "light"
                            ? "text-grey-900"
                            : "text-white"
                        }`}
                      >
                        {item.skill?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddNew
        open={openAddManyskillThroughFileModel}
        cancel={() => {
          setOpenAddManyskillThroughFileModel(false);
        }}
        title={"Add Skills"}
        onSubmit={() => handleSendFile()}
        body={
          <div>
            <div className="flex flex-col">
              <p
                className="text-[#1e1e2f] font-semibold text-[14px]
                "
              >
                Add By Files
              </p>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        }
      />
      <AddNew
        open={openAddskillModel}
        cancel={() => {
          setOpenAddskillModel(false);
        }}
        title={"Add Skills"}
        onSubmit={() => handleAddSkill()}
        body={
          <div>
            <div className="flex flex-col">
              <AllTextFields
                title="Category"
                value={categoryName}
                onChange={(value) => handleSuggesstion(value)}
                placeholder="skill Name"
              />
              {suggesstionCategory.length > 0 && (
                <div className="flex flex-wrap">
                  {suggesstionCategory.map((item, index) => (
                    <div
                      key={`suggesstion-${index}`}
                      className={`flex flex-row cursor-pointer items-center gap-5 px-6 mr-2 mb-2 rounded-[8px]  py-2 ${
                        theme.theme === "light"
                          ? "bg-[#ffffff]"
                          : "bg-[#77778d]"
                      }
                      hover:bg-[#e8e9fa] hover:text-[#1e1e2f] text-[12px]
                      `}
                      onClick={() => {
                        setCategoryName(item);
                        setSuggesstionCategory([]);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
              <AllTextFields
                title="Skill"
                value={selectedSkill?.name}
                placeholder="skill Name"
                // options={allSkills.map((item) => item.name)}
                // isSelect={true}
                onChange={(e) => {
                  const skills = allSkills.find((item) => item.name === e);
                  setSelectedSkill(skills);
                  handleSkillSuggesstion(e);
                  // setSkillName(id);
                }}
              />

              {suggesstionSkills.length > 0 && (
                <div className="flex flex-wrap">
                  {suggesstionSkills.map((item, index) => (
                    <div
                      key={`suggesstion-${index}`}
                      className={`flex flex-row cursor-pointer items-center gap-5 px-6 mr-2 mb-2 rounded-[8px]  py-2 ${
                        theme.theme === "light"
                          ? "bg-[#ffffff]"
                          : "bg-[#77778d]"
                      }
                      hover:bg-[#e8e9fa] hover:text-[#1e1e2f] text-[12px]
                      `}
                      onClick={() => {
                        setSelectedSkill(item);
                        setSuggesstionSkills([]);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
              <AllTextFields
                title="Level"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
                placeholder="skill Name"
                name={"skillLevel"}
                isSelect={true}
              />
            </div>
          </div>
        }
      />
    </WrapperContent>
  );
}
export default AdminSkills;
