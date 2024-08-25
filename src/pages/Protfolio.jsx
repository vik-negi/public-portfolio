import React from "react";

export default function Protfolio(props) {
  const compaines = [];
  return (
    <section
      className="section experience-section"
      id="experience"
      tabIndex="24"
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        // data-aos="zoom-in-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h1 className="title">
          Experience<p>These are the compaines where I've previously worked.</p>
        </h1>
        {compaines.map((compaine, index) => {
          return (
            <div className="expContainer">
              <ul className="listOfExp">
                <li className="companyName active" tabIndex="24">
                  {compaine.name}
                </li>
              </ul>
              <div className="expDesc">
                <h4 className="expTitle">{compaine.jobTitle}</h4>
                <p className="period">
                  From {compaine.joinDate} - to {compaine.leaveDate} Year
                </p>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    alignItems: "center",
                    margin: "0 0 0 10px",
                    alignContent: "center",
                  }}
                >
                  {compaine.workedOn.map((work) => {
                    return (
                      <span
                        className="tags"
                        style={{
                          backgroundColor: "#a1a1a1",
                          padding: "5px 15px",
                          borderRadius: "15px",
                          display: "inline",
                          margin: "5px",
                        }}
                      >
                        {work}
                      </span>
                    );
                  })}
                </div>

                <p className="desc">{compaine.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
