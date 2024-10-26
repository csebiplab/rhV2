import React from "react";
import "./Benefits.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    img: "/assets/brooklyn_Home/benefits/benefit1.png",
    title: "Customized Solutions",
    desc: "At RH Construction USA Inc., we provide tailored renovation services designed to meet your specific needs and preferences. Whether it's a kitchen upgrade, bathroom remodel, or full home renovation, our team ensures that the final result reflects your unique style and vision.",
  },
  {
    id: 2,
    img: "/assets/brooklyn_Home/benefits/benefit2.png",
    title: "Expert craftsmanship",
    desc: "Our skilled team of contractors brings years of experience and industry expertise to every project. We are committed to delivering high-quality work with attention to detail, ensuring durable and aesthetically pleasing results.",
  },
  {
    id: 3,
    img: "/assets/brooklyn_Home/benefits/benefit3.png",
    title: "On-Time Completion",
    desc: "We understand the importance of timelines in home renovation projects. With RH Construction USA Inc., you can count on efficient project management that keeps your renovation on schedule without sacrificing quality.",
  },
  {
    id: 4,
    img: "/assets/brooklyn_Home/benefits/benefit4.png",
    title: "Cost-effective Solutions",
    desc: "Renovating your home doesn't have to be expensive. We offer competitive pricing and a range of budget-friendly options to help you achieve the home of your dreams without overspending.",
  },
  {
    id: 5,
    img: "/assets/brooklyn_Home/benefits/benefit5.png",
    title: "Licensed and insured",
    desc: "As a fully licensed and insured general contractor in Brooklyn, you can trust that your home renovation is in safe and professional hands. We prioritize safety and compliance with building codes to give you peace of mind.",
  },
  {
    id: 6,
    img: "/assets/brooklyn_Home/benefits/benefit6.png",
    title: "Enhanced Property Value",
    desc: "A renovation with RH Construction USA Inc. not only improves the look and feel of your home but can also significantly boost its market value. Whether you're planning to sell or simply enhance your living space, our renovations add long-term value.",
  },
  {
    id: 7,
    img: "/assets/brooklyn_Home/benefits/benefit7.png",
    title: "Seamless Communication",
    desc: "Our home renovators believe that clear communication is key to a successful project. We keep you informed and involved in every phase of the renovation from start to finish, ensuring we meet and exceed your expectations.",
  },
  {
    id: 8,
    img: "/assets/brooklyn_Home/benefits/benefit8.png",
    title: "Energy Efficiency Upgrades",
    desc: "Our home renovation services include energy-efficient upgrades such as improved insulation, modern windows, and energy-saving appliances. These enhancements create a more comfortable living environment and help lower your energy bills over time.",
  },
  {
    id: 9,
    img: "/assets/brooklyn_Home/benefits/benefit9.png",
    title: "Use of Premium Materials",
    desc: "We source only the best materials for our renovation projects, ensuring that your home looks excellent and endures over time. From high-quality flooring to durable countertops and fixtures, we prioritize materials that offer beauty and longevity.",
  },
  {
    id: 10,
    img: "/assets/brooklyn_Home/benefits/benefit10.png",
    title: "Comprehensive Services",
    desc: "RH Construction USA Inc. offers a full range of home renovation services, from small updates to complete remodels. Whether you need structural changes, electrical work, plumbing updates, or finishing touches, our team has the expertise to handle every aspect of your project.",
  },
  {
    id: 11,
    img: "/assets/brooklyn_Home/benefits/benefit11.png",
    title: "Sustainable Practices",
    desc: "We incorporate environmentally friendly practices into our renovation projects, helping reduce waste and promote sustainability. From eco-friendly building materials to energy-efficient designs, we help create a greener home that's beneficial for you and the planet.",
  },
  {
    id: 12,
    img: "/assets/brooklyn_Home/benefits/benefit12.png",
    title: "Increased Comfort & Functional",
    desc: "We design our renovations to enhance your home's comfort and functionality. Whether it's optimizing your space for better flow, adding storage solutions, or creating open-concept designs, we ensure your home works better for your lifestyle.",
  },
  // {
  //   id : 13,
  //   img : "/assets/brooklyn_Home/benefits/benefit13.png",
  //   title : "Guaranteed Satisfaction",
  //   desc : "We take pride in our work, and our renovators are committed to ensuring complete customer satisfaction. Our team works closely with you to understand your vision, and we won't consider the job done until you're fully satisfied with the result."
  // },
];

const Benefits = () => {
  return (
    <div className="container common__padding__top">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.benefits__HeadingIconText} />
      </div>
      <div className="pb-[25px]">
        <h2 className="text-3xl md:text-[32px] lg:text-[33px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center">
          Benefits of Home Renovation
          <span className="text-primary"> Services With Us</span>
        </h2>
        <p className="text-lg font-normal text-black leading-[36px] text-center">
          Experience the difference with RH Construction USA Inc.—your trusted
          partner for all home renovation needs in Brooklyn and beyond. Choosing
          RH Construction USA Inc. for your home renovation means working with a
          trusted, reliable team that puts your needs first. Let us transform
          your home into a beautiful, functional, and value-boosting space
          you'll love for years to come.
        </p>
      </div>

      {/* benefit data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {benefitsData?.map((data) => {
          return (
            <div
              key={data.id}
              className="cart__bg relative mt-12 px-[10px] pb-[34px]"
            >
              <Image
                src={data.img}
                alt="benefit image"
                width={92}
                height={92}
                className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border-[3px] border-black rounded-full bg-white"
              />
              <p className="text-center text-[25px] font-bold leading-normal text-black mt-12">
                {data.title}
              </p>
              <p className="text-center text-lg font-normal leading-normal text-black">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
      {/* second div  */}
      <div className="w-full flex justify-center items-center mt-8">
        <div className="w-full md:w-1/2  lg:w-1/3 cart__bg relative mt-12 px-[10px] pb-[34px]">
          <Image
            src="/assets/brooklyn_Home/benefits/benefit13.png"
            alt="benefit image"
            width={92}
            height={92}
            className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border-[3px] border-black rounded-full bg-white"
          />
          <p className="text-center text-[25px] font-bold leading-normal text-black mt-12">
            Guaranteed Satisfaction
          </p>
          <p className="text-center text-lg font-normal leading-normal text-black">
            We take pride in our work, and our renovators are committed to
            ensuring complete customer satisfaction. Our team works closely with
            you to understand your vision, and we won't consider the job done
            until you're fully satisfied with the result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
