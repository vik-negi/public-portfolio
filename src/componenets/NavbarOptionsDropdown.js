import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../pages/admin/utils/auth";

const NavbarOptionsDropdown = ({ itemsList, showLogout, image, onClick }) => {
  return (
    <div className="relative" data-te-dropdown-ref>
      <a
        className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        // href="#"
        id="dropdownMenuButton2"
        role="button"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
      >
        <img
          src={image ?? "https://tecdn.b-cdn.net/img/new/avatars/2.jpg"}
          className="rounded-full"
          style={{ height: "25px", width: "25px" }}
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        className="absolute left-auto w-[150px] right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
      >
        {itemsList.map((item, index) => {
          return (
            <Link to={item.to} onClick={onClick}>
              <a
                className="block w-full whitespace-nowrap bg-transparent p-4 text-xl font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
              >
                {item.title}
              </a>
            </Link>
          );
        })}
        <div
          onClick={onClick}
          className="flex flex-row justify-start items-center cursor-pointer"
        >
          <div
            className="block w-full whitespace-nowrap bg-transparent p-4 text-xl font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref
          >
            Profile
          </div>
        </div>

        {/* <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent p-4 text-xl font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  Profile
                </a>
              </li> */}
        {showLogout && (
          <li onClick={() => signout()}>
            <a
              className="block w-full whitespace-nowrap bg-transparent p-4  text-xl font-normal text-neutral-700 hover:bg-red-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30 dark:hover:text-red-900"
              href="#"
              data-te-dropdown-item-ref
            >
              logout
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavbarOptionsDropdown;
