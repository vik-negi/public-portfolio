import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { star } from "../../../assets/icons";
import { Tooltip } from "bootstrap";
import WrapperContent from "../../../WrapperContent";

export const DataItem = ({ keyData, value }) => {
  return (
    <div className="flex flex-row pb-3">
      <span className="text-[#2b2b2b] text-[15px] font-medium">
        {keyData && keyData + ": "}
      </span>
      <span className="text-[#373757] text-[15px] font-medium ml-2">
        {value ?? ""}
      </span>
    </div>
  );
};

const ViewMembers = () => {
  const { id } = useParams();

  const location = useLocation();
  const data = location.state?.cellData;

  const data1 = {
    slNo: 1,
    Branch: "Lanco Hills",
    Name: "Mr. Luckey",
    Phone: "8328416306",
    MembershipDisplayName: "Bonus (1 Hour)",
    TotalHoursGiven: 1,
    RemainingHrs: 6,
    ConsumedHrs: -5.0,
    LastMemAmountExcludingGST: 0,
    FrequencyAvg1hrInnoofdays: 8662,
    VIPType: "Regular Customer",
    PurchaseDate: "28-07-2018",
    LastVisitDate: "",
    NoofDays: -43309,
    callingDoneBy: "",
    majorReason: "",
    subReason: "",
    remarksClusterBmDm: "",
    followupDoneByYeRishtaKyaKhelataHai: "",
    whatsapp: "",
    sms: "",
    totalCallsDoneToClient: "",
  };

  return (
    <WrapperContent title="Members/view">
      <div className="main-content">
        <div className="main">
          {/* <LoaderBox loader={isLoading} />
          <LoaderBox loader={memberLoading} /> */}

          {
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="card rounded-[5px]"
                    style={{
                      minHeight: "95vh",
                    }}
                  >
                    <div className="card-body">
                      <div className="user-profile">
                        <div className="row">
                          <div className="user-profile-name mb-3 flex items-center">
                            {data?.Name}
                            {data?.VIPType == "VIP Customer" && (
                              <span className="ml-2">
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-[20px]"
                                />
                              </span>
                            )}
                          </div>
                          {/* <div className="user-Location">
                            <i className="ti-location-pin"></i> {data?.city}
                          </div> */}

                          <div className="flex flex-row justify-start mx-6 flex-wrap w-[100%]">
                            <div className="w-[400px] mb-3">
                              <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                                Personal Details
                              </p>
                              <div className="flex flex-col w-[400px] rounded-lg shadow-md bg-[#e6faff] p-6">
                                <DataItem keyData="Name" value={data?.Name} />
                                <DataItem keyData="Phone" value={data?.Phone} />
                                <DataItem
                                  keyData="Branch Name"
                                  value={data?.Branch}
                                />
                                <DataItem
                                  keyData="Membership/Display Name"
                                  value={data?.MembershipDisplayName}
                                />
                              </div>
                            </div>
                            <div className="mx-auto"></div>
                            <div className="w-[350px] mb-3">
                              <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                                Membership Details
                              </p>
                              <div className="flex flex-col w-[350px] rounded-lg shadow-md bg-[#e6faff] p-6">
                                <DataItem
                                  keyData="Total Hours Given"
                                  value={data?.TotalHoursGiven}
                                />
                                <DataItem
                                  keyData="Remaining Hrs "
                                  value={data?.RemainingHrs}
                                />
                                <DataItem
                                  keyData="Consumed Hrs"
                                  value={data?.ConsumedHrs}
                                />
                                <DataItem
                                  keyData="Last Mem Amount(Excluding GST)"
                                  value={data?.LastMemAmountExcludingGST}
                                />
                                <DataItem
                                  keyData="Frequency(Avg 1 hr In no. of days )"
                                  value={data?.FrequencyAvg1hrInnoofdays}
                                />
                                <DataItem
                                  keyData="Purchase Date"
                                  value={data?.PurchaseDate}
                                />
                                <DataItem
                                  keyData="No. of Days "
                                  value={data?.NoofDays}
                                />
                              </div>
                            </div>
                          </div>
                          {/* {data?.MajorReason && (
                            <div className="mb-3">
                              <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                                Major Reason
                              </p>
                              <div className="mx-6 flex flex-col rounded-lg shadow-md bg-[#e6faff] p-6">
                                <DataItem
                                  keyData=""
                                  value={
                                    data?.MajorReason == ""
                                      ? "The product has exceeded my expectations in a very positive way. Its performance, quality, and usability have all contributed to a great experience."
                                      : data?.MajorReason
                                  }
                                />
                              </div>
                            </div>
                          )}
                          {data?.subReason && (
                            <div className="mb-3">
                              <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                                Sub Reason
                              </p>
                              <div className="mx-6 flex flex-col rounded-lg shadow-md bg-[#e6faff] p-6">
                                <DataItem
                                  keyData=""
                                  value={
                                    data?.SubReason == ""
                                      ? "I particularly appreciate the thoughtful features and functionality that the product offers. They align perfectly with my needs and have significantly enhanced my overall experience."
                                      : data?.SubReason
                                  }
                                />
                              </div>
                            </div>
                          )}
                          {data?.RemarksClusterBmDm && (
                            <div className="mb-3">
                              <p className="pl-6 text-[#373757] text-[15px] font-medium mb-3">
                                Remarks Cluster BM/DM
                              </p>
                              <div className="mx-6 flex flex-col rounded-lg shadow-md bg-[#e6faff] p-6">
                                <DataItem
                                  keyData=""
                                  value={
                                    data?.RemarksClusterBmDm == ""
                                      ? "I am genuinely impressed by how well the product has performed. Its value for the price is exceptional. This positive experience has solidified my trust in the product and the brand behind it."
                                      : data?.RemarksClusterBmDm
                                  }
                                />
                              </div>
                            </div>
                          )} */}

                          {/* <div className="col-lg-8">
                          <div className="custom-tab user-profile-tab">
                            <div className="tab-content">
                              <div
                                role="tabpanel"
                                className="tab-pane active"
                                id="1"
                              >
                                <div className="contact-information">
                                  <div className="phone-content">
                                    <span className="contact-title">
                                      Phone:
                                    </span>
                                    <span className="phone-number">
                                      +91 {data?.phone}
                                    </span>
                                  </div>
                                  <div className="address-content">
                                    <span className="contact-title">
                                      Email Address:
                                    </span>
                                    <span className="mail-address">
                                      {data?.email}
                                    </span>
                                  </div>
                                  <div className="address-content">
                                    <span className="contact-title">
                                      Total Hours:
                                    </span>
                                    <span className="mail-address">
                                      {data?.totalHours} hrs
                                    </span>
                                  </div>
                                  <div className="email-content">
                                    <span className="contact-title">
                                      Remaining Hours:
                                    </span>
                                    <span className="contact-email">
                                      {data?.remainingHours} hrs
                                    </span>
                                  </div>
                                  <div className="email-content">
                                    <span className="contact-title">
                                      Consumed Hours:
                                    </span>
                                    <span className="contact-email">
                                      {data?.consumedHours} hrs
                                    </span>
                                  </div>
                                  <div className="email-content">
                                    <span className="contact-title">
                                      Last Called:
                                    </span>
                                    <span className="contact-email">
                                      {formatDate(data?.lastCalled)}
                                    </span>
                                  </div>
                                </div>
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
            </div>
          }
        </div>
      </div>
    </WrapperContent>
  );
};

export default ViewMembers;
