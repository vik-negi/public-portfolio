import { React, useState } from "react";

const IndividualDropdown = ({ data, selectedOption, onChange }) => {
  return (
    <div className="custom-selected">
      <select
        value={selectedOption}
        className=""
        onChange={onChange}
        style={customSelectStyles}
      >
        {data.map((branch, index) => (
          <option
            key={index}
            value={branch}
            className="capitalize py-2 text-sm h-[30px]"
          >
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
};

const Dropdowns = ({ fileData }) => {
  const [selectedSelectedDays, setSelectedSelectedDays] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedRemainingHours, setSelectedRemainingHours] = useState("");
  // const [selectedDays, setSelectedDays] = useState([{}]);

  const selectedHours = [
    {
      level: "Select All",
      hours: [0, 50],
    },
    {
      level: "A level",
      hours: [0, 0.99],
    },
    {
      level: "B level",
      hours: [1, 1.99],
    },
    {
      level: "C level",
      hours: [2, 2.99],
    },
    {
      level: "D level",
      hours: [3, 4.99],
    },
    {
      level: "E level",
      hours: [5, 9.99],
    },
    {
      level: "F level",
      hours: [10, 250],
    },
  ];
  const selectedDays = ["Select All", "45 Days or Less", "More than 45 Days"];

  const getUniqueBranches = () => {
    const branch_index = fileData[0].indexOf("Branch/Display Name");
    if (fileData) {
      const branches = [
        "Select All",
        ...new Set(
          fileData.slice(1).map((item) => {
            return item[branch_index];
          })
        ),
      ];
      return branches;
    }
    return [];
  };

  const uniqueBranches = getUniqueBranches();

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <IndividualDropdown
        data={selectedHours.map((item) => item.level)}
        selectedOption={selectedRemainingHours}
        onChange={(e) => setSelectedRemainingHours(e.target.value)}
      />
      <IndividualDropdown
        data={uniqueBranches}
        selectedOption={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      />
      <IndividualDropdown
        data={selectedDays}
        selectedOption={selectedSelectedDays}
        onChange={(e) => setSelectedSelectedDays(e.target.value)}
      />
    </div>
  );
};

export default Dropdowns;

const customSelectStyles = {
  width: "300px",
  padding: "8px",
  border: "1px solid #ccc" /* Add border for better visual separation */,
  borderRadius: "4px",
  boxSizing: "border-box",
  boxShadow: "0 1px 1px rgba(0,0,0,.075) inset, 0 0 8px rgba(102,175,233,.6)",
  transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
  backgroundColor: "#fff",
  backgroundImage: "none",
  color: "#555",
  ".option": {
    padding: "20px",
  },
};
