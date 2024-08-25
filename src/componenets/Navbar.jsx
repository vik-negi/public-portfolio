import { React, useState } from "react";
import { Link } from "react-router-dom";
import Brightness from "../assets/svg/brightness.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBook,
  faProjectDiagram,
  faHome,
  faSkiing,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeMode } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import create, { themes } from "../utils/Theme";
import { Collapse, Dropdown, initTE } from "tw-elements";
import NavbarOptionsDropdown from "./NavbarOptionsDropdown";
import { getUsername, isAutheticated } from "../pages/admin/utils/auth";
import { currentUser } from "../axios/auth";
import { useQuery } from "react-query";
// import useStore from "../store";

const StyledThemeSelector = styled.select`
  padding: 4px;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

const NotificationItems = () => {
  const store = create();
  return (
    <li className="flex items-center justify-between mb-5">
      <div className="flex items-center">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          className="rounded-full"
          style={{ height: "35px", width: "35px" }}
          alt=""
          loading="lazy"
        />
        <div className="ml-5">
          <p className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-200">
            Vikram Negi
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
            2 hours ago
          </p>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-[18px] text-neutral-700 dark:text-neutral-200 mx-3">
          <i className="fas fa-check"></i>
        </button>

        <button className="text-[18px] text-neutral-700 dark:text-neutral-200">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default function Navbar() {
  initTE({ Collapse, Dropdown });
  const navigate = useNavigate();
  const { token } = isAutheticated();

  const [user, setUser] = useState({});
  const username = getUsername();

  useQuery("currentUser", currentUser, {
    retry: 1,
    retryDelay: 1,
    onError: (error) => {},
    onSuccess: (data) => {
      console.log("data", data?.data?.data);
      setUser(data?.data?.data);
    },
  });

  const [activeSection, setActiveSection] = useState("home");
  const [smStyle, setSmStyle] = useState("right-0");
  const [bgColor, setBgColor] = useState("");

  const toggleNav = () => {
    if (smStyle === "right-0") {
      setSmStyle("right-[225px]");
    } else {
      setSmStyle("right-0");
    }
  };
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const store = create();

  const switchTheme = (themeName) => {
    console.log(themeName);
    store.setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 120) {
      setBgColor(`#1b1b1b`);
    } else {
      setBgColor(`transparent`);
    }
  });

  return (
    <header className="header" id="header">
      {/* <div className="logo img">
        <img
          className=""
          src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678016307/Portfolio/Untitled_design_2_-PhotoRoom.png-PhotoRoom_atrult.png"
          alt="logo"
        />
      </div> */}
      <p className="logo initials" tabIndex="1"></p>
      <div
        style={{
          backgroundColor: `${bgColor}`,
        }}
        className={` navbar ${smStyle}`}
      >
        <ul className={`navbar-list `}>
          <li>
            <Link
              className={`${activeSection === "home" && "active"} navbar-link`}
              name="home"
              to="/"
              onClick={() => handleSectionClick("home")}
              tabIndex="4"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faHome} className="p-0 m-0" />
                </div>
                {activeSection === "home" ? "Home" : ""}
              </div>
            </Link>
          </li>
          {/* <li><a className={`${""} navbar-link`} name="about" onClick={toggleNav()} tabIndex="5">About</a></li> */}
          <li>
            <Link
              className={`${
                activeSection === "skills" && "active"
              } navbar-link`}
              name="skills"
              onClick={() => handleSectionClick("skills")}
              tabIndex="6"
              to="/skills"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faSkiing} className="p-2" />
                </div>
                {activeSection === "skills" ? "Skills" : ""}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "projects" && "active"
              } navbar-link`}
              name="projects"
              onClick={() => handleSectionClick("projects")}
              tabIndex="7"
              to="/projects"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px]  flex justify-center items-center  border-white rounded-full">
                  <FontAwesomeIcon icon={faProjectDiagram} className="p-2" />
                </div>
                {activeSection === "projects" ? "Projects" : ""}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "education" && "active"
              } navbar-link`}
              name="education"
              to="/"
              onClick={() => handleSectionClick("education")}
              tabIndex="8"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] w-[28px] h-[28px] flex justify-center items-center border-white rounded-full">
                  <FontAwesomeIcon icon={faBook} className="" />
                </div>
                {activeSection === "education" ? "Education" : ""}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${
                activeSection === "experience" && "active"
              } navbar-link`}
              name="experience"
              to="/experiences"
              onClick={() => handleSectionClick("experience")}
              tabIndex="9"
            >
              <div
                style={{
                  color: `${
                    bgColor === "transparent" && store.theme === "light"
                      ? "black"
                      : "white"
                  }`,
                }}
                className="flex items-center gap-2 justify-center"
              >
                <div className="border-[1px] text-center mx-auto border-white rounded-full">
                  <FontAwesomeIcon icon={faLaptop} className="p-2" />
                </div>
                {activeSection === "experience" ? "Experience" : ""}
              </div>
            </Link>
          </li>
        </ul>
        {/* <ion-icon
          tabIndex="9"
          name="close-outline"
          className="mobile-nav-icon"
          onClick={() => toggleNav()}
        ></ion-icon> */}
      </div>
      <button
        onClick={() => toggleNav()}
        className="hover:color-[#c2c2c2] z-500"
      >
        <FontAwesomeIcon
          icon={smStyle === "right-0" ? `bars` : "times"}
          className="mobile-nav-icon"
        />
      </button>
      <ul className="extra-navbar-list items-center">
        <i
          onClick={(e) =>
            switchTheme(store.theme === "light" ? "dark" : "light")
          }
          className={`${
            store.theme == "light" && "fas fa-moon"
          } text-[25px] cursor-pointer text-white
         
              `}
        >
          {store.theme !== "light" && (
            <img src={Brightness} color="white" alt="" />
          )}
        </i>

        {/* <li className="li-item">
          <Link
            className="contactBtn text-white"
            name="getInTouch"
            tabIndex="10"
            to="/contact"
          >
            Contact
          </Link>
        </li> */}
        {/* <li className="li-item">
          <button
            className={`${""} navbar-link text-white`}
            name="about"
            onClick={() =>
              navigate(token != null ? "/admin/dashboard" : "/admin/login")
            }
            tabIndex="5"
          >
            {token != null ? "Dashboard" : "Login"}
          </button>
        </li> */}
        <div className="relative flex items-center">
          <div className="relative" data-te-dropdown-ref>
            <a
              className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <span className="[&>svg]:w-15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute -mt-8 ml-6 rounded-full bg-danger px-2 py-1 text-[1rem] font-bold leading-none text-white">
                1
              </span>
            </a>
            <ul
              className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block p-4"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <NotificationItems />
              <NotificationItems />
            </ul>
          </div>

          <NavbarOptionsDropdown
            image={user?.profilePic}
            itemsList={[
              {
                title: token != null ? "Dashboard" : "Login",
                to: token != null ? "/admin/dashboard" : "/admin/login",
              },
              {
                title: "Contact",
                to: "/contact",
              },
            ]}
            showLogout={token != null}
          />
        </div>
      </ul>
    </header>
  );
}
