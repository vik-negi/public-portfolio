import React, { useEffect, useState } from "react";
import { social } from "../assets/svg/social/index.js";
import "../assets/svg/social/github.svg";
import create, { themes } from "../utils/Theme";
import { Ripple, initTE } from "tw-elements";
import { getAbout } from "../axios/dashboard.js";
import { useQuery, useQueryClient, useMutation } from "react-query";
import MyData from "../data/MyData.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { parseStyledText } from "../utils/text_parser.jsx";
import { mainProfile } from "../data/constants.jsx";
import { useWindowWide } from "./admin/utils/useWindowWide.js";
import { AnimatePresence, motion } from "framer-motion";

const About = ({ username }) => {
  const queryClient = useQueryClient();
  initTE({ Ripple });

  const [about, setAbout] = useState();
  const { data, isLoading } = useQuery("about", () => getAbout(username), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("avatar");
      setAbout(data?.data?.data);
    },
    onError: (error) => {},
  });

  const above450 = useWindowWide(450);
  const store = create();
  if (isLoading) {
    return <></>;
  }

  return (
    <section
      id="about"
      style={
        !above450
          ? {
              margin: 0,
              padding: 0,
            }
          : {}
      }
      className={`section about-section max-w-[1024px] `}
      tabIndex="11"
    >
      {!about && (
        <div className="about-ill">
          <img src={mainProfile} alt="VikramNegi" />
        </div>
      )}

      {
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial hidden state
          whileInView={{ opacity: 1, x: 0 }} // Animation when in view
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }} //
          className="aboutMe "
          // data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <h2
            className={`name ${
              store.theme === "light" ? "text-[#121212]" : "text-[#fff]"
            }`}
          >
            {/* {about?.title} */}
          </h2>
          <div className="professionContainer">
            {about?.passion == null && (
              <>
                <p className="profession">Your Passion</p>
                <p className="profession">E.g., Singing</p>
              </>
            )}
            {about?.passion.map((profession, index) => {
              return (
                <p key={index} className="profession">
                  {profession}
                </p>
              );
            })}
          </div>
          <br />
          <p
            style={{
              fontFamily: "Poppins",
            }}
            className="aboutShort text-[12px] sm:text-[18px]"
            //  className="aboutLong"
          >
            {about?.description != null
              ? parseStyledText(
                  about?.description.length > 450
                    ? about?.description.slice(0, 450) + "..."
                    : about?.description
                )
              : ""}
          </p>
          <br />
          <a
            className="button"
            href={about?.resume}
            target="_blank"
            tabIndex="12"
          >
            <FontAwesomeIcon icon={faDownload} />
            <p className="download text-[14px] text-white">Download Resume</p>
          </a>
        </motion.div>
      }
      {
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Initial hidden state
          whileInView={{ opacity: 1, x: 0 }} // Animation when in view
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }} //
          className="socialMedia w-[80px] "
        >
          {Object.values(social).map((socialLink, index) => {
            return (
              <button
                type="button"
                key={index}
                className="md:my-4 inline-block rounded-full text-xs font-medium uppercase leading-normal"
              >
                <img className="h-45 w-45" src={socialLink} />
              </button>
            );
          })}
        </motion.div>
      }
    </section>
  );
};

export default About;
