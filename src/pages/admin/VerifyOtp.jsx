import React from "react";

const VerifyOtp = ({ email }) => {
  return (
    <div className="min-h-screen sm:px-[6rem] bg-[#f2f2f2]  items-center flex-col flex justify-center fontCatamaran">
      <p className="text-center text-gray-600 mb-2 text-[14px] font-medium">
        We have sent an OTP to your email <br /> {email ? email : ""}
      </p>
      <div className="w-full p-[40px] sm:w-[42rem] mt-10 bg-white shadow-md rounded-xl">
        <h1 className="text-4xl font-bold  mb-6">Verify OTP</h1>

        <div className="flex items-center justify-center"></div>
        <form action="" className="space-y-4">
          <div>
            <input
              type="number"
              maxLength={4}
              max={9999}
              placeholder="Enter OTP"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="h-[20px]" />
          <div>
            <button
              type="submit"
              className="w-full mt-10 bg-blue-500 text-white rounded-md py-2"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
