import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./SpecialConcreteServices.css";
import Image from "next/image";
import Link from "next/link";

const interiorServicesData = [
  {
    id: 1,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs1.png",
    title: "Commercial Concrete Repair Services",
    desc: "RH Construction USA Inc. is a trusted leader in providing top-notch commercial concrete services. With a commitment to excellence and a team of skilled professional commercial concrete repair contractors, we specialize in addressing various concrete issues, from cracks and spalling to structural repairs. Our experienced technicians employ cutting-edge techniques and high-quality materials to ensure durable and long-lasting solutions for our clients. RH Construction USA Inc specializes in high-quality commercial concrete repair services, catering to businesses across Brooklyn and beyond. Whether it's a warehouse floor, a parking structure, or a building foundation, RH Construction USA Inc is dedicated.",
  },
  {
    id: 2,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs2.png",
    title: "Residential Concrete Services",
    desc: "We offer top-notch residential concrete services, ensuring durability, functionality, and aesthetic appeal for home projects. With a commitment to quality craftsmanship and attention to detail, our skilled team delivers a range of concrete solutions tailored to your needs. RH Construction USA Inc specializes in high-quality residential concrete services, offering homeowners durable and beautiful concrete solutions. Our team provides various services, including concrete driveway installation, patio and walkway construction, foundation repairs, and decorative concrete finishes.",
  },
  {
    id: 3,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs3.png",
    title: "Concrete Flooring Services",
    desc: "RH Construction USA Inc offers top-notch concrete flooring services, providing durable, high-quality flooring solutions for residential, commercial, and industrial spaces. With expertise in new concrete floor installations and resurfacing, the team at RH Construction ensures a smooth, polished finish built to withstand heavy foot traffic and daily wear. Whether seeking a sleek, modern look or a rugged, industrial style, RH Construction uses premium materials and advanced techniques to achieve lasting results. Choose RH Construction USA Inc for reliable, efficient, and beautifully crafted concrete flooring that enhances the value and aesthetics of any property.",
  },
  {
    id: 4,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs4.png",
    title: "Concrete Foundation Services",
    desc: "RH Construction USA Inc. provides expert concrete foundation services to ensure strength and stability for residential and commercial projects in Brooklyn and surrounding areas. With a team of skilled professionals, we specialize in foundation pouring, repairs, and reinforcements, meeting the highest industry standards. Whether it's a new build, an addition, or repairs for an existing foundation, we use premium-grade materials and proven techniques to deliver dependable results. With a commitment to excellence and a team of skilled professional foundation concrete constructors, we provide reliable and high-quality foundation solutions tailored to the unique needs of each project.",
  },
  {
    id: 5,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs5.png",
    title: "Industrial Concrete Services",
    desc: "RH Construction USA Inc offers top-tier industrial concrete services tailored to meet the demanding needs of industrial environments. We specialize in providing top-notch industrial concrete services, catering to the diverse needs of businesses across the United States. With a commitment to precision, strength, and quality, we deliver solutions that prioritize safety and longevity. Whether it's a new industrial facility, a large-scale warehouse floor, or structural concrete for manufacturing plants, RH Construction USA Inc. provides reliable, customized services to support your operations seamlessly.",
  },
  {
    id: 6,
    img: "/assets/bestConcreteConstructor/specialConcreteServices/scs6.png",
    title: "Structural Concrete Services",
    desc: "RH Construction USA Inc. offers comprehensive structural concrete services. Our constructors specialize in providing top-notch structural concrete services, ensuring durability and excellence in every project. With a team of experienced professionals, we provide solutions tailored to the unique needs of each project, ensuring durability, safety, and structural integrity. Our services include foundation pouring, concrete slabs, beams, columns, and structural repairs, executed with precision and attention to detail. Whether a new construction or an existing structure requiring reinforcement, RH Construction USA Inc delivers high-quality results that meet industry standards.",
  },
];


const SpecialConcreteServices = () => {
  return (
    <div>
      <div className="container common__padding__top">
        <div className="flex justify-center items-center">
          <HeadingIcon text={headingIconText.specialConcreServices__headingIconText} />
        </div>
        <div className="">
          <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center pb-[10px]">
          Special Concrete Services by Our Concrete Constructors
          </h2>
        </div>
        {/* cart data  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[15px]">
          {interiorServicesData?.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={433}
                  height={250}
                />
                <div className="service__cart__bg px-[8px] pt-[4px] pb-[16px] h-[630px] 2xl:h-[540px]">
                  <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[40px] text-center pb-[5px]">
                    {data.title}
                  </h3>
                  <p className="text-base font-normal text-black leading-[31px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* second part  interior services*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[25px]">
          <div className="md:col-span-1 ">
            <div>
              <Image
                src="/assets/bestConcreteConstructor/specialConcreteServices/scs7.png"
                alt="interior services"
                width={433}
                height={250}
              />
              <div className="service__cart__bg p-[8px] h-[630px] 2xl:h-[510px]">
                <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[40px] text-center pb-[5px]">
                Stamped Concrete Services
                </h3>
                <p className="text-base font-normal text-black leading-[31px] text-center">
                RH Construction USA Inc. provides expert concrete foundation services to ensure strength and stability for residential and commercial projects in Brooklyn and surrounding areas. With a team of skilled professionals, we specialize in foundation pouring, repairs, and reinforcements, meeting the highest industry standards. Whether it's a new build, an addition, or repairs for an existing foundation, we use premium-grade materials and proven techniques to deliver dependable results. With a commitment to excellence and a team of skilled professional foundation concrete constructors, we provide reliable and high-quality foundation solutions tailored to the unique needs of each project.
                </p>
              </div>
            </div>
          </div>
          {/* large device start  */}
          <div className="hidden md:block md:col-span-2 ">
            <div className="w-full flex justify-between items-center gap-[25px] 5xl:gap-[30px] service__cart__bg2 p-[8px]">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/bestConcreteConstructor/specialConcreteServices/scs8.png"
                  alt="interior services"
                  width={423}
                  height={729}
                  className=""
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[40px] text-center pb-[5px]">
                Contact RH Concrete Constructors Today
                </h3>
                <p className="text-base font-normal text-black leading-[31px] text-center">
                Ready to start your concrete construction project? Trust RH Concrete Constructors for reliable and professional services. Contact us now for a consultation and free estimate.We pride ourselves on delivering high-quality, timely, and budget-friendly results for all of our services. Whether you're looking for a small upgrade or a complete renovation, RH Construction USA Inc. is committed to making your vision a reality.
                </p>
                <div className="pt-[25px] flex justify-center items-center">
                  <Link href="tel:+1 (646) 683-4612">
                    <button className="flex items-center gap-[14px] btn__bg text-base font-bold leading-normal text-black py-[15px] px-[30px]">
                      Get an Estimate{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                      >
                        <path
                          d="M1.78711 0.0200195L0 1.6305L5.42578 6.52002L0 11.4095L1.78711 13.02L9 6.52002L1.78711 0.0200195Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* small device start  */}
          <div className="block md:hidden  service__cart__bg2 p-[8px]">
            <div className="">
              <Image
                src="/assets/bestConcreteConstructor/specialConcreteServices/scs8.png"
                alt="interior services"
                width={423}
                height={729}
                className=""
              />
            </div>
            <div className="">
              <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[40px] text-center pb-[5px]">
              Contact RH Concrete Constructors Today
              </h3>
              <p className="text-base font-normal text-black leading-[31px] text-center">
              Ready to start your concrete construction project? Trust RH Concrete Constructors for reliable and professional services. Contact us now for a consultation and free estimate.We pride ourselves on delivering high-quality, timely, and budget-friendly results for all of our services. Whether you're looking for a small upgrade or a complete renovation, RH Construction USA Inc. is committed to making your vision a reality.
              </p>
              <div className="pt-[25px] flex justify-center items-center">
                <Link href="tel:+1 (646) 683-4612">
                  <button className="flex items-center gap-[14px] btn__bg text-base font-bold leading-normal text-black py-[15px] px-[30px]">
                    Get an Estimate{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M1.78711 0.0200195L0 1.6305L5.42578 6.52002L0 11.4095L1.78711 13.02L9 6.52002L1.78711 0.0200195Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* small device end  */}
        </div>
      </div>
    </div>
  );
};

export default SpecialConcreteServices;
