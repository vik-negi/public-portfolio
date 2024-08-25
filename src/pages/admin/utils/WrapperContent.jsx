import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import create from "../../../utils/Theme";
import { signout } from "./auth";
import NavbarOptionsDropdown from "../../../componenets/NavbarOptionsDropdown";
import { useWindowWide } from "./useWindowWide";
import AddNew from "./AddNew";
import { useQuery } from "react-query";
import { currentUser } from "../../../axios/auth";

function WrapperContent({ title, children, headerChild, isOpen }) {
  const { state, updateSideBarOpen } = useContext(AppContext);
  // const [user, setUser] = useState({});

  const {
    data: user,
    error,
    isLoading,
  } = useQuery("currentUser", currentUser, {
    retry: 1,
    retryDelay: 1,
    refetchOnWindowFocus: false,
    onError: (error) => {},
    onSuccess: (data) => {
      // console.log("data", data?.data?.data);
      // setUser(data?.data?.data);
    },
  });

  const [openAddProjectModel, setOpenAddProjectModel] = useState(false);

  const width650 = useWindowWide(625);
  return (
    <>
      <div
      // className="content-wrap mt-5"
      // style={{
      //   marginLeft: "75px",
      // }}
      >
        <div className={`main ${!width650 ? "mx-4" : ""}`}>
          <div className=" flex flex-col justify-start items-start">
            {width650 && (
              <div
                className={`flex justify-between items-center h-[50px] 
                w-full
              `}
              >
                <div className="flex">
                  <Link
                    to="/admin/dashboard"
                    className="text-[12px] font-semibold"
                  >
                    Dashboard{" "}
                  </Link>

                  <p className="text-[12px] font-normal"> &nbsp;/ {title}</p>
                </div>
                <div className="rightSide ml-auto">
                  <NavbarOptionsDropdown
                    image={user?.profilePic}
                    onClick={() => {
                      setOpenAddProjectModel(true);
                    }}
                    itemsList={[
                      {
                        title: "Dashboard",
                      },
                    ]}
                    showLogout={true}
                  />

                  {headerChild}
                </div>
              </div>
            )}
            {children}
            {/*content */}
          </div>
        </div>
      </div>

      <AddNew
        open={openAddProjectModel}
        cancel={() => {
          setOpenAddProjectModel(false);
        }}
        title={"Profile Picture"}
        onSubmit={() => {}}
        body={
          <div className="mt-2 rounded-3xl p-5 w-full">
            <div className="flex mx-auto align-middle flex-col justify-center items-start mb-10 w-full">
              <img
                src={user?.profilePic}
                className="rounded-full mx-auto"
                style={{ height: "200px", width: "200px" }}
                alt=""
              />
            </div>

            {/* <div className="flex w-full flex-col justify-start items-start mb-10">
              <label
                className={` ${
                  theme.theme === "light" && "text-[#1e1e2f]"
                } font-semibold text-[14px]`}
              >
                Image
              </label>
              <div className="flex flex-row w-full justify-start items-center mt-5">
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  name="image"
                  type="file"
                  className={`h-[45px] rounded-[10px] text-[13px] border-[1px] border-[#e8e9fa] outline-none px-4 mt-2 ${
                    theme.theme !== "light" && "text-[#1e1e2f]"
                  }`}
                />
              </div>
            </div> */}
          </div>
        }
      />
    </>
  );
}

export default WrapperContent;
