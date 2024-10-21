"use client";
import pp1 from "../../../../public/assets/brooklyn_Home/pp1.png"
import pp2 from "../../../../public/assets/brooklyn_Home/pp2.png"
import pp3 from "../../../../public/assets/brooklyn_Home/pp3.png"
import pp4 from "../../../../public/assets/brooklyn_Home/pp4.png"
import pp5 from "../../../../public/assets/brooklyn_Home/pp5.png"
import pp6 from "../../../../public/assets/brooklyn_Home/pp6.png"
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./HireUs.css";

const slideData = [
  {
    imgSrc: pp1,
    title: 'Initial consultation',
    description: `We'll start by meeting with you to discuss your project requirements, budget, and timeline. This is an opportunity for us to understand your vision and goals for the project.`,
  },
  {
    imgSrc: pp2,
    title: 'Detailed proposal',
    description: `After the initial consultation, we'll provide you with a detailed proposal outlining the scope of work, materials to be used, timeline, and cost estimate.`,
  },
  {
    imgSrc: pp3,
    title: 'Communication',
    description: `Throughout the project, we'll maintain open and clear communication with you. We'll keep you updated on progress, address any concerns or questions you may have, ay.`,
  },
  {
    imgSrc: pp4,
    title: 'Timely completion',
    description: `We understand that your time is valuable, so we'll work efficiently to complete the project within the agreed-upon timeline. We'll also make sure to minimize disruptions.`,
  },
  {
    imgSrc: pp5,
    title: 'Attention to detail',
    description: `From the initial planning stages to the finishing touches, we'll pay attention to every detail to ensure the final result meets your specifications and reflects your vision for your home.`,
  },
  {
    imgSrc: pp6,
    title: 'Customer satisfaction',
    description: `Your satisfaction is our top priority. We'll go above and beyond to make sure you're happy with the result, and we'll address any concerns or issues promptly.`,
  }
];



const HireUs = () => {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.hireUs__HeadingIconText}/>
            </div>

            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Hiring Us as Your Home Contractor -  <span className="text-primary">What to Expect</span>
            </h2>
          </div>
          {/* cart part  */}
          <div className="pt-[25px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {slideData.map((slide, index) => (
        <div key={index} className={`!h-auto !md:h-full`}>
          <div className="w-full !h-full  card__bg">
            <Image
              src={slide.imgSrc}
              width={72}
              height={72}
              alt="RH"
              className="mx-auto mt-[26px] w-[72px] h-[72px] border-2 rounded-full bg-white p-2"
            />
            <div className="text-center px-[23px] pt-[5px]">
              <p className="text-[20px] font-bold leading-[30px] text-center">{slide?.title}</p>
              <p className="text-lg font-normal text-black leading-[30px] text-center">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HireUs;
