import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="w-full h-screen p-20 flex flex-col justify-center gap-10"
    >
      <h2 className="text-5xl font-bold">PORTFOLIO</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // centeredSlides={true}
        loop={true}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full m-auto bg-blue-200"
      >
        <SwiperSlide>
          <div className="bg-pink-400 w-[580px] h-[430px]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-pink-400 w-[580px] h-[430px]">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-pink-400 w-[580px] h-[430px]">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-pink-400 w-[580px] h-[430px]">Slide 4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
