import React from "react";
import create from "../../../utils/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const AllTextFields = ({
  title,
  value,
  placeholder,
  textArea,
  name,
  lines,
  classs,
  isCheckBox = false,
  checked = false,
  isFullWidth = true,
  isSelect = false,
  isRequired = false,
  loading = false,
  size,
  options,
  onUseAI,
  onChange = () => {},
}) => {
  const theme = create();
  if (options === undefined || options === null) {
    options = ["Beginner", "Intermediate", "Advanced", "Expert"];
  }
  return (
    <div
      className={`flex w-full mt-10 ${
        isCheckBox === true && isFullWidth === false ? "flex-row" : "flex-col"
      }  justify-start gap-x-5 items-start ${classs}`}
    >
      <label
        className={` w-full ${
          theme.theme === "light" && "text-[#1e1e2f]"
        } font-semibold text-[14px]`}
      >
        {title} {isRequired && <span className="text-[#ff0000]">*</span>}
        {onUseAI && (
          <button
            onClick={onUseAI}
            className="text-[12px] font-normal border-primary-500 border-[1px] rounded-[8px] px-4 py-1 ml-2 text-primary-500"
          >
            Use AI{" "}
            <FontAwesomeIcon icon={faStar} className="text-primary-500 ml-2" />
          </button>
        )}
      </label>

      {isSelect && (
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className={`w-full h-[${
            size != null ? size : "45px"
          }] rounded-[10px] text-[13px] border-[1px] ${
            theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"
          } border-[#e8e9fa] outline-none px-4 mt-2 ${
            theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
          } `}
        >
          {options.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      )}

      {(value || value == "" || value == null) &&
        textArea === undefined &&
        !isSelect && (
          <div className="relative w-full">
            {loading && (
              <div className="absolute flex justify-center items-center w-full h-full z-50">
                <Loader />
              </div>
            )}
            <input
              onChange={(e) => onChange(e.target.value)}
              name={name}
              value={value}
              checked={checked}
              type={isCheckBox ? "checkbox" : "text"}
              className={`${isFullWidth ? "w-full" : ""} h-[${
                size != null ? size : "45px"
              }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
                theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
              } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
              placeholder={placeholder}
            />
          </div>
        )}
      {textArea != null && (
        <div className="relative w-full">
          {loading && (
            <div className="absolute flex justify-center items-center w-full h-full z-50">
              <Loader />
            </div>
          )}
          <textarea
            type="text"
            name={name}
            onChange={(e) => onChange(e.target.value)}
            rows={lines || 6}
            className={`w-full  rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
              theme.theme === "light" ? "text-[#1e1e2f]" : "text-white"
            } ${theme.theme === "light" ? "bg-white" : "bg-[#1e1e2f]"}`}
            placeholder={placeholder}
            value={textArea}
          />
        </div>
      )}
    </div>
  );
};

export default AllTextFields;
