import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';

const ToolsAndEquipment = () => {
  return (
    <div>
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[23px]">
          <div className="order-2 md:col-span-3 ">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.toolsAndEquipment__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
              Having All Types of Construction Tools and Equipment
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-left">
              RH Construction USA Inc. offers a comprehensive range of buildings with the best tools and equipment tailored to meet the diverse needs of your project. Whether embarking on a small-scale renovation or overseeing a large construction endeavor, we have covered you with top-of-the-line tools and machinery. Our inventory encompasses everything from power drills and saws to heavy-duty excavators and cranes, ensuring that we have the right equipment to get the job done efficiently and effectively. <br/>
                With our construction company, you can trust in the quality and reliability of our tools and equipment. We understand the importance of having the right tools at your disposal to streamline construction processes and maximize productivity. From excavation to finishing touches, our diverse selection of building tools and equipment empowers you to tackle any project confidently.
              </p>
            </div>
          </div>

          <div className="order-1 md:col-span-3">
            <Image
              src="/assets/home_page/new_home_page/toolsAndEquipment.png"
              alt="toolsAndEquipment image"
              width={812}
              height={568}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndEquipment;
