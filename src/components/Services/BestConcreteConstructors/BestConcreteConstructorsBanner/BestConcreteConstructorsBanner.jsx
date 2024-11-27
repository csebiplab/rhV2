"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import "./BestConcreteConstructorsBanner.css";

const BestConcreteConstructorsBanner = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-[8px] md:pl-0">
              <h1 className="leading-normal text-[30px] md:text-[36px] xl:text-[38px] 2xl:text-[42px] 3xl:text-[46px] 4xl:text-[50px] 5xl:text-[55px] font-bold text-left">
              Best Concrete Constructors <br/> in Brooklyn
              </h1>
              <p className="text-base lg:text-lg font-normal mb-5 leading-6 mt-4 text-black">
              RH Construction USA Inc. is one of the leading concrete constructors in Brooklyn, known for its commitment to excellence and quality craftsmanship.
              </p>
              <div className="mb-4 md:mb-0">
                <a
                  href={`tel:+1 (646) 683-4612`}
                  className="text-sm font-bold text-black"
                >
                  <Button className="!px-[34px] !py-4 !rounded-none bg-primary text-black text-lg font-bold capitalize flex items-center gap-x-2">
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
              height={760}
              src="/assets/home_page/new_home_page/hero_bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestConcreteConstructorsBanner;
