"use client";
import React from "react";
import "./WhyChooseUs.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const considerationFactorData = [
  {
    id: 1,
    title: "Expertise",
    desc: "Specialized in Concrete Construction",
  },
  {
    id: 2,
    title: "Focus",
    desc: "Primarily focused on concrete projects",
  },
  {
    id: 3,
    title: "Experience",
    desc: "Extensive experience in concrete work",
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "Showcase of concrete-centric projects The portfolio reflects",
  },
  {
    id: 5,
    title: "Innovation",
    desc: "Embraces modern concrete technologies",
  },
  {
    id: 6,
    title: "Customization",
    desc: "Tailors solutions for concrete needs",
  },
  {
    id: 7,
    title: "Client Base",
    desc: "Attracts clients seeking concrete expertise",
  },
  {
    id: 8,
    title: "Specialized Equipment",
    desc: "Invests in advanced concrete equipment",
  },
  {
    id: 9,
    title: "Certifications",
    desc: "Holds certifications specific to concrete work",
  },
  {
    id: 10,
    title: "Quality Control",
    desc: "Rigorous quality control for concrete projects",
  },
  {
    id: 11,
    title: "Timely Completion",
    desc: "Emphasizes efficient completion of concrete project",
  },
  {
    id: 12,
    title: "Environmental Practices",
    desc: "Adheres to eco-friendly concrete practices",
  },
  {
    id: 13,
    title: "Safety Measures",
    desc: "Implements concrete-specific safety measures",
  },
  {
    id: 14,
    title: "Cost Structure",
    desc: "Transparent pricing for concrete services",
  },
  {
    id: 15,
    title: "Client Communication",
    desc: "Clear communication on concrete project details",
  },
  {
    id: 16,
    title: "Post-Project Support",
    desc: "Provides ongoing support for concrete structures",
  },
];
const limitationFactorData = [
  {
    id: 1,
    title: "Expertise",
    desc: "Offers a broad range of construction services",
  },
  {
    id: 2,
    title: "Focus",
    desc: "Covers diverse construction projects",
  },
  {
    id: 3,
    title: "Experience",
    desc: "General construction experience",
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "The portfolio reflects various construction types",
  },
  {
    id: 5,
    title: "Innovation",
    desc: "Adopts industry-standard practices",
  },
  {
    id: 6,
    title: "Customization",
    desc: "Provides general construction solutions",
  },
  {
    id: 7,
    title: "Client Base",
    desc: "Appeals to clients with diverse needs",
  },
  {
    id: 8,
    title: "Specialized Equipment",
    desc: "Utilizes standard construction machinery",
  },
  {
    id: 9,
    title: "Certifications",
    desc: "Possesses general construction certifications",
  },
  {
    id: 10,
    title: "Quality Control",
    desc: "Applies standard quality control measures",
  },
  {
    id: 11,
    title: "Timely Completion",
    desc: "Follows industry-standard timelines",
  },
  {
    id: 12,
    title: "Environmental Practices",
    desc: "Follows standard construction environmental guidelines",
  },
  {
    id: 13,
    title: "Safety Measures",
    desc: "Adheres to general construction safety standards",
  },
  {
    id: 14,
    title: "Cost Structure",
    desc: "Adopts standard pricing models for construction",
  },
  {
    id: 15,
    title: "Client Communication",
    desc: "Communicates project details comprehensively",
  },
  {
    id: 16,
    title: "Post-Project Support",
    desc: "Offers standard post-construction support",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="common__padding__top">
      <div
        data-aos="zoom-in"
        className="container flex flex-col items-center justify-center"
      >
        <HeadingIcon
          text={headingIconText.whyChooseUs__headingIconText}
        />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
        Why Choose Our Concrete Specialist in Brooklyn
        </h2>
      </div>

      {/* cart part large device  */}
      <div className="hidden md:block">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-6 mt-[25px]"
      >
        <div className="md:col-span-1">
          <Image
            src="/assets/bestConcreteConstructor/whyChooseUs/whyChooseUs1.png"
            alt="why choose us image"
            width={334}
            height={1258}
            className="h-[435px] md:h-full w-full md:w-auto"
          />
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <div className="w-full border-t-2 border-r-2 border-l-2 border-gray mr-0 md:mr-2">
            <p className="text-[20px] font-bold text-black leading-normal text-center pt-[13px]">
            RH Construction USA Inc.
            </p>
            {considerationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-gray px-[8px] py-[10px] ${
                    data.id === 16 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[6px] h-full bar___bg mr-[1px]" />
        </div>

        <div className="md:col-span-2 flex items-center gap-2">
          <div className="w-[6px] h-full bar___bg2 ml-[1px]" />
          <div className="w-full border-t-2 border-r-2 border-l-2 border-gray ml-0 md:ml-2">
            <p className="text-[20px] font-bold text-black leading-normal text-center pt-[13px]">
            Typical Construction Company
            </p>
            {limitationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-gray px-[8px] py-[10px] ${
                    data.id === 16 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-1">
          <Image
            src="/assets/bestConcreteConstructor/whyChooseUs/whyChooseUs2.png"
            alt="why choose us image"
            width={334}
            height={1258}
            className="h-[435px] md:h-full w-full md:w-auto"
          />
        </div>
      </div>
      </div>

      {/* cart part small device  */}
      <div
        data-aos="fade-up"
        className="block md:hidden grid grid-cols-1 md:grid-cols-6 mt-[25px]"
      >
        <div className="md:col-span-1">
          <Image
            src="/assets/bestConcreteConstructor/whyChooseUs/small_whyChoseUs1.png"
            alt="consideration image"
            width={334}
            height={401}
            className="h-[401px] md:h-full w-full md:w-auto"
          />
        </div>
        <div className="md:col-span-2 border-t-2 border-r-2 border-l-2 border-bg-primary-300 mr-0 md:mr-3">
          <div>
            <p className="text-[20px] font-bold text-black leading-normal text-center pt-[13px]">
            RH Construction USA Inc.
            </p>
            {considerationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 16 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="rounded-l-[50px] rounded-tr-[0px] bg-gradient-to-b from-[#FF3100] to-[#931C00]" />
        </div>

        <div className="md:col-span-1">
          <Image
            src="/assets/bestConcreteConstructor/whyChooseUs/small_whyChoseUs2.png"
            alt="consideration image"
            width={334}
            height={401}
            className="h-[401px] md:h-full w-full md:w-auto"
          />
        </div>

        <div className="md:col-span-2 border-2 border-bg-primary-300 ml-0 md:ml-3">
          <div>
            <p className="text-[20px] font-bold text-black leading-normal text-center pt-[13px]">
            Typical Construction Company
            </p>
            {limitationFactorData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`border-b-2 border-bg-primary-300 px-[8px] py-[10px] ${
                    data.id === 16 && "border-b-0"
                  }`}
                >
                  <p className="text-lg font-bold text-black leading-normal">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-normal">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
