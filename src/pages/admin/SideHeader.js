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
  return (
    <Link
      onClick={onClick}
      to={route || "#"}
      className={`logo-with-text flex justify-start items-center  hover:bg-[#e8e9fa] hover:bg-opacity-25 
       hover:cursor-pointer rounded-[10px] w-full ${customStyle}`}
    >
      {image && (
        <div style={{ width: "50px", height: "45px" }}>
          <img
            src={
              // data?.data?.result[0]?.logo?.Headerlogo ||
              icon || "/images/app_logo.png"
            }
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
      {open ? (
        <p className="text-[14px] font-normal text-inherit ml-2 mb-0">
          {lable || ""}
        </p>
      ) : null}
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
            to="/dashboard"
            className="logo-with-text flex justify-between items-center mx-3"
          >
            <div style={{ width: "50px" }}>
              <img
                src={
                  // data?.data?.result[0]?.logo?.Headerlogo ||
                  "https://www.logolynx.com/images/logolynx/18/186056e89f0f92c07b026966bccb6e0c.png"
                }
                className="img-size img-fluid bg-transparent"
                alt="logo"
              />
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
        lable="DASHBOARD"
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
        lable="ABOUT"
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
        lable="EXPERIENCES"
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
        lable="PROJECTS"
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
          lable="APPERANCE"
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
          <div className="mb-3 mr-3 flex items-center justify-center bg-[#b23b3b] bg-opacity-50  rounded-[5px] h-[45px]">
            <a
              href="#1"
              onClick={() => signout()}
              className="flex items-center justify-center"
            >
              <i className="ti-close"></i>
              {open && isSmallScreen && (
                <p className="text-md mb-0  text-red ml-2">Logout</p>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideHeader;
