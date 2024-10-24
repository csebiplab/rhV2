import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from 'next/image';
import Link from 'next/link';
import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[23px]">
          <div className="md:col-span-3 ">
            <div className="flex justify-start items-center">
              <HeadingIcon text={headingIconText.aboutUs__IconText} />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-left pb-[10px]">
              About Our General Contractor Company
              </h2>
              <p className="text-lg font-normal text-black leading-[36px] text-left">
              With over 15 years of expertise in home renovations, bathroom and kitchen remodeling, roofing repair, and various construction projects, RH Construction USA Inc. has dedicated itself to delivering excellence in construction services since 2009. As a locally owned and operated company based in Brooklyn, our commitment to quality craftsmanship, innovation, and client satisfaction sets us apart. With a skilled team prioritizing efficiency and precision, we transform visions into realities, ensuring every detail is perfect. Our team of skilled professionals is committed to delivering high-quality craftsmanship, innovative solutions, and exceptional customer service. Whether residential, commercial, or industrial construction, RH Construction USA Inc. is Brooklyn's best general construction company.
              </p>
            </div>
            <div className="flex items-center gap-[5px] md:gap-[35px] pt-[25px]">
                <Link href="tel:+1 (646) 683-4612"><button className="flex items-center gap-[14px] btn__bg text-base font-bold leading-normal text-black py-[15px] px-[30px]">Request A Quote <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path d="M1.78711 0.0200195L0 1.6305L5.42578 6.52002L0 11.4095L1.78711 13.02L9 6.52002L1.78711 0.0200195Z" fill="black"/>
                </svg></button></Link>
                <p className="text-base font-bold text-black leading-normal">or</p>
                <button className="text-base font-bold leading-normal text-black"><Link href="tel:+1 (646) 683-4612">+1 (646) 683-4612</Link></button>
            </div>
          </div>

          <div className="md:col-span-2">
            <Image
              src="/assets/home_page/new_home_page/about_us.png"
              alt="about us image"
              width={613}
              height={570}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
