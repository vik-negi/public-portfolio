import React, { useState } from "react";
// import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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

  return (
    <section className="row col-12" id="projects" tabIndex="18">
      <h2>Contact Us</h2>
      <div
        className="container p-10 bg-[#fff]  rounded-[1rem] shadow-[0px 0px 10px rgba(0,0,0,0.2)]"
        style={{
          maxWidth: "700px",
        }}
      >
        <form
          className="contact-form 
        "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-[3rem] text-[#000]  ">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className="text-red-500 text-[12px] font-semibold">
                {errors.name}
              </span>
            )}
          </div>
          <div
            className="flex flex-col mb-[3rem] text-[#000]  
          "
          >
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span
                className="text-red-500 text-[12px] font-semibold
            "
              >
                {errors.email}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-[3rem] text-[#000]  ">
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="border-none bg-[#f2f2f2] py-3 rounded-[0.5rem] p-[0.5rem] outline-none focus:border-[#000]"
              value={form.message}
              onChange={handleChange}
            />

            {errors.message && (
              <span className="text-red-500 text-[12px] font-semibold">
                {errors.message}
              </span>
            )}
          </div>
          <button
            className="w-[200px] bg-[#16a34a] py-4 rounded-[10px] text-white font-bold text-[14px] hover:bg-[#1a4731] transition duration-300 ease-in-out"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
