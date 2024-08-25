import React from "react";

const SectionHeader = (props) => {
  return (
    <div>
      <h1 className="title">
        {props.title}
        <p>{props.description}</p>
      </h1>
    </div>
  );
};

export default SectionHeader;
