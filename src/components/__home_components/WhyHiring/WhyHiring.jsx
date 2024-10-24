"use client";

import Image from "next/image";

import hiring1 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh1.png";
import hiring2 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh2.png";
import hiring3 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh3.png";
import hiring4 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh4.png";
import hiring5 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh5.png";
import hiring6 from "../../../../public/assets/home_page/new_home_page/why_hiring/wh6.png";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const HiringData = [
  {
    imgSrc: hiring1,
    title: "Reputation & experience",
    description: `Begin by researching the contractor's credibility and industry experience.`,
  },
  {
    imgSrc: hiring2,
    title: "Specialization & expertise",
    description: `Assess whether the contractor specializes in the type of work you need. A specialist will likely have more in-depth knowledge and skills in a specific area, leading to better outcomes for your project.`,
  },
  {
    imgSrc: hiring3,
    title: "Communicate  & transparency",
    description: `Effective communication for transporting construction materials is critical to any successful construction project. Ensure the contractor is transparent about timelines, costs, and potential challenges.`,
  },
  {
    imgSrc: hiring4,
    title: "Contract Terms & Conditions",
    description: `Ensure it includes all relevant details such as scope of work, timelines, and payment schedules.`,
  },
  {
    imgSrc: hiring5,
    title: "Availability and Workforce",
    description: `Check the contractor's accessibility and the size of their workforce. Confirm that they can dedicate sufficient time to your project and have the necessary manpower to complete it efficiently.`,
  },
  {
    imgSrc: hiring6,
    title: "Communicate  & transparency",
    description: `Effective communication for transporting construction materials is critical to any successful construction project. Ensure the contractor is transparent about timelines, costs, and potential challenges.`,
  }
];


const WhyHiring = () => {
  return (
    <div className="">
      <div className="container">
        <div className="common__padding__top">
        <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.whyHiring__IconText}/>
            </div>
            <div className="pb-[25px]">
        <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center pb-[10px]">
         When Hiring the Best Contractors, What to Consider First
        </h2>
        <p className="text-lg font-normal text-black leading-[36px] text-center">
        When selecting the best contractors from all construction companies in Brooklyn for your project, it's crucial to consider several key factors to ensure a successful and satisfactory outcome. Here are the top considerations to prioritize, listed in order of importance:
        </p>
      </div>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-10">
            {HiringData.map((data, index) => (
              <div
                key={index}
                className={`relative text-center py-4 lg:py-6 lg:px-12`}
              >
                <div className="">
                  <Image
                    src={data.imgSrc}
                    width={129}
                    height={129}
                    alt="hiring us"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center pt-[15px]">
                    <p className="text-[25px] font-bold pb-[27px] text-black">
                      {data.title}
                    </p>
                    <p className="text-lg text-center pb-[40px]  text-black leading-[24px] md:leading-6">
                      {data.description}
                    </p>
                    
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border border-black" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHiring;