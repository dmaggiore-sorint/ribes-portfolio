import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

function CustomSwiper({ children }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        980: {
          slidesPerView: 3,
        },
      }}
      //   effect='cube'
    >
      {children.map((item) => {
        return <SwiperSlide>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
}

export default CustomSwiper;
