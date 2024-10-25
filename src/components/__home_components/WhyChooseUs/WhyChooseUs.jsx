"use client";
import "./WhyChooseUs.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import Image from "next/image";

const usualPool = [
  {
    title: "Communication is lacking.",
  },
  {
    title: "Missed deadlines",
  },
  {
    title: "Hidden expenses or unexpected fees",
  },
  {
    title: "Poor project management",
  },
  {
    title: "Low-quality workmanship",
  },
  {
    title: "Delays due to unavailability of materials",
  },
  {
    title: "Unreliable subcontractors",
  },
  {
    title: "Inconsistent labor quality",
  },
  {
    title: "Insufficient attention to detail",
  },
  {
    title: "Design input or creativity is limited.",
  },
];
const easyPool = [
  {
    title: "An experienced and skilled team",
  },
  {
    title: "Reliable project management",
  },
  {
    title: "Commitment to quality craftsmanship",
  },
  {
    title: "Strong focus on client communication",
  },
  {
    title: "Complete the project on time.",
  },
  {
    title: "Transparent pricing and budgeting",
  },
  {
    title: "Use of high-quality materials",
  },
  {
    title: "Licensed and insured professionals",
  },
  {
    title: "Attention to detail in every aspect",
  },
  {
    title: "Solutions tailored to client needs",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="">
          <div className="grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.whyChooseUs__IconText}/>
              </div>

              <div>
                <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center md:text-left pb-[10px]">
                Why Choose Our General Contractors
                </h2>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center">
                At RH Construction USA Inc., we pride ourselves on delivering top-notch general contracting services in Brooklyn. With years of experience in the industry, we provide a seamless construction experience that prioritizes quality, transparency, and customer satisfaction. Here's why you should choose us: Choosing RH Construction USA Inc. means partnering with a trusted, dedicated team that delivers superior results and ensures your satisfaction from start to finish. Let us bring your construction dreams to life with professional, reliable service!
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[30px] py-[26px] text-primary-200 text-lg font-bold">
              Usual General Contractors
              </p>
              <div className=" grid grid-rows-8 pt-[18px] 3xl:pt-[22px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-2 5xl:gap-3 items-center mb-[25px] leading-none border-b-[1.5px] border-dark-500 pb-[6px]"
                  >
                    <Image
                      src="/assets/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm 5xl:text-base text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <div className="title-bg2">
              <Image src="/assets/home_page/new_home_page/why_choose_us.png" alt="why choose us icon" width={174} height={80} className="w-1/2 mx-auto"/>
              </div>
              <div className=" grid grid-rows-8 pt-[18px] 3xl:pt-[22px]  px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-2 5xl:gap-3 items-center mb-[25px]  leading-none  border-b-[1.5px] border-dark-500 pb-[6px]  "
                  >
                    <Image
                      src="/assets/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm 5xl:text-base text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;