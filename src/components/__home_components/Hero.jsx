import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[58%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-10 text-xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                General Contractor <br /> in Brooklyn tested
              </h1>
              <p className="text-sm lg:text-base mb-5 leading-6 mt-4 text-black">
                Best general contractor in Brooklyn, specializing in home
                renovations, <br /> bathroom renovations & kitchen remodeling,
                roofing, and construction services.
              </p>
              <div className="mb-4 md:mb-0">
                <a href={`tel:+1 (646) 683-4612`} className="inline-flex">
                  <Button className="!px-[34px] !py-4 !rounded-none bg-primary hover:bg-gray-900 text-black hover:text-white text-md lg:text-lg font-semibold capitalize flex items-center gap-x-2">
                    <span>Get an Estimate </span>
                    <span>
                      <FaChevronRight />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/group73.png"
            alt="arrow left"
            className="md:w-[3%] md:h-[25%] absolute -bottom-[8%] left-0 rotate-0 hidden md:block"
          />
          <div className="hero-right relative hidden md:block">
            <Image
              width={820}
              height={825}
              src="/assets/images/group21.jpeg"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
            <img
              src="/assets/images/group73.png"
              alt="arrow right"
              className="md:w-[7%] md:h-[25%] absolute -bottom-[8%] right-0 rotate-180"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
