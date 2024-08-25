import React, { useEffect, useState } from "react";
import { DataItem } from "./ViewMember";
import {
  getDutyManagerHistory,
  editHistoryAndUpdateSheet,
} from "../../../axios/duty-manager";
import { useMutation } from "react-query";
import { useParams, useLocation, Link } from "react-router-dom";
import { star } from "../../../assets/icons";
import WrapperContent from "../../../WrapperContent";
import { useQuery } from "react-query";
import { errorMessage, successMessage } from "../../../utils/Toast";
import { formatDate } from "../../../utils/formateDate";

export const DropdownSelected = ({
  keyData,
  list,
  ediatble,
  name,
  handleSelectDataChange,
}) => {
  function handleNullCheck(data, option) {
    if (data === null || data === "" || data === undefined) {
      return `Select ${option}`;
    } else {
      return data;
    }
  }
  return (
    <div className="flex flex-row">
      <span className="contact-title">{keyData ? keyData + ": " : ""}</span>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle text-[#373757] border-none focus:outline-none"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          placeholder="Select Major Reason"
          aria-expanded="false"
        >
          {handleNullCheck(ediatble, keyData)}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {list.map((item) => (
            <a
              className="dropdown-item"
              href="#"
              name={name}
              data-value={item}
              key={item}
              onClick={handleSelectDataChange}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Notification({ imageUrl, imageAlt, title, message }) {
  return (
    <div className=" max-w-sm flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={imageUrl} alt={imageAlt} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  );
}

export const HistoryItem = ({
  dateTime,
  majorReason,
  subReason,
  remarks,
  callingDoneBy,
}) => {
  return (
    <div className="mb-5">
      <div className="flex">
        <i className="ti-calendar text-[#2c2f32] text-[20px] m-0 p-0"></i>
        <p className="pl-6 text-[#373757] text-[15px] font-medium m-0">
          {dateTime}
        </p>
      </div>
      <div className="ml-2 w-[2px] bg-[#2c2f32] h-[30px]"></div>
      <div className="flex flex-col rounded-[5px] shadow-md ml-2 bg-[#e6faff] p-6">
        {callingDoneBy && (
          <DataItem keyData="Calling Done By" value={callingDoneBy} />
        )}
        {majorReason && <DataItem keyData="Major Reason" value={majorReason} />}
        {subReason && <DataItem keyData="Sub Reason" value={subReason} />}
        {remarks && <DataItem keyData="Remarks" value={remarks} />}
      </div>
    </div>
  );
};

const MIN_TEXTAREA_HEIGHT = 5;
export const DataItemEditable = ({
  value,
  editableKey,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-row pb-3">
      <textarea
        rows={
          Math.max(MIN_TEXTAREA_HEIGHT, value?.split("\n").length) > 5
            ? 5
            : Math.max(MIN_TEXTAREA_HEIGHT, value?.split("\n").length)
        }
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value ?? ""}
        className="w-full  text-[15px] ml-5 text-[#373757] bg-transparent focus:outline-none border-none autosize h-auto"
        name={editableKey}
      />
    </div>
  );
};

const AddCallDetails = () => {
  const { id } = useParams();

  const location = useLocation();
  const cellData = location.state?.cellData;

  const { mutate } = useMutation(
    (data) => {
      return editHistoryAndUpdateSheet({ id: id, ...data });
    },
    {
      onError: (error) => {
        console.log("error", error);
        errorMessage(error?.message);
      },
      onSuccess: (data) => {
        console.log("data", data);
        successMessage("Data saved successfully");
        historyList.push(data?.data?.data);
      },
    }
  );

  const handleSaveData = () => {
    if (
      editabledData?.MajorReason === undefined ||
      editabledData?.SubReason === undefined ||
      editabledData?.CallingDoneBy === undefined ||
      editabledData?.RemarksClusterBmDm === undefined
    ) {
      errorMessage("All fields are required");
      return;
    }
    try {
      const data = {
        majorReason: editabledData?.MajorReason,
        subReason: editabledData?.SubReason,
        callingDoneBy: editabledData?.CallingDoneBy,
        remark: editabledData?.RemarksClusterBmDm,
        SLNo: parseInt(id),
      };
      console.log("data", data);
      mutate(data);
    } catch (err) {
      console.log("err  ", err);
      errorMessage("Error while saving data ", err?.message);
    }
  };

  const [editabledData, setEditabledData] = useState({});

  const { data, isSuccess, isLoading, error, isError } = useQuery([], () =>
    getDutyManagerHistory(id)
  );

  const [historyList, setHistoryList] = useState([]);

  if (isError) {
    errorMessage(error?.message);
  }
  if (isSuccess) {
  }

  useEffect(() => {
    if (data?.data?.data) {
      const lengthOfData = data?.data?.data.length;
      const lastData = data?.data?.data[lengthOfData - 1];
      setHistoryList(data?.data?.data);
      console.log("lastData", lastData?.callingDoneBy);

      setEditabledData({
        CallingDoneBy: lastData?.CallingDoneBy,
        MajorReason: lastData?.MajorReason,
        SubReason: lastData?.SubReason,
        createdAt: formatDate(lastData?.createdAt),
        RemarksClusterBmDm: lastData?.RemarksClusterBmDm,
      });
      console.log("callingDoneBy", editabledData?.callingDoneBy);
    }
  }, [data?.data?.data]);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    console.log("data : ", e.target.value, "name ", name);
    setEditabledData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleSelectDataChange(e) {
    e.preventDefault();
    const newValue = e.target.getAttribute("data-value");
    console.log("data : ", newValue, "name : ", e.target.name);
    setEditabledData((prevData) => ({
      ...prevData,
      [e.target.name]: newValue,
    }));
  }

  const MajorReason = [
    "PHONE_NO.",
    "NOT INTERESTED",
    "DUPLICATION",
    "PRICE",
    "SERVICE",
    "MAY_BE",
    "Already_Renewed",
    "Renewed",
    "Booked_Appointment",
  ];
  const [SubReason, setSubReason] = useState([]);
  useEffect(() => {
    // Update the SubReason list based on the selected MajorReason
    switch (editabledData?.MajorReason) {
      case "PHONE_NO.":
        setSubReason([
          "PHONE NO. / Switched off",
          "PHONE NO. / Customer cut the call",
          "PHONE NO. / Wrong number (Person changed)",
          "PHONE NO. / Asked to call later",
          "PHONE NO. / Customer is Busy",
          "PHONE NO. / No Network",
          "PHONE NO. / Incoming not available",
          "PHONE NO. / Answered but Customer cut the calls",
          "PHONE NO. / Not In Service",
          "PHONE NO. / Customer Blocked the outlet Number",
          "PHONE NO./DNDb Customer",
        ]);
        break;
      case "NOT INTERESTED":
        setSubReason([
          "NOT INTERESTED / Not interested to take Spa any more",
          "NOT INTERESTED / Shifted to some other Spa",
          "NOT INTERESTED / Shifted to Meghavi City",
          "NOT INTERESTED/ Shifted to Non-Meghavi City",
        ]);
        break;
      case "DUPLICATION":
        setSubReason([
          "DUPLICATION / Guest has membership on another number",
          "DUPLICATION / Enter current number:",
        ]);
        break;
      case "PRICE":
        setSubReason([
          "PRICE / Askin same offer",
          "PRICE / Last Membership : Silver 14, 50pe50",
          "PRICE / Guest Ex in what deal (Hours and Price)",
        ]);
        break;
      case "SERVICE":
        setSubReason([
          "SERVICE / Ambience/infra/hygiene",
          "SERVICE / Therapist Quality/ behaviour",
          "SERVICE / FO Behaviour",
          "SERVICE / No Appointments",
        ]);
        break;
      case "MAY_BE":
        setSubReason([
          "MAY BE / Week 2",
          "MAY BE / Week 3",
          "MAY BE /Week 4",
          "MAY BE / Week 5",
          "MAY BE/ Next Visit",
          "MAY BE / Next Month",
          "MAY BE / Time not fixed / Later",
          "MAY BE / Fixed Date(Mention Date in Remarks)",
        ]);
        break;
      case "Already_Renewed":
        setSubReason(["Already Renewed"]);
        break;
      case "Renewed":
        setSubReason(["RENEWED / Guest details", "RENEWED / Package renewed"]);
        break;
      case "Booked_Appointment":
        setSubReason(["Vistied/Not Visited(Fill Date and Time in Remarks)"]);
        break;
      default:
        setSubReason([]);
        break;
    }
  }, [editabledData?.MajorReason]);

  return (
    <WrapperContent title="Members/edit">
      <div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-end">
            <button className="bg-[#e6faff] text-[#373757] border border-[#e6faff] rounded-lg px-4 py-2 mr-2">
              Cancel
            </button>
            <button
              className="bg-[#2c2f32] border border-[#2c2f32] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#000000] text-white"
              onClick={handleSaveData}
            >
              Save
            </button>
          </div>
          <div className="flex flex-row">
            <div className="col-lg-10">
              <div className="user-profile-name mb-3 flex items-center">
                {cellData?.Name}
                {cellData?.VIPType === "VIP Customer" && (
                  <span className="ml-2">
                    <img src={star} alt="star" className="w-[20px]" />
                  </span>
                )}
              </div>

              <div className="custom-tab user-profile-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a href="#1" aria-controls="1" role="tab" data-toggle="tab">
                      Details of Call
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="1">
                    <div className="contact-information">
                      <div className="phone-content">
                        <span className="contact-title">Date and Time:</span>
                        <span className="phone-number">
                          {editabledData?.createdAt}
                        </span>
                      </div>

                      <div className="address-content">
                        <span className="contact-title">Calling Done By:</span>
                        <span className="mail-address">
                          <input
                            type="text"
                            name="CallingDoneBy"
                            className="border bg-blue-50 focus:outline-none"
                            value={editabledData?.CallingDoneBy}
                            onChange={(e) =>
                              handleDataChange(e, "CallingDoneBy")
                            }
                          />
                        </span>
                      </div>
                      <DropdownSelected
                        list={MajorReason}
                        keyData="Major Reason"
                        name="MajorReason"
                        ediatble={editabledData?.MajorReason}
                        handleSelectDataChange={(e) =>
                          handleSelectDataChange(e)
                        }
                      />
                      <DropdownSelected
                        list={SubReason}
                        keyData="Sub Reason"
                        name="SubReason"
                        ediatble={editabledData?.SubReason}
                        handleSelectDataChange={(e) =>
                          handleSelectDataChange(e)
                        }
                      />
                      <div className="address-content">
                        <p className="contact-title w-[200px]">
                          Remarks Cluster BM/DM:
                        </p>
                        <div className="flex mt-3 flex-col bg-blue-50 rounded-lg shadow-md  p-3">
                          <DataItemEditable
                            value={editabledData?.RemarksClusterBmDm}
                            editableKey="RemarksClusterBmDm"
                            onChange={handleDataChange}
                            placeholder="Remarks Cluster BM/DM"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col mt-5">
            <div className="flex flex-row justify-between items-center ">
              <Notification
                imageAlt="alt_image"
                imageUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8fcab6d-bfd2-464b-895c-b0731ff3ee9e/ddew82u-19bc3c11-950c-42d8-812b-91ca019fffcd.png"
                message="All your previous records are here"
                title="History"
                key="history"
              />
              {historyList.length > 3 && (
                <div className="flex flex-row justify-end">
                  <Link
                    to={`call-record`}
                    state={{ historyList: historyList }}
                    className="text-[#373757]"
                  >
                    <button className="bg-[#e6faff] text-[#373757] border border-[#e6faff] rounded-lg px-4 py-2 mr-2">
                      View All
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex mt-5 flex-row justify-start mx-6 flex-wrap w-[100%]">
              {historyList.length > 0 &&
                historyList
                  .slice(0, 3)
                  .map((history) => (
                    <HistoryItem
                      dateTime={formatDate(history?.createdAt)}
                      majorReason={history?.MajorReason}
                      subReason={history?.SubReason}
                      callingDoneBy={history?.CallingDoneBy}
                      remarks={history?.RemarksClusterBmDm}
                    />
                  ))}
            </div>
          </div>

          <div className="user-profile">
            <div className="row">
              <div className="">
                <div className="custom-tab user-profile-tab">
                  {/* <ul className="nav nav-tabs" role="tablist"> */}
                  {/* <li role="presentation" className="active text-lg"> */}
                  {/* <a
                    href="#1"
                    aria-controls="1"
                    role="tab"
                    data-toggle="tab"
                    className="text-lg pb-5"
                  >
                    About
                  </a> */}

                  <Notification
                    imageAlt="alt_image"
                    imageUrl="https://th.bing.com/th/id/OIP.PShPUbylJ11fhHjQxkF41gHaHa?pid=ImgDet&rs=1"
                    message="All your details are here"
                    title="About"
                    key="about"
                  />

                  <div className="flex mt-5 flex-row justify-start mx-6 flex-wrap w-[100%]">
                    <div className="w-[400px] mb-3">
                      <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                        Personal Details
                      </p>
                      <div className="flex flex-col w-[400px] rounded-lg shadow-md bg-[#e6faff] p-6">
                        <DataItem keyData="Name" value={cellData?.Name} />
                        <DataItem keyData="Phone" value={cellData?.Phone} />
                        <DataItem
                          keyData="Branch Name"
                          value={cellData?.Branch}
                        />
                        <DataItem
                          keyData="Membership/Display Name"
                          value={cellData?.MembershipDisplayName}
                        />
                      </div>
                    </div>
                    <div className="mx-auto"></div>
                    <div className="min-w-[380px]  max-w-[450px] mb-3">
                      <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                        Membership Details
                      </p>
                      <div className="flex flex-col min-w-[350px]  max-w-[450px]  rounded-lg shadow-md bg-[#e6faff] p-6">
                        <DataItem
                          keyData="Total Hours Given"
                          value={cellData?.TotalHoursGiven}
                        />
                        <DataItem
                          keyData="Remaining Hrs "
                          value={cellData?.RemainingHrs}
                        />
                        <DataItem
                          keyData="Consumed Hrs"
                          value={cellData?.ConsumedHrs}
                        />
                        <DataItem
                          keyData="Last Mem Amount(Excluding GST)"
                          value={cellData?.LastMemAmountExcludingGST}
                        />
                        <DataItem
                          keyData="Frequency(Avg 1 hr In no. of days )"
                          value={cellData?.FrequencyAvg1hrInnoofdays}
                        />
                        <DataItem
                          keyData="Purchase Date"
                          value={cellData?.PurchaseDate}
                        />
                        <DataItem
                          keyData="No. of Days "
                          value={cellData?.NoofDays}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="1">
                    <div className="contact-information">
                      <div className="phone-content">
                        <span className="contact-title">Phone:</span>
                        <span className="phone-number">+91 {data?.phone}</span>
                      </div>
                      <div className="address-content">
                        <span className="contact-title">Email Address:</span>
                        <span className="mail-address">{data?.email}</span>
                      </div>
                      <div className="address-content">
                        <span className="contact-title">Total Hours:</span>
                        <span className="mail-address">{data?.totalHours}</span>
                      </div>
                      <div className="email-content">
                        <span className="contact-title">Remaining Hours:</span>
                        <span className="contact-email">
                          {data?.remainingHours}
                        </span>
                      </div>
                      <div className="email-content">
                        <span className="contact-title">Consumed Hours:</span>
                        <span className="contact-email">
                          {data?.consumedHours}
                        </span>
                      </div>
                      <div className="email-content">
                        <span className="contact-title">Last Called:</span>
                        <span className="contact-email">
                          {formatDate(data?.lastCalled)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};

export default AddCallDetails;
