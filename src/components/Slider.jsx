"use client";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = true,
  ...rest
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={3}
      effect="fade"
      loop={false}
      autoplay={{
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        // delay: 3000,
      }}
      navigation={navigation}
      // modules={[Navigation, Autoplay, EffectFade]}
      modules={[Navigation, EffectFade]}
      {...rest}
    >
      {children}
    </Swiper>
  );
};
