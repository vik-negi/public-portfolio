import React, { useEffect, useRef, useState } from "react";
import { errorMessage, successMessage } from "../utils/Toast";
import { forgotPassword } from "../axios/singin";
import { useMutation } from "react-query";
import { BtnSpinner } from "../utils/BtnSpinner";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const [passKey, setPassKey] = useState("");
  const { mutate, data, isLoading, isError, isSuccess, error } = useMutation(
    (data) => {
      return forgotPassword(data);
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current?.value;
      if (!email) {
        errorMessage("Email must be required!");
      } else {
        //do
        mutate({
          email: email,
          userType: "dutyManager",
        });
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };

  if (isError) {
    console.log(error);
    errorMessage(error?.response?.data?.message || error?.message);
  }

  useEffect(() => {
    if (isSuccess) {
      successMessage(data?.data?.message);
      setPassKey(data?.data?.message);
      navigate("/verify-otp");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-10 ">
          <div className="login-content ">
            <div className="login-form bg-[white]">
              <h4>Forgot Password</h4>

              <div className="my-3 text-success">
                {passKey !== "" && passKey}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter you email address"
                    name="email"
                    ref={emailRef}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-primary w-[100px] py-2 m-b-15 rounded-[5px] hover:text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? <BtnSpinner /> : "Submit"}
                  </button>
                </div>
                <div className="register-link text-center">
                  <p>
                    Back to <a href="/"> Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
