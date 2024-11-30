"use client";

import "./TurnKey.css";
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Link from "next/link";

const benefitsData = [
  {
    id: 1,
    img: "/assets/bestConcreteConstructor/turnKey/key1.png",
    title: "Comprehensive Turn-Key Services",
    desc: "We specialize in turn-key solutions and offer a comprehensive suite of services covering every aspect of concrete construction. From project inception to completion, clients can rely on RH Construction for a seamless and hassle-free experience.",
  },
  {
    id: 2,
    img: "/assets/bestConcreteConstructor/turnKey/key2.png",
    title: "Expertise in Concrete Construction",
    desc: "Our construction company boasts a team of skilled and experienced professionals well-versed in all facets of concrete construction. Whether it's foundations, slabs, sidewalks, or structural elements, the company's expertise ensures the successful execution of diverse.",
  },
  {
    id: 3,
    img: "/assets/bestConcreteConstructor/turnKey/key3.png",
    title: "Cutting-edge Technology and Techniques",
    desc: "Staying ahead in the industry, we incorporate cutting-edge technology and innovative construction techniques. This commitment to staying current with industry advancements enables the company to deliver high-quality results efficiently.",
  },
  {
    id: 4,
    img: "/assets/bestConcreteConstructor/turnKey/key4.png",
    title: "Customized Solutions for Clients",
    desc: "Our concrete constructors understand that each project is unique and requires tailored solutions. The company works closely with clients to understand their needs and preferences, delivering customized turn-key solutions that meet and exceed expectations.",
  },
  {
    id: 5,
    img: "/assets/bestConcreteConstructor/turnKey/key5.png",
    title: "Adherence to Timelines and Budgets",
    desc: "Time and budget constraints are paramount in the construction industry. Our company is known for its commitment to adhering to project timelines and budgets, ensuring that clients receive exceptional value without compromising quality.",
  },
  {
    id: 6,
    img: "/assets/bestConcreteConstructor/turnKey/key6.png",
    title: "Quality Assurance and Compliance",
    desc: "Our construction company strongly emphasizes quality assurance and compliance with industry standards. Rigorous quality control measures are implemented throughout the construction process to guarantee the longevity and durability of the concrete structures.",
  },
];

const TurnKey = () => {
  return (
    <div className=" ">
      <div data-aos="zoom-in" className="container common__padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.turnKey__headingIconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
              Turn-Key of Our Concrete Constructors Brooklyn
            </h2>
            <p className="text-lg font-normal text-black leading-[40px] text-center mt-[10px]">
              With a commitment to excellence and a proven track record, our
              company has become a trusted name in the industry.
            </p>
          </div>
          {/* first div  */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[15px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="cart__bg__turnKey px-[18px] pt-[16px] pb-[22px]"
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px]"
                  />
                  <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {/* second div  */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 cart__bg__turnKey px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/bestConcreteConstructor/turnKey/key7.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                Client satisfaction as a priority
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                Client satisfaction is at the core of our company's ethos. The
                company strives to build lasting relationships by consistently
                delivering successful projects, earning the trust and confidence
                of clients in Brooklyn and beyond.
              </p>
            </div>
            <div className="md:col-span-2 cart__bg__turnKey px-[18px] pt-[16px] pb-[22px]">
              <Image
                src="/assets/bestConcreteConstructor/turnKey/key8.png"
                alt="benefits image"
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <p className="text-[20px] font-bold text-left text-black leading-normal mt-[10px]">
                Contact Us for Your Concrete Needs
              </p>
              <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                Ready to start your next project? Trust RH Construction for
                reliable, turn-key concrete construction services in Brooklyn.
                Call us today or visit our website to learn more and request a
                consultation.
              </p>
              <div className="mt-[25px]">
                <button className="flex items-center gap-[10px] py-[15px] px-[12px] text-base font-bold text-black leading-normal turnKey_btn">
                  Get Consultant
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="13"
                    viewBox="0 0 9 13"
                    fill="none"
                  >
                    <path
                      d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnKey;
