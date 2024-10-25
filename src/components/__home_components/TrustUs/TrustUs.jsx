import Image from "next/image";
import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./TrustUs.css";

const TrustUs = () => {
  return (
    <div>
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 2xl:grid-cols-6 ">
          <div className="md:col-span-2 2xl:col-span-3">
            <Image
              src="/assets/home_page/new_home_page/trust_us.png"
              alt="trus us image"
              width={914}
              height={698}
              className="h-full"
            />
          </div>
          <div className="md:col-span-3 2xl:col-span-3 flex flex-col justify-center items-center -ml-10 my-0 md:my-8 2xl:my-0">
            <div className="trust_us_bg py-[12px] 5xl:py-[15px] px-[18px] 5xl:px-[24px]">
              <div className="flex justify-start items-center">
                <HeadingIcon text={headingIconText.trustUs__IconText} />
              </div>
              <div className="">
                <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
                  About Our General Contractor Company
                </h2>
                <p className="text-lg font-normal text-black leading-[36px] text-left">
                  With over 15 years of expertise in home renovations, bathroom
                  and kitchen remodeling, roofing repair, and various
                  construction projects, RH Construction USA Inc. has dedicated
                  itself to delivering excellence in construction services since
                  2009. As a locally owned and operated company based in
                  Brooklyn, our commitment to quality craftsmanship, innovation,
                  and client satisfaction sets us apart. With a skilled team
                  prioritizing efficiency and precision, we transform visions
                  into realities, ensuring every detail is perfect. Our team of
                  skilled professionals is committed to delivering high-quality
                  craftsmanship, innovative solutions, and exceptional customer
                  service. Whether residential, commercial, or industrial
                  construction, RH Construction USA Inc. is Brooklyn's best
                  general construction company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
