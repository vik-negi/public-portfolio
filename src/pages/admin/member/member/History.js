import React from "react";
import { HistoryItem, Notification } from "./AddCallDetails";
import { formatDate } from "../../../utils/formateDate";
import { useLocation } from "react-router-dom";

const History = () => {
  const location = useLocation();
  const historyList = location.state?.historyList;
  return (
    <div className="mr-5">
      <div className="flex flex-col mt-5">
        <Notification
          imageAlt="alt_image"
          imageUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8fcab6d-bfd2-464b-895c-b0731ff3ee9e/ddew82u-19bc3c11-950c-42d8-812b-91ca019fffcd.png"
          message="All your previous records are here"
          title="History"
          key="history"
        />
        <div className="flex mt-5 flex-col justify-start mx-6  w-[100%]">
          {historyList.length > 0 &&
            historyList.map((history) => (
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
    </div>
  );
};

export default History;
