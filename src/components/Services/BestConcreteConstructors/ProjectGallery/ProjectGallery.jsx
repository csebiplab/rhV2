
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
  "/assets/bestConcreteConstructor/gallery/gallery1.png",
  "/assets/bestConcreteConstructor/gallery/gallery2.png",
  "/assets/bestConcreteConstructor/gallery/gallery3.png",
  "/assets/bestConcreteConstructor/gallery/gallery4.png",
  "/assets/bestConcreteConstructor/gallery/gallery5.png",
  "/assets/bestConcreteConstructor/gallery/gallery6.png",
  "/assets/bestConcreteConstructor/gallery/gallery7.png",
  "/assets/bestConcreteConstructor/gallery/gallery8.png",
  "/assets/bestConcreteConstructor/gallery/gallery9.png",
  "/assets/bestConcreteConstructor/gallery/gallery10.png",
  
];

const galImgs2 = [
  "/assets/bestConcreteConstructor/gallery/gallery11.png",
  "/assets/bestConcreteConstructor/gallery/gallery12.png",
  "/assets/bestConcreteConstructor/gallery/gallery13.png",
  "/assets/bestConcreteConstructor/gallery/gallery14.png",
  "/assets/bestConcreteConstructor/gallery/gallery15.png",
  "/assets/bestConcreteConstructor/gallery/gallery16.png",
  "/assets/bestConcreteConstructor/gallery/gallery17.png",
  "/assets/bestConcreteConstructor/gallery/gallery18.png",
  "/assets/bestConcreteConstructor/gallery/gallery19.png",
  "/assets/bestConcreteConstructor/gallery/gallery20.png",
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
    <div className="">
      <div className="custom-container common__padding__top">
        <div className="pb-2">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery__headingIconText}/>
            <div>
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] leading-normal font-bold text-black md:text-start text-center">
              Gallery of RH concrete constructor 
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
              <div className="w-full flex justify-center items-center mt-[34px]">
                <button
                  onClick={handleLoadMore}
                  className="flex items-center gap-[25px] text-lg font-medium pl-[55px] pr-[50px] py-[18px] bg-primary text-black"
                >
                  Load More <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path d="M1.78711 0.28125L0 1.89173L5.42578 6.78125L0 11.6708L1.78711 13.2813L9 6.78125L1.78711 0.28125Z" fill="black"/>
                  </svg>
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
