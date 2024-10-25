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
          <div className="md:col-span-3 2xl:col-span-3 flex flex-col justify-center items-center ml-0 md:-ml-10 my-0 md:my-8 2xl:my-0">
            <div className="trust_us_bg py-[12px] 5xl:py-[15px] px-[18px] 5xl:px-[24px]">
              <div className="flex justify-center md:justify-start items-center">
                <HeadingIcon text={headingIconText.trustUs__IconText} />
              </div>
              <div className="">
                <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center md:text-left pb-[10px]">
                  A Trustworthy general contractor in Brooklyn
                </h2>
                <p className="text-lg font-normal text-black leading-[36px] text-center md:text-left">
                As a trusted general contractor in Brooklyn, we prioritize clear and open communication with clients. Our general contractors deliver high-quality craftsmanship and exceptional service from start to finish with dedication. With 15 years of experience in the industry, we handle projects of all sizes with precision and care. With a commitment to excellence and customer satisfaction, our experienced team manages every aspect of construction, from initial planning to final execution. We take pride in our attention to detail, ensuring that each project meets the highest standards of quality and safety. Whether you're looking to renovate your home, build an addition, or undertake a commercial project, RH Construction USA Inc. is your reliable construction partner in bringing your vision to life. Experience seamless communication, expert craftsmanship, and timely project completion with us!
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
