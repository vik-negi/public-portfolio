// import React, { useState } from "react";
import create from "../utils/Theme";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeader from "../componenets/SectionHeader";

import React, { useState } from "react";
import { getAdminSkills } from "../axios/skills";
import { useQuery } from "react-query";
import { getSkills } from "../axios/dashboard";

const Skills = ({ username }) => {
  const theme = create();

  const [skills, setSkills] = useState([]);

  const {
    isLoading,
    data,
    refetch: refetchskills,
  } = useQuery("my-skills", () => getSkills(username), {
    retry: 1,
    retryDelay: 1,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setSkills(data?.data?.skills);
    },
  });

  const tabTitleStyle = "text-5xl font-bold my-5 font-mono text-blue-500 px-10";

  const skillCardStyle = `my-5 p-5  bg-[#100F22] rounded-lg shadow-lg flex flex-col  items-start ${
    theme.theme === "light" && "bg-[#E1EBF5]"
  }`;
  if (isLoading) {
    return <></>;
  }
  return (
    <div
      id="Skills"
      className="sec2 animate-revealing section lg:mb-[100px] lg:sm-[50px]  lg:container px-[5%] mx-auto  flex flex-col justify-center items-center relative z-10"
    >
      <div className="w-full flex flex-col items-center">
        {/* <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-8 md:mt-12 mb-6  ${
            theme.theme === "light" ? "text-[#12121]" : "text-white"
          }  animate-bounce `}
        >
          Skills
        </h2>
        <p className="text-lg md:text-xl font-semibold text-center text-secondary mb-8 md:mb-10 animate-fade-in-up">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p> */}

        <SectionHeader
          title="Skills"
          description="My Skill Set: Developed and Applied Throughout My Journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 0 }} // Initial hidden state
              whileInView={{ opacity: 1, y: 0 }} // Animation when in view
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.2,
              }} //
              style={
                {
                  // animationDelay: `${index * 200}`,
                }
              }
              key={`skill-${index}`}
              className={`max-w-[500px]  border shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:cursor-pointer ${skillCardStyle} hover:bg-transparent hover:shadow-none transition  ease-in-out hover:border-2 hover:border-blue-500 ${
                theme.theme == "light" ? "border-gray-200" : "border-gray-800"
              } `}
            >
              <motion.div className="px-6 py-4 align-top">
                <motion.h3
                  className={`text-3xl mb-[20px] ${
                    theme.theme == "light" ? "text-gray-800" : "text-white"
                  } font-semibold mb-4  text-center`}
                >
                  {skill.category}
                </motion.h3>
                <motion.div className="flex flex-wrap justify-center gap-2">
                  {skill.skills.map((item, index_x) => (
                    <motion.div
                      key={`skill-x-${index_x}`}
                      className={`flex items-center ${
                        theme.theme !== "light" && "bg-gray-900"
                      }  border border-gray-400 dark:border-gray-600 rounded-md py-2 px-4 transform hover:rotate-6 hover:scale-110 transition duration-300`}
                    >
                      <img
                        src={item?.skill?.image}
                        alt={item?.skill?.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span
                        className={` ${
                          theme.theme == "light"
                            ? "text-grey-900"
                            : "text-white"
                        }`}
                      >
                        {item?.skill?.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
