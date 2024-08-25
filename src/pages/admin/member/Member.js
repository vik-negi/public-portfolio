import React, { useState, useEffect } from "react";
import WrapperContent from "../../WrapperContent";
import { Link } from "react-router-dom";
import Button from "../../Helper/Button";
import { errorMessage } from "../../utils/Toast";
import { profile } from "../../assets/icons";
import { useQuery } from "react-query";
import LoaderBox from "../../utils/LoaderBox";
import Avatar from "react-avatar";
import { formatDate } from "../../utils/formateDate";
import { getAllMembers } from "../../axios/member";
import { dashboad } from "../../axios/dashboard/dashboad";
import FileUploader from "../utils/FileUploader";
import { ownData } from "../../axios/duty-manager";

function Member() {
  const { data, isSuccess, isLoading, error, isError } = useQuery([], () =>
    ownData()
  );

  if (isError) {
    errorMessage(error?.message);
  }
  // const [fileData, setFileData] = useState(null);
  const [excelData, setExcelData] = useState(null);
  if (isSuccess) {
    // setExcelData(data.data.data.exel_sheat_Data);
  }

  useEffect(() => {
    if (data?.data?.data?.exel_sheat_Data) {
      setExcelData(data.data.data.exel_sheat_Data);
    }
  });

  const fileData = [
    [
      "Name",
      "Phone",
      "Total Hours",
      "Remaining Hours",
      "Consumed Hours",
      "Last Called",
      "View",
      "Add",
    ],
    ["Vikram Negi", "9876543210", "10", "5", "5", "2021-09-01", "View", "Add"],
    [
      "Petar Petrovic",
      "9876543210",
      "10",
      "5",
      "5",
      "2021-09-01",
      "View",
      "Add",
    ],
    ["Mr. John Doe", "9876543210", "10", "5", "5", "2021-09-01", "View", "Add"],
    ["Vishal", "9797853567", "10", "5", "5", "2021-09-01", "View", "Add"],
  ];
  // const headers =

  return (
    <WrapperContent title="Member">
      <section id="main-content">
        {/* <LoaderBox loader={isLoading} /> */}

        <div className="flex justify-between flex-col">
          <div className="flex items-center justify-between w-[100%]">
            <h1 className="text-2xl font-bold">Member</h1>
            {/* <Link to="/member/add"> */}
            <Button
              type="button"
              children={"Add Member"}
              text="Add Member"
              color="null"
              styles="bg-[#2c2f32] text-[#e5e5e5]"
              icon="fas fa-plus"
            />
            {/* </Link> */}
          </div>
          {/* <div className="flex items-start my-5">
            <div className="flex items-center flex-col p-3 w-[200px] bg-[#fff] shadow-md rounded-md p-2 cursor-pointer">
              <img
                src={profile}
                alt="user"
                width={75}
                height={75}
                className="mb-3"
              />
              <p className="mb-1 text-lg font-semibold">Admin</p>
              <p className="font-sm text-[#b2b2b2]">
                lorem ipsum nadi ausn najsi najmnik cjan
              </p>
              <button className="bg-[#2c2f32] text-[#e5e5e5] px-3 py-1 rounded-md mt-3 hover:bg-[#fff] hover:border-[#2c2f32] hover:text-[#2c2f32] border-[1px] border-[#2c2f32]">
                Edit Profile
              </button>
            </div>
          </div> */}
          <div className="flex justify-between w-[100%] flex-wrap ">
            {excelData && (
              <FileUploader fileData={excelData} isDrawerOpen={true} />
            )}
            {!excelData && <LoaderBox loader={isLoading} />}
          </div>
        </div>
      </section>
    </WrapperContent>
  );
}

export default Member;
