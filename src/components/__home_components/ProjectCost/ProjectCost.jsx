"use client";

import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
  1220: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 5,
  },
};

const slideData = [
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc1.png",
    title: "Scope of Work",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc2.png",
    title: "Materials",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc3.png",
    title: "Labor Costs",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc4.png",
    title: "Equipment and Machinery",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc5.png",
    title: "Permits and Regulations",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc6.png",
    title: "Site Preparation",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc7.png",
    title: "Contingency",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc8.png",
    title: "Overhead and Profit",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc9.png",
    title: "Market Conditions",
  },
  {
    imgSrc: "/assets/home_page/new_home_page/project_cost/pc10.png",
    title: "Project Management",
  },
];

const ProjectCost = () => {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="w-full md:flex md:justify-between lg:gap-10 md:gap-3">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:block">
              <SmallHeadingWithIcon
                smallHeadingText={smHeadingTexts.projectCost}
              />
            </div>

            <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-primary-100 font-bold leading-normal text-center md:text-left">
              How Much Does a <br /> Construction Project Cost?
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base font-normal text-black text-center md:text-left leading-[35px]">
              The cost of a construction project can vary widely depending on
              various factors such as the size, complexity, location, materials
              used, labor costs, and any additional requirements or unforeseen
              circumstances.
            </p>
          </div>
        </div>
        {/* =================== Card Section =============== */}

        <Swiper
        className=""
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={74}
        >
          {slideData.map((data, index) => (
            <SwiperSlide
              key={index}
              className={`text-center px-[90px] md:px-0`}
            >
              <div
                className={`${
                  (index + 2) % 2 === 0 ? "lg:-mt-10 md:-mt-5" : ""
                }`}
              >
                <div className="w-full shadow-md p-0 mt-[45px] lg:mt-[65px] ">
                  {index % 2 === 0 && (
                    <p className="lg:text-base text-black text-sm leading-normal font-bold py-[13px] text-center rounded-b-[9px] bg-white border">
                      {data?.title}
                    </p>
                  )}
                  <Image
                    src={data.imgSrc}
                    width={255}
                    height={191}
                    alt="cost"
                    className="w-full"
                  />
                  {index % 2 !== 0 && (
                    <p className="lg:text-base text-black rounded-b-[9px] bg-white border text-sm leading-normal font-bold py-[13px] text-center">
                      {data?.title}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCost;
