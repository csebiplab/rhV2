
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";

const galImgs = [
  "/assets/home_page/new_home_page/gallery/gallery1.png",
  "/assets/home_page/new_home_page/gallery/gallery2.png",
  "/assets/home_page/new_home_page/gallery/gallery3.png",
  "/assets/home_page/new_home_page/gallery/gallery4.png",
  "/assets/home_page/new_home_page/gallery/gallery5.png",
  "/assets/home_page/new_home_page/gallery/gallery6.png",
  "/assets/home_page/new_home_page/gallery/gallery7.png",
  "/assets/home_page/new_home_page/gallery/gallery8.png",
  "/assets/home_page/new_home_page/gallery/gallery9.png",
  "/assets/home_page/new_home_page/gallery/gallery10.png",
  "/assets/home_page/new_home_page/gallery/gallery11.png",
  "/assets/home_page/new_home_page/gallery/gallery11.png",
  "/assets/home_page/new_home_page/gallery/gallery12.png",
  "/assets/home_page/new_home_page/gallery/gallery13.png",
  "/assets/home_page/new_home_page/gallery/gallery14.png",
  "/assets/home_page/new_home_page/gallery/gallery15.png",
  "/assets/home_page/new_home_page/gallery/gallery16.png",
  "/assets/home_page/new_home_page/gallery/gallery17.png",
  "/assets/home_page/new_home_page/gallery/gallery18.png",
];

const galImgs2 = [
  "/assets/home_page/new_home_page/gallery/gallery19.png",
  "/assets/home_page/new_home_page/gallery/gallery20.png",
  "/assets/home_page/new_home_page/gallery/gallery21.png",
  "/assets/home_page/new_home_page/gallery/gallery22.png",
  "/assets/home_page/new_home_page/gallery/gallery23.png",
  "/assets/home_page/new_home_page/gallery/gallery24.png",
  "/assets/home_page/new_home_page/gallery/gallery25.png",
  "/assets/home_page/new_home_page/gallery/gallery26.png",
  "/assets/home_page/new_home_page/gallery/gallery27.png",
  "/assets/home_page/new_home_page/gallery/gallery28.png",
  "/assets/home_page/new_home_page/gallery/gallery29.png",
  "/assets/home_page/new_home_page/gallery/gallery30.png",
  "/assets/home_page/new_home_page/gallery/gallery31.png",
  "/assets/home_page/new_home_page/gallery/gallery32.png",
  "/assets/home_page/new_home_page/gallery/gallery33.png",
  "/assets/home_page/new_home_page/gallery/gallery34.png",
  "/assets/home_page/new_home_page/gallery/gallery35.png",
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
        <div className="">
          <div className="flex flex-col justify-center items-center">
          <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.gallery} />
            <div>
              <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-primary-100 font-bold leading-normal text-center pb-[15px]">
              CONSTRUCTION SERVICES GALLARY OF OUR PAST PROJECTS
              </h2>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs.slice(0, showAll ? galImgs.length : 4).map((imgUrl, idx) => (
                <div key={idx} className="m-2 px-0 md:px-6">
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
                  className="flex items-center justify-center gap-2 w-full text-lg font-bold px-4 py-2 bg-primary text-black rounded"
                >
                  Load More <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
  <path d="M1.38997 0.4375L0 1.67633L4.22005 5.4375L0 9.19867L1.38997 10.4375L7 5.4375L1.38997 0.4375Z" fill="black"/>
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
