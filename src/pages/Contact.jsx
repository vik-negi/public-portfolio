import {
  faEnvelope,
  faEnvelopeSquare,
  faMailForward,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useWindowWide } from "./admin/utils/useWindowWide";
import { publicInfo } from "../axios/dashboard";
import { useQuery } from "react-query";

// import { IconMail, IconMapSearch } from "@tabler/icons-react";
// import axios from "axios";

const Contact = ({ username }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { data, isLoading } = useQuery(
    "main-section",
    () => publicInfo(username),
    {
      onSuccess: (data) => {
        // setUserInfo(data.data?.data);

        console.log("data mmmmmmmm: ", data?.data?.data);
        setPublicProfile(data?.data?.data);
      },
      onError: (error) => {
        // setUserInfo(MyData.publicInfo);
      },
    }
  );

  const [publicProfile, setPublicProfile] = useState(null);
  const above650 = useWindowWide(650);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      // setErrors(validationErrors);
      return;
    }

    try {
      // const response = await axios.post(
      //   "https://example.com/api/contact",
      //   form
      // );
      // console.log(response.data);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // const data = [
  //   {
  //     icon: faMapLocation,
  //     title: "Location",
  //     info: "New Delhi, India",
  //   },
  //   {
  //     icon: faEnvelope,
  //     title: "Mail",
  //     info: "vikramnegi175@gmail.com",
  //   },
  // ];
  if (publicProfile == null) return <></>;

  return (
    <section id="contact" className={`${!above650 && "p-10"}`}>
      <div className=" w-full max-w-[1024px]">
        <div className="">
          <div className="mb-5">
            <p>contact</p>
            <h3 className="mt-2 text-4xl font-bold text-[#e4e4e4] mb-10">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className={`flex ${above650 ? "flex-row" : "flex-col"}`}>
            <div className="flex mb-10 mr-[10rem]">
              <span className="rounded-full bg-[#26262648] h-[55px] w-[55px] flex items-center justify-center mr-5 blue-shadow">
                <FontAwesomeIcon
                  className="text-white h-10"
                  icon={faMapLocation}
                  width="55px"
                  height="55px"
                />
              </span>
              <div className="contact__info">
                <h3 className="text-2xl font-semibold text-[#e4e4e4]">
                  Location
                </h3>
                <p>{publicProfile.user?.location ?? "Remote"}</p>
              </div>
            </div>
            <div className="flex mb-10 mr-[10rem]">
              <span className="rounded-full bg-[#26262648] h-[55px] w-[55px] flex items-center justify-center mr-5 blue-shadow">
                <FontAwesomeIcon
                  className="text-white h-10"
                  icon={faEnvelope}
                  width="55px"
                  height="55px"
                />
              </span>
              <div className="contact__info">
                <h3 className="text-2xl font-semibold text-[#e4e4e4]">Mail</h3>
                <p>{publicProfile.user?.email}</p>
              </div>
            </div>

            {/* <div className="contact__icon-box">
              <span>
       
                <FontAwesomeIcon icon={faEnvelope} width={30} height={30} />
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:stefan.topallovic@gmail.com">
                  stefan.topallovic@gmail.com
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>

    // <section className="row col-12" id="projects" tabIndex="18">
    //   <h2>Contact Us</h2>
    //   <div
    //     className="container p-10 bg-[#fff]  rounded-[1rem] shadow-[0px 0px 10px rgba(0,0,0,0.2)]"
    //     style={{
    //       maxWidth: "700px",
    //     }}
    //   >
    //     <form
    //       className="contact-form
    //     "
    //       onSubmit={handleSubmit}
    //     >
    //       <div className="flex flex-col mb-[3rem] text-[#000]  ">
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           placeholder="Name"
    //           className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
    //           value={form.name}
    //           onChange={handleChange}
    //         />

    //         {errors.name && (
    //           <span className="text-red-500 text-[12px] font-semibold">
    //             {errors.name}
    //           </span>
    //         )}
    //       </div>
    //       <div
    //         className="flex flex-col mb-[3rem] text-[#000]
    //       "
    //       >
    //         <input
    //           type="email"
    //           id="email"
    //           placeholder="Email"
    //           name="email"
    //           className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
    //           value={form.email}
    //           onChange={handleChange}
    //         />

    //         {errors.email && (
    //           <span
    //             className="text-red-500 text-[12px] font-semibold
    //         "
    //           >
    //             {errors.email}
    //           </span>
    //         )}
    //       </div>
    //       <div className="flex flex-col mb-[3rem] text-[#000]  ">
    //         <textarea
    //           id="message"
    //           placeholder="Message"
    //           name="message"
    //           className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
    //           value={form.message}
    //           onChange={handleChange}
    //         />

    //         {errors.message && (
    //           <span className="text-red-500 text-[12px] font-semibold">
    //             {errors.message}
    //           </span>
    //         )}
    //       </div>
    //       <button
    //         className="w-[200px] bg-[#16a34a] py-4 rounded-[10px] text-white font-bold text-[14px] hover:bg-[#1a4731] transition duration-300 ease-in-out"
    //         type="submit"
    //       >
    //         Send Message
    //       </button>
    //     </form>
    //   </div>
    // </section>
  );
};

export default Contact;
