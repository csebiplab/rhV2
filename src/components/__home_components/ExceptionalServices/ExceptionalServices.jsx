import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./ExceptionalServices.css";
import Image from "next/image";
import Link from "next/link";

const interiorServicesData = [
  {
    id: 1,
    img: "/assets/home_page/new_home_page/interior_services/is1.png",
    title: "Bathroom Remodeling",
    desc: "RH Construction USA Inc. specializes in high-quality bathroom remodeling services in Brooklyn. Whether you want to modernize your bathroom with sleek, contemporary finishes or create a luxurious spa-like retreat, RH Construction delivers expert craftsmanship and attention to detail in every project. From custom tiling and cabinetry to lighting and plumbing upgrades, we handle all aspects of bathroom renovation. Our team ensures a smooth, hassle-free process from start to finish, turning your vision into a beautifully remodeled space.",
  },
  {
    id: 2,
    img: "/assets/home_page/new_home_page/interior_services/is2.png",
    title: "Kitchen Remodeling",
    desc: "RH Construction USA Inc. offers expert kitchen remodeling services in Brooklyn, transforming outdated spaces into functional, stylish, and modern kitchens. Our skilled team works closely with clients to design and build custom kitchens tailored to their needs and aesthetic preferences. From cabinetry and countertops to flooring and lighting, we handle every detail with precision and high-quality craftsmanship. Whether you're looking for a complete kitchen overhaul or a few upgrades, RH Construction USA Inc. ensures a seamless renovation process.",
  },
  {
    id: 3,
    img: "/assets/home_page/new_home_page/interior_services/is3.png",
    title: "Painting Service",
    desc: "RH Construction USA Inc. offers professional painting services for residential and commercial properties in Brooklyn and the surrounding areas. Whether it's refreshing the look of a home or enhancing the aesthetics of a business, we use premium materials and skilled craftsmanship to deliver flawless results. RH Construction USA Inc. guarantees the timely, budget-friendly, and high-quality completion of every project, from color consultations to meticulous finishing.",
  },
  {
    id: 4,
    img: "/assets/home_page/new_home_page/interior_services/is4.png",
    title: "Sheetrock Service",
    desc: "RH Construction USA Inc. offers expert sheetrock installation services, ensuring smooth, durable walls and ceilings for your construction or renovation project. Our skilled team handles everything from drywall hanging to finishing, including taping, mudding, and sanding, to create flawless surfaces ready for painting or texturing. Whether you need sheetrock for a residential remodel or a large commercial build, we provide high-quality workmanship with attention to detail and timely execution. Trust RH Construction USA Inc.",
  },
  {
    id: 5,
    img: "/assets/home_page/new_home_page/interior_services/is5.png",
    title: "Plastering Service",
    desc: "RH Construction USA Inc. offers expert plastering services throughout Brooklyn and surrounding areas. With a focus on precision and durability, our team provides smooth, flawless plaster finishes for both residential and commercial projects. Whether repairing damaged walls, applying new plaster, or restoring historic interiors, we ensure high-quality craftsmanship that enhances the beauty and longevity of your spaces. Trust RH Construction USA Inc. for reliable, professional plastering services.",
  },
  {
    id: 6,
    img: "/assets/home_page/new_home_page/interior_services/is6.png",
    title: "Electrical Service",
    desc: "RH Construction USA Inc. provides professional electrical services tailored to meet the needs of residential and commercial projects. Our skilled electricians handle a wide range of tasks, from wiring and lighting installations to panel upgrades and troubleshooting. RH Construction USA Inc., committed to safety, precision, and efficiency, installs and maintains all electrical systems to the highest standards, providing dependable power solutions for any construction project. Whether it's a new build or renovation, our team offers top-notch service and expertise .",
  },
];

const exteriorServicesData = [
  {
    id: 1,
    img: "/assets/home_page/new_home_page/exterior_services/es1.png",
    title: "Roofing Service",
    desc: "RH Construction USA Inc. offers top-tier roofing services in Brooklyn, specializing in residential and commercial roofing solutions. With a team of skilled professionals, we ensure high-quality craftsmanship, using durable materials that guarantee long-lasting protection. From roof installations and repairs to inspections and maintenance, RH Construction USA Inc. provides tailored roofing solutions designed to meet clients' specific needs. Our commitment to safety, efficiency, and customer satisfaction makes our company a trusted.",
  },
  {
    id: 2,
    img: "/assets/home_page/new_home_page/exterior_services/es2.png",
    title: "Pointing Service",
    desc: "RH Construction USA Inc. offers expert pointing services to maintain and restore the structural integrity and appearance of brick and masonry buildings. Our pointing service involves removing deteriorated mortar and applying new, high-quality mortar. With a focus on precision and durability, our skilled team works to prevent water infiltration, improve insulation, and preserve the aesthetic charm of your property. Whether it's for residential or commercial buildings, RH Construction USA Inc. delivers reliable and professional pointing solutions.",
  },
  {
    id: 3,
    img: "/assets/home_page/new_home_page/exterior_services/es3.png",
    title: "Water Proofing",
    desc: "RH Construction USA Inc. provides professional waterproofing services in Brooklyn to safeguard your property against water damage. With years of experience, we specialize in safeguarding basements, foundations, and walls against leaks, dampness, and mold. Our team uses high-quality materials and the latest techniques to provide long-lasting solutions, whether it's for new construction or existing structures. Trust RH Construction USA Inc. to keep your property dry and secure with our reliable waterproofing services.",
  },
  {
    id: 4,
    img: "/assets/home_page/new_home_page/exterior_services/es4.png",
    title: "Sidewalk repair & replacement",
    desc: "RH Construction USA Inc. specializes in sidewalk repair and replacement, delivering top-notch solutions to enhance safety and aesthetics in both residential and commercial properties. Our skilled team utilizes high-quality materials and advanced techniques to ensure durable, long-lasting results. Whether addressing cracks, uneven surfaces, or complete overhauls, we are committed to providing exceptional service and craftsmanship that meets your needs and exceeds your expectations. Trust RH Construction USA Inc.",
  },
  {
    id: 5,
    img: "/assets/home_page/new_home_page/exterior_services/es5.png",
    title: "Brown Stone Repair",
    desc: "RH Construction USA Inc. offers expert brownstone repair services to restore the beauty and integrity of your property. We dedicate our experienced team to preserving the unique character of brownstone facades, addressing issues such as cracks, erosion, and water damage with precision and care. We use high-quality materials and traditional restoration techniques to ensure your brownstone stands the test of time while enhancing its charm and value. Trust RH Construction USA Inc. for reliable, professional service that brings.",
  },
  {
    id: 6,
    img: "/assets/home_page/new_home_page/exterior_services/es6.png",
    title: "Brick Works",
    desc: "RH Construction USA Inc. specializes in comprehensive brickwork services, offering expert solutions for all your masonry needs. From new construction and restoration to repairs and custom designs, our skilled team ensures precision and durability in every project. We use high-quality materials and time-tested techniques to create beautiful, long-lasting brick structures that enhance the aesthetic appeal and value of your property. Whether it's a charming patio, sturdy retaining wall, or intricate brickwork for your home.",
  },
];

const ExceptionalServices = () => {
  return (
    <div>
      <div className="container common__padding__top">
        <div className="flex justify-center items-center">
          <HeadingIcon text={headingIconText.experienced__IconText} />
        </div>
        <div className="">
          <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center pb-[10px]">
            RH Construction USA Inc. provides exceptional services.
          </h2>
          <p className="text-lg font-bold text-black leading-[36px] text-center">
            Enjoy stress-free construction services.
          </p>
          <p className="text-lg font-normal text-black leading-[36px] text-center">
            Our general contractor in Brooklyn understands that your dream
            project is a significant investment, and we take pride in delivering
            unparalleled construction service. Our experienced team can handle a
            diverse range of projects, whether you're envisioning a residential
            masterpiece or a commercial endeavor.
          </p>
        </div>
        {/* Interior Services part  */}
        <div className="flex flex-col justify-center items-center">
          <button className="text-[25p] text-white font-bold leading-normal py-[14px] px-[85px] Services__bg my-[15px]">
            Interior Services
          </button>
          <p className="text-lg font-normal text-black leading-[40px] text-center">
            At RH Construction USA Inc., we specialize in transforming interiors
            with precision, style, and functionality. From kitchen and bathroom
            makeovers to living areas and office interiors, we focus on
            delivering high-quality craftsmanship, modern designs, and efficient
            project management. Our construction team tailors every detail to
            meet your aesthetic and practical needs. Our services include:
          </p>
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
                <div className="service__cart__bg p-[8px] h-[630px] 2xl:h-[540px]">
                  <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-[36px] text-center">
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
                src="/assets/home_page/new_home_page/interior_services/is7.png"
                alt="interior services"
                width={433}
                height={250}
              />
              <div className="service__cart__bg p-[8px] h-[630px] 2xl:h-[510px]">
                <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                  Plumbing Service
                </p>
                <p className="text-lg font-normal text-black leading-[36px] text-center">
                  RH Construction USA Inc. offers reliable and professional
                  plumbing services in Brooklyn and the surrounding areas. Our
                  skilled plumbers can handle all your residential or commercial
                  plumbing needs, be it a small repair, routine maintenance, or
                  a major installation. From fixing leaks and clogs to
                  installing water heaters, pipes, and fixtures, RH Construction
                  USA Inc. ensures high-quality workmanship, prompt service, and
                  lasting solutions. Trust our experienced team to keep your
                  plumbing systems running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* large device start  */}
          <div className="hidden md:block md:col-span-2 ">
            <div className="w-full flex justify-between items-center gap-[25px] 5xl:gap-[30px] service__cart__bg2 p-[8px]">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/home_page/new_home_page/interior_services/is8.png"
                  alt="interior services"
                  width={423}
                  height={729}
                  className=""
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                  Interior Remodeling & Renovation Services At a Glance
                </p>
                <p className="text-lg font-normal text-black leading-[36px] text-center">
                  At RH Construction USA Inc., we specialize in comprehensive
                  interior remodeling and renovation services designed to
                  enhance both the aesthetics and functionality of your space.
                  Our expert team delivers top-tier craftsmanship across a wide
                  range of services, ensuring every detail is tailored to your
                  needs. We pride ourselves on delivering high-quality, timely,
                  and budget-friendly results for all of our services. Whether
                  you're looking for a small upgrade or a complete renovation,
                  RH Construction USA Inc. is committed to making your vision a
                  reality.
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
                src="/assets/home_page/new_home_page/interior_services/is8.png"
                alt="interior services"
                width={423}
                height={729}
                className=""
              />
            </div>
            <div className="">
              <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                Interior Remodeling & Renovation Services At a Glance
              </p>
              <p className="text-lg font-normal text-black leading-[36px] text-center">
                At RH Construction USA Inc., we specialize in comprehensive
                interior remodeling and renovation services designed to enhance
                both the aesthetics and functionality of your space. Our expert
                team delivers top-tier craftsmanship across a wide range of
                services, ensuring every detail is tailored to your needs. We
                pride ourselves on delivering high-quality, timely, and
                budget-friendly results for all of our services. Whether you're
                looking for a small upgrade or a complete renovation, RH
                Construction USA Inc. is committed to making your vision a
                reality.
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

        {/* exterior Services part  */}
        <div className="flex flex-col justify-center items-center pt-[20px]">
          <button className="text-[25p] text-white font-bold leading-normal py-[14px] px-[85px] Services__bg my-[15px]">
            Exterior Services
          </button>
          <p className="text-lg font-normal text-black leading-[40px] text-center">
            At RH Construction USA Inc., we specialize in providing top-quality
            exterior construction services to enhance the appearance and
            functionality of your property. Whether you're looking to upgrade
            your home's curb appeal, improve energy efficiency, or repair and
            maintain the structure's exterior, our expert team delivers
            exceptional results. Our services include:
          </p>
        </div>
        {/* cart data  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[15px]">
          {exteriorServicesData?.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={433}
                  height={250}
                />
                <div className="service__cart__bg p-[8px] h-[630px] 2xl:h-[540px]">
                  <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black leading-[36px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* second part  exterior services*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[25px]">
          <div className="md:col-span-1 ">
            <div>
              <Image
                src="/assets/home_page/new_home_page/exterior_services/es7.png"
                alt="interior services"
                width={433}
                height={250}
              />
              <div className="service__cart__bg p-[8px] h-[630px] 2xl:h-[510px]">
                <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                  Power Wash & Siding
                </p>
                <p className="text-lg font-normal text-black leading-[36px] text-center">
                  RH Construction USA Inc. provides professional power washing
                  and siding services to rejuvenate your home's exterior. Our
                  expert team of siding contractors uses state-of-the-art
                  equipment and eco-friendly cleaning solutions to remove dirt,
                  grime, mold, and mildew, restoring the beauty of your siding.
                  We also offer a range of siding options, from installation to
                  repair, ensuring your property not only looks excellent but is
                  also well protected against the elements. With a commitment to
                  quality and customer satisfaction, RH Construction USA Inc.
                </p>
              </div>
            </div>
          </div>

          {/* large device start  */}
          <div className="hidden md:block md:col-span-2">
            <div className=" w-full flex justify-between items-center gap-[25px] 5xl:gap-[30px] service__cart__bg2 p-[8px]">
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/home_page/new_home_page/exterior_services/es8.png"
                  alt="interior services"
                  width={423}
                  height={729}
                  className=""
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                  Exterior Construction & Renovation Services At a Glance
                </p>
                <p className="text-lg font-normal text-black leading-[36px] text-center">
                  RH Construction USA Inc. provides top-quality exterior
                  services designed to enhance both the aesthetics and
                  functionality of your property. From roofing and waterproofing
                  to masonry work and siding, our team delivers exceptional
                  craftsmanship and reliable results for every project. With a
                  commitment to quality, RH Construction USA Inc. ensures every
                  exterior project is completed with precision and care,
                  enhancing the beauty and longevity of your property.
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
          <div className="block md:hidden service__cart__bg2 p-[8px]">
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/home_page/new_home_page/exterior_services/es8.png"
                alt="interior services"
                width={423}
                height={729}
                className=""
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[25px] font-bold text-black leading-[40px] text-center pb-[5px]">
                Exterior Construction & Renovation Services At a Glance
              </p>
              <p className="text-lg font-normal text-black leading-[36px] text-center">
                RH Construction USA Inc. provides top-quality exterior services
                designed to enhance both the aesthetics and functionality of
                your property. From roofing and waterproofing to masonry work
                and siding, our team delivers exceptional craftsmanship and
                reliable results for every project. With a commitment to
                quality, RH Construction USA Inc. ensures every exterior project
                is completed with precision and care, enhancing the beauty and
                longevity of your property.
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

export default ExceptionalServices;
