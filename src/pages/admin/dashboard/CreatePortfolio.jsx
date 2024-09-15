import React from "react";
import create from "../../../utils/Theme";
import { useParams } from "react-router-dom";
import CreateAbout from "./create_protfolio_sections/CreateAbout";
import AdminExperience from "../experience/Experience";
import AdminProject from "../project/AdminProjects";
import AdminSkills from "../skills/components/AdminSkills";

const CreatePortfolio = () => {
  const indexNumber = useParams().indexNumber;
  const theme = create();

  return (
    <div className={`${theme.theme === "light" && "bg-[#f1f0f8]"} `}>
      <div
        className={`pt-10 max-w-[980px] overflow-hidden flex flex-wrap flex-row justify-between items-start mx-auto w-full  pb-10  `}
      >
        {indexNumber == 1 && <CreateAbout />}
        {indexNumber == 2 && <AdminExperience isFromCreateProtfolio={true} />}
        {indexNumber == 3 && <AdminProject isFromCreateProtfolio={true} />}
        {indexNumber == 4 && <AdminSkills isFromCreateProtfolio={true} />}
      </div>
    </div>
  );
};

export default CreatePortfolio;
