import {
  faEnvelope,
  faEnvelopeSquare,
  faMailForward,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useWindowWide } from "./admin/utils/useWindowWide";
import { publicInfo } from "../axios/dashboard";
import { useQuery } from "react-query";
import create from "../utils/Theme";

import { AnimatePresence, motion } from "framer-motion";
import AddNew from "./admin/utils/AddNew";
import ShowAnimatedDialog from "./admin/utils/ShowAnimatedDialog";

const Contact = ({ username }) => {
  const theme = create();

  const { data, isLoading } = useQuery(
    "main-section",
    () => publicInfo(username),
    {
      onSuccess: (data) => {
        setPublicProfile(data?.data?.data);
      },
      onError: (error) => {},
    }
  );

  const [publicProfile, setPublicProfile] = useState(null);
  const above650 = useWindowWide(650);
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState(null);

  if (publicProfile == null) return <></>;
  const items = [
    {
      id: "1",
      title: "Get in touch",
      subtitle: "Contact",
    },
    {
      id: "2",
      title: "Get in touch",
      subtitle: "Contact",
    },
    {
      id: "3",
      title: "Get in touch",
      subtitle: "Contact",
    },
  ];

  return (
    <>
      <section id="contact" className={`${!above650 && "p-10"}`}>
        <div className=" w-full max-w-[1024px]">
          <div className="">
            <div className="mb-5">
              <p
                className={`theme.theme == "light" ? "text-[#3f3f3f]" : "text-[#e4e4e4]" text-3xl font-semibold mb-10`}
              >
                contact
              </p>
              <h3
                className={`mt-2 text-4xl font-bold ${
                  theme.theme == "light" ? "text-[#3f3f3f]" : "text-[#e4e4e4]"
                } mb-10`}
              >
                Don't be shy! Hit me up! 👇
              </h3>
            </div>
            <div className={`flex ${above650 ? "flex-row" : "flex-col"}`}>
              <div className="flex mb-10 mr-[10rem]">
                <span className="rounded-full bg-[#26262648] h-[55px] w-[55px] flex items-center justify-center mr-5 blue-shadow">
                  <FontAwesomeIcon
                    className="text-white h-10"
                    icon={faMapLocation}
                    width="55px"
                    height="55px"
                  />
                </span>
                <div className="contact__info">
                  <h3
                    className={`text-2xl font-semibold theme.theme == "light" ? "text-[#3f3f3f]" : "text-[#e4e4e4]"}`}
                  >
                    Location
                  </h3>
                  <p>{publicProfile.user?.location ?? "Remote"}</p>
                </div>
              </div>
              <div className="flex mb-10 mr-[10rem]">
                <span className="rounded-full bg-[#26262648] h-[55px] w-[55px] flex items-center justify-center mr-5 blue-shadow">
                  <FontAwesomeIcon
                    className="text-white h-10"
                    icon={faEnvelope}
                    width="55px"
                    height="55px"
                  />
                </span>
                <div className="contact__info">
                  <h3
                    className={`text-2xl font-semibold theme.theme == "light" ? "text-[#3f3f3f]" : "text-[#e4e4e4]"`}
                  >
                    Mail
                  </h3>
                  <p>{publicProfile.user?.email}</p>
                </div>
              </div>

              {/* <div className="contact__icon-box">
              <span>
       
                <FontAwesomeIcon icon={faEnvelope} width={30} height={30} />
              </span>
              <div className="contact__info">
              <h3>Mail</h3>
              <a href="mailto:stefan.topallovic@gmail.com">
              stefan.topallovic@gmail.com
                </a>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
