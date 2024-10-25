import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';

const Experienced = () => {
  return (
    <div>
      <div className="container common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[23px]">
          <div className="md:col-span-3 ">
            <div className="flex justify-center md:justify-start items-center">
              <HeadingIcon text={headingIconText.experienced__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center md:text-left pb-[10px]">
              An Experienced Brooklyn General Contractor
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-center md:text-left">
              With years of expertise and a solid educational background, our Brooklyn-based general contracting firm stands out as a reliable partner for your construction projects. Our team comprises seasoned professionals who bring knowledge and hands-on experience to every job site. From residential renovations to commercial builds, we have successfully delivered projects of varying scales. At our core, we prioritize client satisfaction by combining our technical prowess with clear communication and meticulous attention to detail. We employ the latest techniques and technologies to optimize project efficiency and quality. We dedicate our well-experienced and educated team to meticulously and professionally realizing your vision.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <Image
              src="/assets/home_page/new_home_page/experienced.png"
              alt="experienced image"
              width={624}
              height={477}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienced;
