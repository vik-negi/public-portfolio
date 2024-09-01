import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { signout } from "./utils/auth";
import { useQuery } from "react-query";
import { errorMessage } from "../../utils/Toast";
import { NavbarIcon } from "./utils/NavBarIcon";
import create, { themes } from "../../utils/Theme";
import { useWindowWide } from "./utils/useWindowWide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeModeProvider } from "../../context/ThemeContext";
import { AppContext } from "../../context/Context";
import { Button } from "@material-tailwind/react";
import logo from "../../assets/image/protfoliohub-logo.png";

export const SideBarItem = ({
  open,
  route,
  icon,
  image,
  lable,
  customStyle = "",
  fontAweson,
  onClick,
}) => {
  const store = create();
  console.log("store : ", store);
  return (
    <Link
      onClick={onClick}
      to={route || "#"}
      style={{}}
      className={`mb-2 flex justify-start items-center text-2xl p-0
        ${
          store.theme === "light"
            ? "hover:bg-[#e8e9fa] hover:dashboard-navabr-light-item"
            : "hover:bg-[#f3f4f6] hover:text-black"
        }
          
       hover:cursor-pointer rounded-lg w-full ${customStyle}`}
    >
      {image && (
        <div style={{ width: "40px", height: "40px" }}>
          <img
            src={logo}
            className="img-size img-fluid bg-transparent"
            alt="logo"
          />
        </div>
      )}
      {icon && (
        <i
          className={`${icon} text-[16px] flex justify-center items-center flex-col`}
          style={{ width: "50px", height: "45px" }}
        ></i>
      )}
      {fontAweson && (
        <FontAwesomeIcon
          icon={fontAweson}
          className="text-[25px] flex justify-center items-center flex-col"
          style={{ width: "50px", height: "45px" }}
        />
      )}
      {open ? lable || "" : null}
    </Link>
  );
};

export const SideBarItemsContainer = ({ open, setOpen, isMobileNavbar }) => {
  const { state, updateSideBarOpen } = useContext(AppContext);
  const store = create();

  const customStyle = `${
    store.theme === "light" ? "text-black" : "text-white"
  }`;

  const switchTheme = (themeName) => {
    console.log(themeName);
    store.setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        {open && isMobileNavbar == null ? (
          <Link
            to="/"
            className="logo-with-text flex justify-between items-center mx-3"
          >
            <div className="flex justify-center items-center">
              <img
                src={logo}
                className="img-size img-fluid bg-transparent"
                alt="logo"
                width={"50px"}
              />
              <p className="text-[14px] font-semibold pb-3 text-inherit ml-2 mb-0">
                ProtfolioHub
              </p>
            </div>
          </Link>
        ) : null}
        {/* <span>{data?.data?.result[0]?.applicationName || "GYM"}</span> */}

        {isMobileNavbar == null && (
          <NavbarIcon
            icon={"fa-solid fa-bars"}
            styles="w-[55px] h-[55px]"
            customStyle={customStyle}
            handleClick={() => {
              setOpen(!open);
              console.log("side bar : ", state.sideBarOpen);
              updateSideBarOpen({ sideBarOpen: !open });
            }}
          />
        )}
      </div>

      <div>
        <div class="px-4 mt-8">
          <label for="" class="sr-only">
            {" "}
            Search{" "}
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              name=""
              id=""
              class="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-xl"
              placeholder="Search here"
            />
          </div>
        </div>

        <div class="px-4 mt-6 mb-6">
          <hr class="border-gray-200" />
        </div>
      </div>
      <SideBarItem
        open={open}
        customStyle={customStyle}
        icon={"fa-solid fa-house"}
        route="/admin/dashboard"
        onClick={() => {
          if (isMobileNavbar) {
            setOpen(!open);
          }
        }}
        lable="Dashboard"
      />

      <SideBarItem
        open={open}
        customStyle={customStyle}
        route="/admin/about"
        onClick={() => {
          if (isMobileNavbar) {
            setOpen(!open);
          }
        }}
        icon="fa-regular fa-address-card"
        // image="/images/app_logo.png"
        lable="About"
      />
      <SideBarItem
        open={open}
        customStyle={customStyle}
        route="/admin/experiences"
        onClick={() => {
          if (isMobileNavbar) {
            setOpen(!open);
          }
        }}
        icon="fa-solid fa-briefcase"
        // image="/images/app_logo.png"
        lable="Experiences"
      />
      <SideBarItem
        open={open}
        customStyle={customStyle}
        route="/admin/projects"
        onClick={() => {
          if (isMobileNavbar) {
            setOpen(!open);
          }
        }}
        icon="fa-solid fa-laptop-file"
        // image="/images/app_logo.png"
        lable="Projects"
      />
      <SideBarItem
        open={open}
        customStyle={customStyle}
        onClick={() => {
          if (isMobileNavbar) {
            setOpen(!open);
          }
        }}
        route="/admin/skills"
        icon="fa-solid fa-laptop-code"
        // image="/images/app_logo.png"
        lable="Skills"
      />
      <div
        onClick={(e) => switchTheme(store.theme === "light" ? "dark" : "light")}
      >
        <SideBarItem
          open={open}
          customStyle={customStyle}
          icon={`${store.theme == "light" ? "fas fa-moon" : "fas fa-sun"}`}
          // image="/images/app_logo.png"
          lable="Appearance"
        />
      </div>

      {/* <li>
              <NavLink to="/dashboard" className="sidebar-sub-toggle">
                <i className="ti-layout-grid2-alt"></i>
                {open ? "Dashboard" : ""}
              </NavLink>
            </li> */}
    </div>
  );
};

function SideHeader() {
  const [open, setOpen] = useState(true);
  const [drawerStyle, setDrawerStyle] = useState("");
  const [openUser, setOpenUser] = useState(false);
  const theme = create();

  // const { isError, error, data } = useQuery("settings", getCompany);

  // if (isError) {
  //   errorMessage(error?.message);
  // }
  //"/images/logo.png"
  const isSmallScreen = useWindowWide(800);

  return (
    <div
      className={`sticky top-0 h-[100vh] ${drawerStyle} ml-[0px] px-2 ${
        theme.theme === "light" ? "bg-[#ffffff]" : "bg-[#100F22]"
      } ${theme.theme === "light" && "border-r-[1.5px] border-[#e8e9fa]"}`}
      style={{
        width: open && isSmallScreen ? "220px" : "70px",
      }}
    >
      <div className="h-[100%]">
        <div className="flex justify-between flex-col h-[100%]">
          <SideBarItemsContainer
            open={isSmallScreen && open}
            setOpen={setOpen}
          />

          <div class="pb-4 mt-20">
            <button
              onClick={signout}
              type="button"
              class="flex items-center justify-between w-full px-4 py-3 text-xl font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100"
            >
              <img
                class="flex-shrink-0 object-cover w-10 h-10 mr-3 rounded-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                alt=""
              />
              {open && isSmallScreen && "Jacob Jones"}
              {open && isSmallScreen && (
                <svg
                  class="w-5 h-5 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideHeader;
