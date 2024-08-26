import React, { useState } from "react";
import { social } from "../../assets/svg/social";
import create from "../../utils/Theme";
import { signin } from "../../axios/auth";
import { Link, useNavigate } from "react-router-dom";

import { errorMessage, successMessage } from "../../utils/Toast";

import { useQuery, useQueryClient, useMutation } from "react-query";
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

export const TextField = ({ name, value, onChange, label }) => {
  const isFilled = value !== "";

  return (
    <div className="relative mb-6" data-te-input-wrapper-init>
      <label
        htmlFor={`exampleFormControlInput-${name}`}
        className={` left-3 text-[14px] text-[#18181b] mb-1 font-semibold max-w-[90%]  `}
      >
        {label}
      </label>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded px-[16px] py-[10px] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 dark:placeholder:text-neutral-800 border-neutral-300 h-[45px]  border-[1px] :placeholder-text-neutral-400 text-[14px]
        "
        id={`exampleFormControlInput-${name}`}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [loading, setLoading] = useState(false);
  const width425 = useWindowWide(425);

  const mutation = useMutation((data) => signin(data), {
    onSuccess: (data) => {
      successMessage("Login Successfull");

      // window.location.reload();
      setLoader(false);
      console.log("login data : ", data?.data?.data);
      localStorage.setItem(
        "userAuth",
        JSON.stringify({ token: data?.data?.token, data: data?.data?.data })
      );
      setTimeout(() => {
        navigate("/");
        window.location.reload();
        setLoader(false);
      }, 1000);
      // navigate("/admin/dashboard");
    },
    onError: (err) => {
      errorMessage(err?.response?.data?.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { email, password } = loginData;
    try {
      if (!email) {
        errorMessage("Email is required!");
      } else if (!password) {
        errorMessage("Password is required!");
      } else {
        // do signin
        localStorage.setItem(
          "userAuth",
          JSON.stringify({ token: "token", data: {} })
        );
        mutation.mutate(loginData);
      }
    } catch (error) {
      errorMessage("Invaid credential");
    } finally {
      setLoader(false);
    }
  };

  const store = create();

  return (
    <div
      className={`min-h-screen sm:px-[6rem] items-center flex justify-center fontCatamaran`}
    >
      <div
        className={`sm:p-[20px] p-[20px] md:p-[52px] rounded-2xl g-6 flex flex-wrap items-center justify-center lg:justify-between  bg-white ${
          width425 && "border-[1px] border-neutral-200"
        } 
         transition duration-150 ease-in-out  w-[38rem]
      `}
      >
        <div className="mb-12 pb-10 md:mb-0 w-full ">
          <form>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <h1 className="text-4xl font-bold text-center">
                Login to PortfolioHub
              </h1>
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
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              label="Email address"
            />
            <div className="flex justify-end">
              <a
                href="#!"
                className="text-[#4f4ce5] text-[12px] font-semibold hover:underline text-end"
              >
                Forgot password?
              </a>
            </div>
            <TextField
              name="password"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              label="Password"
            />

            <div className="mb-6 flex items-center justify-between">
              <div className="mb-[0.125rem]  min-h-[1.5rem] flex items-center">
                <input type="checkbox" value="" />
                <label
                  className="inline-block text-[#18181b] text-[12px] ml-2 font-semibold hover:cursor-pointer"
                  for="exampleCheck2"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="text-center lg:text-left mt-2">
              <button
                type="button"
                className={` w-full px-4 mb-5 mt-5 py-[12px] rounded-lg text-[14px] font-medium ${
                  mutation.isLoading ? "bg-gray-300" : "bg-[#232323] text-white"
                }`}
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handleSubmit}
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? " Loading..." : "Login"}
              </button>

              <p className="mb-0 mt-2 pt-1 text-[12px] font-semibold">
                Don't have an account?
                <a
                  href="/#/admin/register"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
