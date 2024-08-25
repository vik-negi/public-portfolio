import React, { useState } from "react";
import create from "../utils/Theme";
import { Link } from "react-router-dom";

const NavBarTitle = ({ title, toRoute = "" }) => {
  const theme = create();
  return (
    <Link
      to={toRoute}
      className={`font-medium text-xl text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${
        theme.theme === "light" ? "text-gray-900" : "text-white"
      }`}
    >
      {title}
    </Link>
  );
};

const MainDashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = create();

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`overflow-x-hidden `}>
      <header className="py-4 md:py-6">
        <div className="container px-3 mx-auto sm:px-4 lg:px-5">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  color={theme.theme === "light" ? "black" : "white"}
                  alt="Logo"
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={toggleMenu}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <NavBarTitle title="Features" />
              <NavBarTitle title="Pricing" />
              <NavBarTitle title="Automation" />
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <NavBarTitle title="User Login" toRoute="admin/login" />
              {/* <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Customer Login
              </a> */}
              <Link
                to="/admin/register"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {expanded && (
            <nav className="lg:hidden">
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    title=""
                    className={`flex items-center p-3 -m-3 text-base font-medium ${
                      theme.theme === "light" ? "text-gray-900" : "text-white"
                    }  transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2`}
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Automation
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Customer Login
                  </a>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Rest of your content */}
      <section className="pt-12 sm:pt-16 mt-10 px-10">
        <div className="px-4 mx-auto sm:px-4 lg:px-5">
          <div className="max-w-3xl  sm:max-w-full mx-auto text-center">
            <h1
              className={`px-6 text-lg ${
                theme.theme === "light" ? "text-gray-600" : "text-gray-200"
              } font-inter`}
            >
              Just Upload you Resume and get your portfolio ready in few minutes
            </h1>
            <p
              className={`mt-5 text-4xl font-bold leading-tight ${
                theme.theme === "light" ? "text-gray-900" : "text-gray-300"
              }  sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj`}
            >
              Your Comprehensive Portfolio Management
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              {/* <a
                href="#"
                title=""
                className={`inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 ${
                  theme.theme === "light" ? "text-gray-600" : "text-gray-200"
                }  border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button`}
              >
                Get Started
              </a> */}
              <Link
                to="/admin/register"
                href="#"
                title=""
                className={`inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold  transition-all duration-200  sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white  ${
                  theme.theme === "light" ? "text-gray-200" : "text-gray-200"
                }`}
                role="button"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85813 8.18003 3.82379L13.3152 7.38513C14.6836 8.38594 14.6836 10.3631 13.3152 11.3639L8.18003 13.4261Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Get Started
              </Link>
            </div>
            <p
              className={`mt-8 text-base mb-10 ${
                theme.theme === "light" ? "text-gray-500" : "text-gray-200"
              }  font-inter`}
            >
              Our platform allows you to effortlessly create, manage, and
              showcase your portfolio. Customize your profile, add your
              projects, and connect with potential clients or employers—all in
              one place.
            </p>
          </div>
        </div>
        {/*  */}

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainDashboard;
