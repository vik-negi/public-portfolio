import { React, useState } from "react";
import { SideBarItem, SideBarItemsContainer } from "../SideHeader";
import { NavbarIcon } from "./NavBarIcon";
import create from "../../../utils/Theme";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const store = create();

  const customStyle = `${
    store.theme === "light" ? "text-black" : "text-white"
  }`;

  return (
    <div className="sidebar w-[100%]">
      <div className="flex flex-row justify-between items-center w-[100%]">
        <SideBarItem open={true} route={"/admin/dashboard"} lable="" />
        {/* <NavbarIcon
          styles="bg-[#2c2f32] text-[#ffffff] rounded-[10px] my-1"
          name="menu"
          icon="ti-layout-list-thumb"
          handleClick={() => setOpen(!open)}
        /> */}

        <NavbarIcon
          icon={"fa-solid fa-bars"}
          styles="w-[55px] h-[55px]"
          customStyle={customStyle}
          
          handleClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      {open && (
        <SideBarItemsContainer
          open={open}
          setOpen={setOpen}
          isMobileNavbar={true}
        />
      )}
    </div>
  );
};

export default MobileNavbar;
