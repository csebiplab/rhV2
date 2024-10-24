import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';

const ArchitecturalDesign = () => {
  return (
    <div>
      <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[23px]">
          <div className="md:col-span-3 ">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.architecturalDesign__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
              Architectural Design Excellence for Every Project
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-left">
              At RH Construction USA Inc., we believe that exceptional architectural design is the foundation of every successful project. As a premier general contractor in Brooklyn, we are committed to delivering design solutions that are not only aesthetically pleasing, but also highly functional and sustainable. We collaborate closely with clients, architects, and engineers to meticulously plan and execute every detail. From modern residential builds to complex commercial structures, we bring creativity, precision, and innovation to every project. With a focus on quality craftsmanship and cutting-edge techniques, RH Construction USA Inc. guarantees architectural excellence tailored to meet your unique vision and needs. RH Construction USA Inc. seamlessly integrates architectural design with construction, whether you are building a custom home, renovating an existing space, or developing a commercial property. We take pride in our ability to transform concepts into reality, bringing to life designs that enhance both form and function. Our attention to detail, coupled with a deep understanding of local building codes and sustainability practices, ensures that every project meets the highest standards of safety, efficiency, and durability. You can expect a personalized approach to architectural design with RH Construction USA Inc., where we value your ideas and realize your vision with expert craftsmanship. From the initial consultation through to the final build, we stay committed to delivering results that exceed expectations. Trust us to make your next project a showcase of architectural design excellence.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <Image
              src="/assets/home_page/new_home_page/architecture_design.png"
              alt="architecture_design image"
              width={833}
              height={887}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalDesign;
