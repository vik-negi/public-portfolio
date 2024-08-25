import React from "react";
import { call } from "../../assets/icons";

const Performance = ({ title, value, icon, imageSvg }) => {
  return (
    <div class="mb-12 md:mb-0">
      <div
        class="mb-6 bg-[#1e1e1e] 
                         inline-block rounded-md bg-primary-100 p-2 text-white"
      >
        {imageSvg !== null ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-11 w-11"
          >
            {imageSvg}
          </svg>
        ) : (
          <i className="h-25 w-25" alt="icon" />
        )}
      </div>
      <h3 class="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
        {value}
      </h3>
      <h5 class="text-lg font-medium text-neutral-500 dark:text-neutral-300">
        {title}
      </h5>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col mt-5">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center w-full h-[70px] flex-col  bg-[#f2f2f2]">
            <div className="relative w-full  bg-[#f2f2f2]">
              <img
                src="https://th.bing.com/th/id/R.15a30fae1fb63ae455b975f9a3b7c411?rik=gnUYWFJ5xAtOOQ&pid=ImgRaw&r=0"
                alt="Cover"
              />
              <div className="absolute top-[75%] left-[5%] flex flex-row transform translate(-50%, 50%)">
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                  className="w-32 rounded-lg shadow-lg border-4 border-white"
                  alt="Avatar"
                />
                <div className="flex items-start justify-center flex-col ml-4">
                  <h1 className="text-white text-[25px] font-bold mt-1">
                    Vikram Negi
                  </h1>
                  <h1 className="text-blue-500 text-[16px] font-noraml mt-3">
                    vikramnegi175@gmail.com
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div></div>
            <div class="container my-24 mx-auto md:px-6 mt-[200px]">
              <section class="mb-32 text-center">
                <h2 class="mb-12 text-3xl font-bold">
                  My Performance Overview
                </h2>
                <div class="grid md:grid-cols-3 lg:gap-x-12">
                  <Performance
                    title="Happy Customers"
                    value="1000"
                    imageSvg={
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    }
                  />
                  <Performance
                    title="Growth Rate"
                    value="45%"
                    imageSvg={
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    }
                  />
                  <Performance title="Weekly Calls" value="76" icon={call} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
