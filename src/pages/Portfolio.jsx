import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import PortfolioSlide from "../components/molecule/PortfolioSlide";
import nonfiction from "../assets/MockUp/nonfiction-mockup.png";
import mimiworld from "../assets/MockUp/mimi-mockup.png";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="w-full h-screen py-10 px-20 flex flex-col justify-center gap-10"
    >
      <h2 className="text-5xl font-bold">PORTFOLIO</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // centeredSlides={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination, Keyboard, A11y]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full m-auto"
      >
        <SwiperSlide>
          <PortfolioSlide
            title="NON FICTION"
            imgSrc={nonfiction}
            imgAlt="논픽션 반응형 홈페이지 이미지"
            description="Web | 논픽션 반응형 홈페이지"
            detailLink="/non-fiction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlide
            title="MIMI WORLD"
            imgSrc={mimiworld}
            imgAlt="미미월드 반응형 홈페이지 이미지"
            description="Web | 미미월드 반응형 홈페이지"
            detailLink="/non-fiction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlide
            title="MUZIGAE MANSION"
            imgSrc={nonfiction}
            imgAlt="무지개맨션 반응형 홈페이지 이미지"
            description="Web | 무지개맨션 반응형 홈페이지"
            detailLink="/non-fiction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlide
            title="NON FICTION"
            imgSrc={nonfiction}
            imgAlt="논픽션 반응형 홈페이지 이미지"
            description="Web | 논픽션 반응형 홈페이지"
            detailLink="/non-fiction"
          />
        </SwiperSlide>

        <div className="swiper-button-prev text-black-100"></div>
        <div className="swiper-button-next text-black-100"></div>
      </Swiper>
    </div>
  );
}

export default Portfolio;
