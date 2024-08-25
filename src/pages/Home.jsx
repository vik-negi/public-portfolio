import About from "./About";
import Experiences from "./Experiences";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";
import { useQuery } from "react-query";
// Add these imports at the beginning of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { callApi, dashboard, publicInfo } from "../axios/dashboard";

import { useLocation, useParams } from "react-router-dom";
import { getUsername } from "./admin/utils/auth";
import MainDashboard from "./MainDashboard";

library.add(faBars, faTimes);

export default function Home(props) {
  var { username } = useParams();

  console.log("home username : ", username);

  // const savedUsername = getUsername();

  // if (username === undefined && savedUsername === undefined) {
  //   username = "vikramnegi-9162604468";
  // } else if (username != undefined) {
  //   username = username;
  // } else if (savedUsername) {
  //   username = savedUsername;
  // }

  return (
    <>
      <MainSection username={username} />
      <About id="about" username={username} />
      <Skills id="skills" username={username} />
      <Projects id="projects" username={username} />
      <Experiences id="experience" username={username} />
    </>
  );
}
