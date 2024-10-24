import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';

const LeadingConstruction = () => {
  return (
    <div>
      <div className="container common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[23px]">
          <div className="order-2 md:col-span-3 ">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.leadingConstruction__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
              Brooklyn's Leading Construction Company
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-left">
              RH Construction USA Inc. stands out as one of Brooklyn's leading construction companies. With a proven track record of successfully delivering a diverse range of construction projects, our construction company has earned a stellar reputation for its dedication to quality craftsmanship and timely completion. RH Construction USA Inc. is a premier construction company based in Brooklyn, dedicated to transforming visions into reality. With years of experience in the industry, we specialize in a wide range of construction services, including residential and commercial projects, renovations, and custom builds. Our company prides itself on our contractors's attention to detail, reliability, and ability to meet deadlines. For your next project, choose RH Construction USA Inc. and experience the difference of working with a trusted construction industry leader in Brooklyn.
              </p>
            </div>
          </div>

          <div className="order-1 md:col-span-2">
            <Image
              src="/assets/home_page/new_home_page/leadingConstraction.png"
              alt="leading contractor"
              width={624}
              height={477}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingConstruction;
