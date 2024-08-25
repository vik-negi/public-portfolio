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

const About = ({ username, profile }) => {
  const queryClient = useQueryClient();
  console.log("nikjmi", username);

  if (username === undefined) {
    username = "vikramnegi-9162604468";
  }
  initTE({ Ripple });
  const socialLinks = [
    social.github,
    social.linkedin && social.linkedin,
    social.twitter && social.twitter,
    social.instagram && social.instagram,
    social.facebook && social.facebook,
  ];

  const [about, setAbout] = useState();
  // const { isLoading, isSuccess, isError, error, data } = useQuery(
  //   ["data"],
  //   getAbout(props.username)
  // );
  // if (data) {
  //   console.log("about : ", data?.data?.data);
  // }
  const [isFirstTime, setIsFirstTime] = useState(true);

  if (username == "vikramnegi-9162604468" && isFirstTime) {
    setIsFirstTime(false);
    setAbout(MyData.about);
  }

  const { data } = useQuery("about", () => getAbout(username), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("avatar");
      setAbout(data?.data?.data);
    },
    onError: (error) => {
      setAbout(MyData.about);
    },
  });

  // const mutation = useMutation((id) => getAbout(username), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("avatar");
  //   },
  //   onError: (error) => {
  //     setAbout(MyData.about);
  //   },
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await mutation.mutateAsync(); // Use mutateAsync to get data
  //     setAbout(result?.data?.data);
  //     console.log("about : ", result?.data?.data?.passion);
  //   };
  //   fetchData();
  // }, []);

  const store = create();

  return (
    <section id="about" className="section about-section" tabIndex="11">
      {!about && (
        <div className="about-ill">
          <img src={profile.image} alt="VikramNegi" />
        </div>
      )}

      {
        <div
          className="aboutMe"
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
          <p className="aboutLong">
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
            Download Resume
          </a>
        </div>
      }
      {
        <div className="socialMedia w-[80px]">
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
        </div>
      }
    </section>
  );
};

export default About;
