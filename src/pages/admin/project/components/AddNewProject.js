import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AdmiProjectItem } from "../AdminProjects";

import create from "../../../../utils/Theme";
export const AddProjectItem = ({
  title,
  value,
  placeholder,
  textArea,
  lines,
  classs,
  onChange,
  isCheckBox = false,
  isFullWidth = false,
  isSelect = false,
  dropdownList,
  size,
}) => {
  const theme = create();

  const options = ["Bignner", "Intermediate", "Advanced", "Expert"];
  return (
    <div className="">
      <div
        className={`flex w-full ${
          isCheckBox === true ? "flex-row" : "flex-col"
        } justify-start items-start mb-10 ${classs}`}
      >
        <label
          className={` ${
            theme.theme === "light" && "text-[#1e1e2f]"
          } font-semibold text-[14px]`}
        >
          {title}
        </label>

        {isSelect && (
          <select
            onChange={onChange}
            className={`w-full h-[${
              size != null ? size : "45px"
            }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
              theme.theme !== "light" && "text-[#1e1e2f]"
            } `}
          >
            {options.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        )}

        {(value || value == "") && !isSelect && dropdownList == null && (
          <input
            onChange={onChange}
            type={isCheckBox ? "checkbox" : "text"}
            className={`w-full h-[${
              size != null ? size : "45px"
            }] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
              theme.theme !== "light" && "text-[#1e1e2f]"
            } `}
            placeholder={placeholder}
            value={value}
          />
        )}
        {dropdownList && (
          <div className="w-full h-[45px] rounded-[10px] text-[13px] outline-none px-4 mt-2">
            <select
              onChange={onChange}
              className={`w-full h-[45px] rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 mt-2 ${
                theme.theme !== "light" && "text-[#1e1e2f]"
              } `}
            >
              {dropdownList.map((item, index) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        )}
        {textArea && (
          <textarea
            type="text"
            onChange={onChange}
            rows={lines || 6}
            className={`w-full rounded-[10px] text-[13px] border-[1px]  border-[#e8e9fa] outline-none px-4 py-2 mt-2 ${
              theme.theme !== "light" && "text-[#1e1e2f]"
            } `}
            placeholder={placeholder}
            value={textArea}
          />
        )}
      </div>
    </div>
  );
};
