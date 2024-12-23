
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const galImgs = [
  "/assets/kitchen/OurPortfolioGallery-1.png",
  "/assets/kitchen/OurPortfolioGallery-2.png",
  "/assets/kitchen/OurPortfolioGallery-3.png",
  "/assets/kitchen/OurPortfolioGallery-4.png",
  "/assets/kitchen/OurPortfolioGallery-5.png",
  "/assets/kitchen/OurPortfolioGallery-6.png",
  "/assets/kitchen/OurPortfolioGallery-7.png",
  "/assets/kitchen/OurPortfolioGallery-8.png",
  "/assets/kitchen/OurPortfolioGallery-9.png",
  "/assets/kitchen/OurPortfolioGallery-10.png",
  
  
];

const galImgs2 = [
  "/assets/kitchen/OurPortfolioGallery-9.png",
  "/assets/kitchen/OurPortfolioGallery-10.png",
  "/assets/kitchen/OurPortfolioGallery-11.png",
  "/assets/kitchen/OurPortfolioGallery-12.png",
  "/assets/kitchen/OurPortfolioGallery-13.png",
  "/assets/kitchen/OurPortfolioGallery-14.png",
  "/assets/kitchen/OurPortfolioGallery-15.png",
  "/assets/kitchen/OurPortfolioGallery-1.png",
  "/assets/kitchen/OurPortfolioGallery-2.png",
  "/assets/kitchen/OurPortfolioGallery-3.png",
];

const ProjectGallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className="bg___color">
      <div className="custom-container common__padding__top">
        <div className="pb-2">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery__IconTxt}/>
            <div>
              <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center">
              Our Kitchen Remodeling  <br className="block md:hidden"/>
                <span className="text-primary">Gallery of Past Projects</span>
              </h2>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs.slice(0, showAll ? galImgs.length : 4).map((imgUrl, idx) => (
                <div key={idx} className="m-2 px-6">
                  <Image
                    width={370}
                    height={250}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </div>
              ))}
            </div>
            {!showAll && (
              <div className="text-center mt-4 px-10">
                <button
                  onClick={handleLoadMore}
                  className="w-full text-lg font-medium px-4 py-2 bg-primary text-white rounded"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                reverseDirection: true,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
