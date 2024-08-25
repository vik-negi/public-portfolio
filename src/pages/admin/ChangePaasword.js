import React, { useState } from "react";
import WrapperContent from "../WrapperContent";
import { errorMessage, successMessage } from "../utils/Toast";
import { BtnSpinner } from "../utils/BtnSpinner";
import { updatePassword } from "../axios/singin";
import { useMutation } from "react-query";

function ChangePaasword() {
  const [reset, setReset] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    userType: "dutyManager",
  });
  // const [isLoading, setIsLoading] = useState(false);

  const { mutate, isLoading, isError, isSuccess, error } = useMutation(
    (data) => {
      return updatePassword(data);
    }
  );

  // onchange
  const handleChangetext = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setReset({ ...reset, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newPassword } = reset;

    try {
      if (!newPassword) {
        errorMessage("new password must be required!");
      } else if (newPassword.length < 6) {
        errorMessage("new password must be 6 characters long!");
      } else if (newPassword !== reset.confirmPassword) {
        errorMessage("new password and confirm password must be same!");
      } else {
        //do
        mutate({
          newPassword: newPassword,
          userType: "dutyManager",
        });
      }
    } catch (error) {
      errorMessage(error.message);
    }
  };

  if (isSuccess) {
    successMessage("Reset password successfully");
  }
  if (isError) {
    errorMessage(error.message);
  }

  return (
    <WrapperContent title="Change password">
      <section id="main-content bg-[#f2f2f2]">
        <div className="row h-[80vh] flex items-center justify-center">
          <div className="col-lg-12 ">
            <div className="col-lg-6 mx-auto">
              <div className="login-form bg-white rounded-[5px]">
                <p className="text-[30px] text-black font-[500]">
                  Change Password
                </p>
                <form onSubmit={handleSubmit}>
                  {/*   <div className="form-group">
                              <label>Old password</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="1234"
                                name="oldPassword"
                                value={reset.oldPassword}
                                onChange={handleChangetext}
                              />
                            </div> */}
                  <div className="form-group mt-4">
                    <label className="text-[14px] font-semibold text-[#999]">
                      New Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new password"
                      name="newPassword"
                      value={reset.newPassword}
                      onChange={handleChangetext}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label className="text-[14px] font-semibold text-[#999]">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter confirm password"
                      name="confirmPassword"
                      value={reset.confirmPassword}
                      onChange={handleChangetext}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary w-[100px] py-2 m-b-15 rounded-[5px] hover:text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? <BtnSpinner /> : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WrapperContent>
  );
}

export default ChangePaasword;
