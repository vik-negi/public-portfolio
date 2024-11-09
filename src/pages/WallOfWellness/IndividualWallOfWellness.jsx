import React from "react";
import WOWAppBar from "./components/WOWAppBar";
import calendar from "../../assets/wallOfWellness/calendar.svg";
import frame from "../../assets/wallOfWellness/frame.png";
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appStore.png";

const IndividualWallOfWellness = () => {
  let text = `Walking has been a transformative experience in my life, offering both physical and mental benefits that have shaped my well-being. It started as a simple activity, a way to get from one place to another, but over time, it evolved into a cherished routine that I look forward to every day.

One of the most significant impacts of walking has been on my physical health. Regular walks have improved my cardiovascular fitness, strengthened my muscles, and helped me maintain a healthy weight. I often find myself exploring local parks or strolling through my neighborhood, and each step contributes to my overall vitality. The fresh air and natural surroundings invigorate me, making exercise feel less like a chore and more like a delightful escape.

Beyond the physical benefits, walking has also been a powerful tool for mental clarity. Whenever I feel overwhelmed or stressed, I lace up my shoes and head outside. The rhythmic motion of walking allows my mind to wander and process thoughts more freely. I often find solutions to problems or gain new perspectives during these walks. It’s as if the act of moving my body unlocks creativity and insight that I might not access while sitting at my desk.

Moreover, walking has fostered a sense of community in my life. I’ve met wonderful people during my walks, whether it’s fellow dog owners at the park or neighbors out for their evening strolls. These interactions, however brief, have enriched my social life and made me feel more connected to my surroundings.

In conclusion, walking has been more than just a form of exercise for me; it has been a holistic practice that nurtures my body and mind. It’s a simple yet profound activity that I will continue to embrace, knowing the countless benefits it brings to my life.`;

  return (
    <div className="bg-[#24262bec]">
      <div className="mx-auto max-w-[400px] bg-[#24262B]">
        <WOWAppBar />
        <div className="bg-[#FFFFFF1A] h-[1px]" />
        <div className="pt[17px] px-[24px] mt-[17px] pb-[4px]">
          <div className="relative">
            <p className="text-[18px] text-[#FFFFFF] font-general font-semibold leading-[22px] trim-text">
              “Consistency was my biggest weakness but that’s starting to change
              and I am more active...”
            </p>
            <div className="absolute w-[20px] right-0 bottom-[1px] bg-[#24262B]">
              <p className="text-[18px] text-[#FFFFFF]  font-semibold leading-[22px] text-right trim-text">
                ...”
              </p>
            </div>
          </div>

          <div className="mt-[10px]">
            <img
              src={calendar}
              alt="Calendar"
              className="h-[20px] w-[20px] float-left mr-[10px]"
            />
            <p className="text-[12px] text-[#FFFFFF66] font-medium leading-[15px]">
              Sep 21, 2024
            </p>
          </div>
        </div>

        <div
          className="p-4 bg-[#D3FFF6] justify-between flex rounded-[12px] relative min-h-[204px] mx-[26px] mt-[24px] "
          style={{
            boxShadow: "0px 6px 0px 0px #0E986A",
          }}
        >
          <div className="">
            <p className="text-[14px] max-w-[105px] text-[#005D3E] font-semibold leading-[17.5px]">
              Kolkata Medal Contest
            </p>
            <StoryCardText title="Medal" subtitle="#2" />
            <StoryCardText title="Completed in" subtitle="40 Days" />
            <StoryCardText title="Total Steps" subtitle="6,00,000 Steps" />
          </div>
          <div className={`  mt-[-36px] mr-[-8px] transform rotate-[2deg]`}>
            <img
              src={frame}
              alt="Frame"
              style={{}}
              className="inset-0 object-cover"
              height={"176px"}
              width={"212px"}
            />
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/300f/32ae/27071ef94f8189b31899140af51636be?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4vGQ7A3qLi-2bOye178VnzXwO1kHtwLbKoVtq8tinL2SbcD9fDs-QYwm52FR~4VXT0JgBl3XiLpzmgk42UGqCmsEe54tG-4aIFsQaBDjws4gXIDlP2YpVfk~lu5LOm-sD4CZ8f1~FCwFG3nxcpS-vxt4i2PJa17JMhkpuC1O9SaOyWKxXdVfrLugG8zoXzOX6X0RNVP60mdG9N~nCV~lqQbcNQONG9IJdJkM8MQLhKmWlpXHdLsEQK23ugxqEJlPYcgfCy2efycktgCSuGlC1x~SrXGOgHpR3rwTDQCpHrA5Q1FcWk4YI2H29dXffcG-A9ccMoz3oGcYwg~oUHy7Q__"
              }
              alt="Frame"
              className="inset-0 absolute object-cover transform rotate-[0deg]"
              style={{
                zIndex: -1,
                padding: "10px",
                height: "200px",
                overflow: "hidden",
              }}
              height={"200px"}
              width={"190px"}
            />
          </div>
          <div className="h-1 bg-["></div>
        </div>

        <div className="mt-[36px] pb-[100px] p-[28px] bg-white rounded-t-[16px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/d830/c648/dd6eccbf40a9914b7c671ec1e553aaa5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~Qn2Hh92rdPuYi3MGn1GC9yPwHzaim~BOsgpNwVt-P188XsNUAO-mGiTEeiJRCtjhrGFbd9e7G7vAw1f0-q0K-IKcbHrXGEEhDHoLx3goAee6lmG8mh-h3c1VuG5psn2IjN~baLdxh8EDvszuYSavbv7rvvTMcEFADkNQsS-nVDiqMGlk0gAKctfaIms4-oTV91bbe60w9xvuN3lUjcUp3~W4SNia0yq4a-4zh9LZgCcdpR4tOPdvul~IWOnZnmEb-EZgpI51jz98V5jhmHTbSXxZjXOEzwZkLwvkUnLZKVYDHjKrA-6pu38Ar0NyVp1JM5O74XRyV7i03I9UWcgA__"
            alt="Image"
            className="w-full h-[310px] object-cover rounded-[10px]"
          />
          <div className="mt-[20px]">
            <p className="text-[#000000] font-medium leading-[24px]">
              <span className="text-[24px] leading-[38.4px]">
                {text.charAt(0)}
              </span>
              <span className="text-[14px] leading-[17.5px]">
                {text.slice(1)}
              </span>
            </p>
          </div>
        </div>

        <FooterAppDowwnload />
      </div>
    </div>
  );
};

const StoryCardText = ({ title, subtitle }) =>
  // : { title: string; subtitle: String }
  {
    return (
      <div className={`${title == "Medal" ? "mt-[32px]" : "mt-[22px]"}`}>
        <p className="text-[10px] text-[#00000099] font-medium leading-[12.5px]">
          {title}
        </p>
        <p className="text-[12px] text-[#000000CC] font-medium leading-[15px]">
          {subtitle}
        </p>
      </div>
    );
  };
const FooterAppDowwnload = () => {
  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.koshiqa",
      "_blank"
    );
  };
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/in/app/koshiqa/id1627654638", "_blank");
  };
  return (
    <div className="bg-white max-w-[400px] min-w-[400px]">
      <div
        className={`py-4 max-w-[400px] w-[100%] fixed bottom-0 bg-white rounded-t-[16px] flex justify-center`}
        style={{
          boxShadow: "0px 0px 8px 0px #00000024",
        }}
      >
        <img
          onClick={handlePlayStoreClick}
          src={playStore}
          alt="Play Store"
          className="h-[42px] "
        />
        <img
          onClick={handleAppStoreClick}
          src={appStore}
          alt="App Store"
          className="h-[42px]  ml-3"
        />
      </div>
    </div>
  );
};

export default IndividualWallOfWellness;
