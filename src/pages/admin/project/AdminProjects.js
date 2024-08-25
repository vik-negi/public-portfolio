import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { getAdminExperience } from "../../../axios/experience";
import WrapperContent from "../utils/WrapperContent";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPlus,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DateTimeFormatter from "../../../utils/dateTime_functionality";
import { useWindowWide } from "../utils/useWindowWide";
import {
  addProject,
  getAdminProjects,
  deleteProject,
  updateProject,
} from "../../../axios/project";
import AddNewProject, { AddProjectItem } from "./components/AddNewProject";
import AddNew from "../utils/AddNew";
import { useNavigate } from "react-router-dom";
import AllTextFields from "../utils/AllTextFields";
import create from "../../../utils/Theme";
import LoadingComponent from "../../../utils/loader";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";

const lableTextStyle = "text-[#1e1e2f] font-semibold text-[14px]";

const AdminProject = ({ isFromCreateProtfolio = false }) => {
  const [loading, setLoading] = useState(true);
  const { data: projectsData, refetch: refetchProjects } = useQuery(
    "projects",
    () => getAdminProjects(),
    {
      retry: 1,
      retryDelay: 1,
      onError: (error) => {
        errorMessage(error?.response?.data?.message);
        setLoading(false);
      },
      onSuccess: (data) => {
        console.log(data.data?.data);
        setLoading(false);
        if (isFromCreateProtfolio) return;
        setProjects(data?.data?.data);
      },
    }
  );
  const navigate = useNavigate();

  const addMutation = useMutation((data) => addProject(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);
      successMessage("Project Added Successfully");
      if (isFromCreateProtfolio) return;
      goBack();
      setProjects(data?.data?.data);
    },
  });

  const deleteMutation = useMutation((id) => deleteProject(id), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);

      successMessage("Project deleted Successfully");
      refetchProjects();
    },
  });
  const updateMutation = useMutation((data) => updateProject(data), {
    onError: (error) => {
      errorMessage(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.data?.data);

      successMessage("Project deleted Successfully");
      refetchProjects();
    },
  });

  const goBack = () => {
    navigate(-1);
  };

  const { createPortfolioData } = useSelector((state) => state.aiResponse);

  const [submitLoading, setSubmitLoading] = useState(false);
  useEffect(() => {
    if (createPortfolioData) {
      setProjects(createPortfolioData?.projects ?? []);
      console.log("projects", projects);
    }
  }, []);
  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);
  const [skillList, setSkillList] = useState([]);
  const [skill, setSkill] = useState("");
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState("");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const theme = create();

  const handleAddProject = (idx) => {
    var formData = new FormData();
    const data = projects[idx];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formData.set(key, data[key]);
      }
    }

    addMutation.mutate(formData);
  };

  const saveProject = () => {
    var formData = new FormData();
    formData.set("name", name);
    formData.set("title", title);
    formData.set("link", link);
    formData.set("level", level);
    formData.set("description", description);

    formData.set("skillsUsed", skillList);
    formData.set("tags", tagList);
    formData.set("order", 3);

    image.forEach((img, index) => {
      formData.append(`image${index}`, img);
    });

    formData.forEach((item) => console.log(item));
    addMutation.mutate(formData);
  };
  const addSkills = (skill) => {
    setSkill("");
    if (skillList.includes(skill) || skill === "") {
      return;
    }
    setSkillList([...skillList, skill]);
  };
  const addtag = (tag) => {
    setTag("");
    if (tagList.includes(tag) || tag === "") {
      return;
    }
    setTagList([...tagList, tag]);
  };

  const deleteProjectFunction = (id) => {
    deleteMutation.mutate(id);
  };

  const updateProjectFunction = (idx) => {
    updateMutation.mutate(projects[idx]);
  };

  const [projects, setProjects] = useState([]);
  const width425 = useWindowWide(425);

  const handleFieldChange = (value, name, index) => {
    setProjects((prevProjects) => {
      return prevProjects.map((item, i) => {
        if (i === index) {
          console.log("items ", item);
          return { ...item, [name]: value };
        }
        return item;
      });
    });
  };

  const handleNext = () => {
    navigate("/admin/create-portfolio/4");
  };

  return (
    <WrapperContent title="Project">
      <div
        className={` mx-auto max-w-[1100px] rounded-[5px] flex justify-between items-center w-full p-1`}
      >
        <p className="px-10 text-[20px]">Projects</p>
        <div className="border-4px bg-white-500">
          <Button
            className="bg-[#1e1e2f] rounded-[10px] px-5 py-3 text-[#e8e9fa] text-[14px]"
            onClick={handleNext}
          >
            Next
          </Button>

          <button
            className="flex justify-center sticky z-5 top-5
           items-center bg-[#1e1e2f] hover:bg-[#e8e9fa] text-[#e8e9fa] hover:text-[#1e1e2f]  font-semiblod text-[12px] py-4 px-4 rounded-[4px]"
            onClick={() => {
              setOpenAddProjectModel(true);
            }}
          >
            <FontAwesomeIcon className="mr-2" icon={faPlus} />
            Add Projects
          </button>
        </div>
      </div>
      {loading && <LoadingComponent width={100} />}
      {projects.length > 0 &&
        projects.map((project, index) => (
          <div
            className={`flex flex-wrap flex-row justify-between items-start mx-auto w-full max-w-[1100px]  mt-10 rounded-[10px] p-10  ${
              theme.theme === "light" ? "bg-[#ffffff]" : "bg-[#1e1e2f]"
            }`}
          >
            <div className="flex flex-row justify-start w-full items-center mt-5 gap-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-[6px]"
                onClick={() => {
                  console.log("update project");
                  if (isFromCreateProtfolio) {
                    handleAddProject(index);
                  } else {
                    updateProjectFunction(index);
                  }
                }}
              >
                {isFromCreateProtfolio ? "ADD" : "Update"}
              </button>
              <div
                className="items-center gap-5 hover:cursor-pointer
               bg-red-500 hover:bg-red-700  transform hover:scale-2 transition-transform duration-300
                text-white font-bold py-2 px-4 rounded-full "
                onClick={() => {
                  deleteProjectFunction(project._id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>

            <div
              className={`  ${
                width425 ? "w-[450px]" : "w-full"
              } flex flex-col justify-start items-center mt-5`}
            >
              <AllTextFields
                title="Name"
                name="name"
                value={project?.name}
                onChange={(e) => handleFieldChange(e, "name", index)}
                placeholder="Project Name"
              />
              <AllTextFields
                title="Title"
                value={project?.title}
                name="title"
                onChange={(e) => handleFieldChange(e, "title", index)}
                placeholder="Project Title"
              />
              <AllTextFields
                title="Link"
                value={project?.link}
                name={"link"}
                onChange={(e) => handleFieldChange(e, "link", index)}
                placeholder="Enter Site Link"
              />
              <AllTextFields
                title="level"
                value={project?.level}
                name={"level"}
                isSelect={true}
                onChange={(e) => handleFieldChange(e, "level", index)}
                placeholder="Enter Site Link"
              />
            </div>
            <div className={`${width425 ? "w-[450px]" : "w-full"}`}>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col w-full justify-start items-center mt-5">
                  {project.highlights?.map((item, index) => (
                    <AllTextFields
                      lines={3}
                      title={`Highlights ${index + 1}`}
                      textArea={item}
                      placeholder={`Highlights ${index + 1}`}
                    />
                  ))}
                </div>

                <AllTextFields
                  title="Project Description"
                  lines={10}
                  name={"description"}
                  onChange={(e) => handleFieldChange(e, "description", index)}
                  textArea={project?.description}
                  placeholder="About Description"
                />

                <label
                  className={`${lableTextStyle} ${
                    theme.theme !== "light" && "text-[#f1f1f1]"
                  } `}
                >
                  tags
                </label>
                <div className="flex flex-row flex-wrap  justify-start items-center mt-5">
                  {project &&
                    project.tags?.map((item, index) => (
                      <div
                        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-4 py-2 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[13px]
              "
                      >
                        {item}
                      </div>
                    ))}
                </div>

                <label
                  className={`${lableTextStyle} ${
                    theme.theme !== "light" && "text-[#f1f1f1]"
                  } `}
                >
                  Skills
                </label>
                <div className="flex flex-row flex-wrap  justify-start items-center mt-5">
                  {project &&
                    project.skillsUsed?.map((item, index) => (
                      <div
                        className="mr-2 mb-2 bg-[#e8e9fa] rounded-full px-4 py-2 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer 
                 text-[13px]
              "
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-5 flex-wrap gap-10">
              {project?.image?.map((item, index) => (
                <div
                  className={`flex flex-col justify-start items-center mt-5 relative
                   ${width425 ? "w-[300px] " : "w-full"}`}
                >
                  <div className="flex flex-row justify-center items-center absolute top-5 right-5 rounded-full p-2 w-[30px] h-[30px] bg-black bg-white-400 cursor-pointer">
                    <FontAwesomeIcon
                      color="white"
                      size="lg"
                      icon="fa-solid fa-xmark"
                    />
                  </div>
                  <img
                    src={item}
                    alt="project"
                    className="w-full  object-cover rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      <AddNew
        open={openAddProjectModel}
        cancel={() => {
          setOpenAddProjectModel(false);
        }}
        title={"Add New Project"}
        onSubmit={() => {
          saveProject();
        }}
        body={
          <div className="mt-2">
            <AllTextFields
              isFullWidth={true}
              title="Name"
              classs={"text-gray-500 flex-col w-full"}
              value={name}
              name="name"
              onChange={(e) => {
                console.log(e);
                setName(e);
              }}
              placeholder="Name of project"
            />
            <AllTextFields
              isFullWidth={true}
              title="Title"
              classs={"text-gray-500 flex-col w-full"}
              value={title}
              onChange={(e) => setTitle(e)}
              placeholder="Enter project title"
            />
            <AllTextFields
              isFullWidth={true}
              title="Description"
              classs={"text-gray-500 flex-col w-full"}
              value={description}
              onChange={(e) => setDescription(e)}
              placeholder="Enter project description"
            />
            <AllTextFields
              isFullWidth={true}
              title="Link"
              classs={"text-gray-500 flex-col w-full"}
              value={link}
              onChange={(e) => setLink(e)}
              placeholder="Link of project"
            />
            <AllTextFields
              isFullWidth={true}
              title="Level"
              classs={"text-gray-500 flex-col w-full"}
              dropdownList={["Bignner", "Intermediate", "Advanced", "Expert"]}
              value={level}
              onChange={(e) => setLevel(e)}
              placeholder="level of project"
            />
            <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Skills
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Python"
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
                {skillList.length > 0 &&
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
                Tags
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  type="text"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Python"
                  value={tag}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => addtag(tag)}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {tagList.length > 0 &&
                  tagList.map((item, index) => (
                    <div
                      className="mr-2 flex mb-2 bg-[#e8e9fa] rounded-full px-6 py-3 text-[#1e1e2f] font-normal hover:bg-[#1e1e2f] hover:text-[#e8e9fa] cursor-pointer
                        text-[13px]
                        "
                    >
                      {item}
                      <div
                        className="w-[20px] h-[20px] ml-2 rounded-full hover:bg-red-500 hover:text-white flex justify-center items-center mx-auto justify-center"
                        onClick={() => {
                          setTagList(tagList.filter((tag) => tag !== item));
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
                Image {image != null && image.length > 0 && `(${image.length})`}
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  onChange={(e) => setImage([...image, e.target.files[0]])}
                  name="image"
                  type="file"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                />
              </div>
              <div className="flex w-full justify-start items-center mt-5 flex-wrap">
                {image.length > 0 &&
                  image.map((img, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-start items-center mt-5 mx-2"
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        alt="project"
                        className="w-[280px] h-[280px] object-cover rounded-[10px]"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        }
      />
    </WrapperContent>
  );
};
export default AdminProject;
