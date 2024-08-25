import React, { useState } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";

function FileUploader({ fileData, isDrawerOpen = false }) {
  const navigate = useNavigate();
  const headers = [
    "SLNo",
    "Name",
    "Phone",
    "MembershipDisplayName",
    "TotalHoursGiven",
    "RemainingHrs",
    "ConsumedHrs",
    "Action",
    "Action",
  ];

  const handleCellClick = (cell, cellIndex) => {
    // Check if the clicked cell is in the "view" column
    console.log("cell handleCellClick", cell);

    if (cellIndex === 6) {
      // Navigate to the desired page using history.push()
      navigate(`/members/view/${cell["SLNo"]}`, { state: { cellData: cell } }); // Replace with your target page's URL
    } else if (cellIndex === 7) {
      navigate("/members/add-call-details/wsj39s83hnn382he2ij39hnj"); // Replace with your target page's URL
    }
  };
  return (
    <div className={`flex justify-between w-[100%] flex-wrap `}>
      <div
        className={`p-4 bg-white shadow-lg rounded-lg mb-5 lg:w-[100%] md:w-[100%] sm:w-[100%]`}
      >
        <p className="text-lg font-bold mb-4">Members</p>
        {fileData && (
          <div className={`overflow-x-scroll mt-4`}>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  {headers.map((header) => (
                    <th key={header} className="border border-gray-300 p-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fileData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* {row.map((cell, cellIndex) => ( */}
                    {Object.entries(row).map(
                      ([key, value], cellIndex) =>
                        headers.includes(key) && (
                          <td
                            key={cellIndex}
                            className={`border border-gray-300 p-2  ${
                              cellIndex == 6 || cellIndex == 7
                                ? "cursor-pointer"
                                : ""
                            }`}
                            onClick={() => handleCellClick(row, cellIndex)}
                          >
                            <p
                              style={{
                                justifyContent: "center",
                                // padding: "10px", // Add padding around the cell content
                                // margin: "5px",
                              }}
                              className="flex flex-row"
                            >
                              {value}
                            </p>
                          </td>
                        )
                    )}
                    <td className="border border-gray-300 p-2 cursor-pointer">
                      <Link
                        to={`/members/view/${row["SLNo"]}`}
                        state={{ cellData: row }}
                      >
                        <p
                          style={{
                            justifyContent: "center",
                            padding: "10px", // Add padding around the cell content
                            margin: "5px",
                            backgroundColor: "#000",
                            // margin: value === true ? "5px" : "0px",
                            borderRadius: "5px",
                            //
                            color: "white",
                          }}
                        >
                          View
                        </p>
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2 cursor-pointer">
                      <Link
                        to={`/members/add-call-details/${row["SLNo"]}`}
                        state={{ cellData: row }}
                      >
                        <p
                          style={{
                            justifyContent: "center",
                            padding: "10px", // Add padding around the cell content
                            margin: "5px",
                            backgroundColor: "#000",
                            // margin: value === true ? "5px" : "0px",
                            borderRadius: "5px",
                            //
                            color: "white",
                          }}
                        >
                          Add
                        </p>
                      </Link>
                    </td>

                    {/* ))} */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
