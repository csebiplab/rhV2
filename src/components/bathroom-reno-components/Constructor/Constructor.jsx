"use client";
import pp1 from "../../../../public/assets/images/pp1.png"
import pp2 from "../../../../public/assets/images/pp2.png"
import pp3 from "../../../../public/assets/images/pp3.png"
import pp4 from "../../../../public/assets/images/pp4.png"
import pp5 from "../../../../public/assets/images/pp5.png"
import pp6 from "../../../../public/assets/images/pp6.png"
import pp7 from "../../../../public/assets/images/pp7.png"
import pp8 from "../../../../public/assets/images/pp8.png"
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./Constructor.css";


const slideData = [
  {
    imgSrc: pp1,
    title: 'Craftsmanship Excellence',
    description: `Our bathroom renovation company takes immense pride in delivering top-notch craftsmanship.`,
  },
  {
    imgSrc: pp2,
    title: 'Tailored Designs',
    description: `From modern and sleek designs to classic and timeless aesthetics, we tailor our services to bring your vision to life.`,
  },
  {
    imgSrc: pp3,
    title: 'Transparent Communication',
    description: `Communication is key to any successful remodeling project. We prioritize transparent & open communication throughout the process`,
  },
  {
    imgSrc: pp4,
    title: 'Timely Project Delivery',
    description: `We understand the importance of timelines when it comes to home renovations. You can trust our bathroom remodeling company`,
  },
  {
    imgSrc: pp5,
    title: 'Quality Materials',
    description: `We source and utilize only high-quality materials for our projects. Whether it's fixtures, tiles, or cabinetry, we prioritize durability.`,
  },
  {
    imgSrc: pp6,
    title: 'Experienced Team',
    description: `Our company boasts a team of experienced and skilled professionals. Our craftsmen, designers, and project managers bring years of expertise`,
  },
  {
    imgSrc: pp7,
    title: 'Customer Satisfaction Guarantee',
    description: `Your satisfaction is our priority. If there are any concerns or adjustments needed post-project completion, we are committed.`,
  },
  {
    imgSrc: pp8,
    title: 'Budget-Friendly Options',
    description: `Our company provides flexible and budget-friendly options without compromising on the quality of work.`,
  },
];



const Constructor = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className="">
          <div className="text-center">
            <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.chooseUs__IconTxt}/>
            </div>

            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center">
            Why Choose Our <span className="text-primary">Bathroom Remodeling Services</span>
            </h2>
            <h3 className="text-[20px] 5xl:text-[25px] font-bold text-center text-black leading-[36px]">We have done bathroom remodeling so many times</h3>
            <p className="text-lg font-normal text-black text-center leading-[36px]">Certainly! Here are some unique points for why someone might choose RH Construction USA Inc. for their bathroom remodeling services in Brooklyn:</p>
          </div>

            {/* cart section  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[25px]">
              {
                slideData?.map((slide, index)=>{
                  return <div className="card__bg p-[10px]">

                  <Image
                    src={slide.imgSrc}
                    width={71}
                    height={71}
                    alt="RH"
                    className="mx-auto mt-[10px] w-[71px] h-[71px] border-2 rounded-full bg-white p-2 "
                  />
                  <div className="text-center">
                    <p className="text-[20px] font-bold py-2">{slide?.title}</p>
                    <p className="text-base font-normal mt-2 mb-3  text-black ">
                      {slide.description}
                    </p>
                  </div>
                </div>
                })
              }
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Constructor;
