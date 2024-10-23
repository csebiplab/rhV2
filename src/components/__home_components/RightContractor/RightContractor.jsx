import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';

const RightContractor = () => {
  return (
    <div>
      <div className="container common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[23px]">
          <div className="md:col-span-3 ">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.rightContractor__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
                Start with the right general contractor in Brooklyn.
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-left">
                Choosing the right general contractor in Brooklyn from all
                construction companies is a crucial step in ensuring the success
                of your construction project. RH Construction USA Inc., a
                prominent player in the industry, stands out as a reliable
                choice for discerning clients. With a proven track record of
                delivering high-quality construction services in Brooklyn, we
                bring a wealth of experience and expertise. Our commitment to
                excellence is evident in our attention to detail, timely project
                completion, and customer satisfaction. When searching for a
                general contractor in Brooklyn, our company emerges as a
                reliable partner dedicated to making your construction dreams a
                reality. You can initiate your project with RH Construction USA
                Inc.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <Image
              src="/assets/home_page/new_home_page/rightContractor.png"
              alt="right contractor"
              width={624}
              height={477}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContractor;
