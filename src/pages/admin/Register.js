import React, { useState } from "react";
import { social } from "../../assets/svg/social";
import create from "../../utils/Theme";
import { signin, signup } from "../../axios/auth";
import { Link, useNavigate } from "react-router-dom";

import { errorMessage, successMessage } from "../../utils/Toast";

import { useQuery, useQueryClient, useMutation } from "react-query";
import { TextField } from "./Login";
import { useWindowWide } from "./utils/useWindowWide";

const LoginWithSocial = ({ svgImage }) => {
  return (
    <button
      type="button"
      data-te-ripple-init
      fill="currentColor"
      data-te-ripple-color="light"
      className="mx-1 h-16 w-16 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      <img src={svgImage} alt="alt" />
    </button>
  );
};

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [loading, setLoading] = useState(false);

  const mutation = useMutation((data) => signup(data), {
    onSuccess: (data) => {
      successMessage("Login Successfull");

      // window.location.reload();
      setLoader(false);
      console.log("login data : ", data?.data?.data);

      setTimeout(() => {
        navigate("/admin/verify");
        window.location.reload();
        setLoader(false);
      }, 1000);
      // Verify("/admin/dashboard");
    },
    onError: () => {
      errorMessage("Login Failed");
    },
  });

  // const handleSubmit = (data) => {
  //   if (registerDat.email !== "" && registerDat.password !== "") {
  //     mutation.mutate(registerDat);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { email, password } = registerData;
    try {
      if (!email) {
        errorMessage("Email is required!");
      } else if (!password) {
        errorMessage("Password is required!");
      } else {
        // do signin
        mutation.mutate(registerData);
      }
    } catch (error) {
      errorMessage("Invaid credential");
    } finally {
      setLoader(false);
    }
  };

  const store = create();
  const width425 = useWindowWide(425);

  return (
    <div className=" sm:px-[6rem] items-center flex justify-center fontCatamaran">
      <div
        className={`my-10 sm:p-[20px] p-[20px] md:p-[52px] rounded-2xl g-6 flex flex-wrap items-center justify-center lg:justify-between  bg-white ${
          width425 && "border-[1px] border-neutral-200"
        } 
         transition duration-150 ease-in-out w-[38rem]
      `}
      >
        <div className="w-full">
          <form>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-5 mr-4  font-medium md:text-[28px] text-[20px]">
                Register
                {/* in with */}
              </p>
              {/* <LoginWithSocial svgImage={social.facebook} />
              <LoginWithSocial svgImage={social.twitter} />
              <LoginWithSocial svgImage={social.linkedin} /> */}
            </div>

            {/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 mb-5">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                Or
              </p>
            </div> */}

            <TextField
              name="email"
              value={registerData.email}
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value });
              }}
              a
              label="Email address"
            />
            <TextField
              name="password"
              value={registerData.password}
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                });
              }}
              label="Password"
            />
            <TextField
              name="firstName"
              value={registerData.firstName}
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  firstName: e.target.value,
                });
              }}
              label="FirstName"
            />
            <TextField
              name="lastName"
              value={registerData.lastName}
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  lastName: e.target.value,
                });
              }}
              label="LastName"
            />

            <div className=" flex items-center justify-between ">
              <div className="  min-h-[1.5rem] flex items-center">
                <input type="checkbox" value="" />
                <label
                  className="inline-block text-[12px] ml-[10px] hover:cursor-pointer text-primary font-semibold hover:underline"
                  for="exampleCheck2"
                >
                  Agree to terms and conditions
                </label>
              </div>
            </div>

            <div className="text-center lg:text-left mt-[20px]">
              <button
                type="button"
                className={`w-full px-4 py-4 rounded-lg text-[14px] font-medium ${
                  // store.theme !== "light"
                  //   ? "bg-white text-[#232323]"
                  //   :
                  "bg-[#232323] text-white"
                }`}
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handleSubmit}
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? " Loading..." : "Register"}
              </button>

              <p className="mb-0 text-xl font-semibold mt-2 pt-1 text-[12px] ">
                Already have an account? &nbsp;
                <a
                  href="/#/admin/login"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
