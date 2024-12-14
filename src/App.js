import "./App.css";
import "./style/Loader.css";
import Navbar from "./componenets/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { isAutheticated } from "./pages/admin/utils/auth";
import Experiences from "./pages/Experiences";
import { useEffect, useCallback } from "react";
import { AppProvider } from "./context/Context";

import {
  HashRouter,
  Routes,
  useNavigate,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./demo";
// import { ThemeModeProvider } from "./context/ThemeContext";
import { themes, StyledComponent } from "./utils/Theme";
import LayoutComponent from "./utils/TopLayerLayout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import LoginWrapper from "./pages/admin/utils/LoginWrapper";
import { AboutIndex } from "./pages/admin/about";
import Register from "./pages/admin/Register";
import VerifyOtp from "./pages/admin/VerifyOtp";
import AdminExperience from "./pages/admin/experience/Experience";
import AdminProject from "./pages/admin/project/AdminProjects";
import AdminSkills from "./pages/admin/skills/components/AdminSkills";
import CreatePortfolio from "./pages/admin/dashboard/CreatePortfolio";
import MainDashboard from "./pages/MainDashboard";
import { Tamplate1 } from "./templates/template_1/template_1";
import WallOfWellness from "./pages/WallOfWellness/WallOfWellness";
import IndividualWallOfWellness from "./pages/WallOfWellness/IndividualWallOfWellness";
import WriteYourWoWStory from "./pages/WallOfWellness/WriteYourWoWStory";
import EditYourWoWStory from "./pages/WallOfWellness/EditYourWoWStory";
import NotFound from "./pages/NotFound";
import EmbedWoW from "./pages/WallOfWellness/components/EmbedWoW";

function App() {
  // const slowInternet = setTimeout(() => {
  //   document.querySelector(".loaderDiv p").innerHTML = "Slow internet :(";
  // }, 3000);

  // const almostReady = setTimeout(() => {
  //   document.querySelector(".loaderDiv p").innerHTML =
  //     "Page is almost ready...";
  // }, 7000);

  // document.onreadystatechange = () => {
  //   if (document.readyState === "complete") {
  //     // document ready
  //     clearTimeout(slowInternet);
  //     clearTimeout(almostReady);

  //     document.querySelector(".loaderDiv p").innerHTML =
  //       "Page is almost ready!";

  //     setTimeout(() => {
  //       document.querySelector(".loaderDiv p").innerHTML = "Page is ready!";
  //     }, 1000);
  //     setTimeout(() => {
  //       document.querySelector(".loaderDiv p").classList.add("removeLoader");
  //       document.querySelector("body").style.overflowY = "scroll";
  //     }, 2500);

  //     window.scrollTo(0, 0);
  //   }
  //   window.scrollTo(0, 0);
  // };

  const { token } = isAutheticated();

  return (
    <HashRouter base="/">
      <AppProvider>
        {/* <div className="loaderDiv">
        <div className="loading"></div>
        <p>Loading page</p>
      </div> */}

        {/* Toaster */}
        {/* <div className="toaster"></div> */}
        {/* Div for background */}
        {/* <div className="bg-div"></div> */}

        <Routes>
          <Route path="/wow" element={<WallOfWellness />} />
          <Route path="/embed/:id" element={<EmbedWoW />} />
          <Route path="/wow/:id" element={<IndividualWallOfWellness />} />
          <Route path="/wow/create" element={<WriteYourWoWStory />} />
          <Route path="/wow/edit/:id" element={<EditYourWoWStory />} />

          <Route
            path="/"
            element={
              <LayoutComponent
                children={
                  token ? (
                    // <Tamplate1 />
                    <MainDashboard />
                  ) : (
                    // <Home />
                    <MainDashboard />
                  )
                }
              />
            }
          />
          <Route
            path="/:username"
            element={<LayoutComponent children={<Home />} />}
          />
          <Route
            path="/#/:username"
            element={<LayoutComponent children={<Home />} />}
          />
          <Route
            path="/about"
            element={<LayoutComponent children={<About />} />}
          />
          <Route
            path="/skills"
            element={<LayoutComponent children={<Skills />} />}
          />
          <Route
            path="/projects"
            element={<LayoutComponent children={<Projects />} />}
          />
          <Route
            path="/contact"
            element={<LayoutComponent children={<Contact />} />}
          />
          <Route
            path="/experiences"
            element={<LayoutComponent children={<Experiences />} />}
          />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="create-portfolio/:indexNumber"
            element={<CreatePortfolio />}
          />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/verify" element={<VerifyOtp />} />

          <Route
            path="/admin/*"
            element={
              <LoginWrapper
                childrens={
                  <LayoutComponent
                    children={<AdminRoutes />}
                    notShowNavbar={true}
                  />
                }
              />
            }
          />
          <Route
            path="/:username"
            element={<LayoutComponent children={<Home />} />}
          />
        </Routes>
      </AppProvider>
    </HashRouter>
  );
}

function AdminRoutes() {
  const navigate = useNavigate();
  const { token } = isAutheticated();
  const HeaderLayout = useCallback(() => {
    if (token && window.location.pathname === "/") {
      // navigate("/admin/dashboard");
    } else if (!token && window.location.pathname === "/") {
      navigate("/admin/login");
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    HeaderLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<AboutIndex />} />
      <Route path="experiences" element={<AdminExperience />} />
      <Route path="projects" element={<AdminProject />} />
      <Route path="skills" element={<AdminSkills />} />
    </Routes>
  );
}
export default App;
