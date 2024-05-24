import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import PortfolioSlide from "../components/molecule/PortfolioSlide";
import nonfiction from "../assets/MockUp/nonfiction-mockup.png";
import mimiworld from "../assets/MockUp/mimi-mockup.png";
import muzigae from "../assets/MockUp/muzigae-mockup.png";
import luvistrue from "../assets/MockUp/luv-mockup.png";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="w-full h-screen m-auto md:h-[60vh] sm:h-[60vh]"
    >
      <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center py-8 px-10 md:w-[768px] sm:w-[320px] sm:px-0">
        <h2 className="text-4xl font-bold sm:text-2xl">PORTFOLIO</h2>
        <div className="w-full h-full">
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
            className="w-full h-full"
          >
            <SwiperSlide>
              <PortfolioSlide
                title="NON FICTION"
                imgSrc={nonfiction}
                imgAlt="논픽션 반응형 홈페이지 이미지"
                description="Web | 논픽션 반응형 홈페이지"
                detailLink="/nonfiction"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                title="MIMI WORLD"
                imgSrc={mimiworld}
                imgAlt="미미월드 반응형 홈페이지 이미지"
                description="Web | 미미월드 반응형 홈페이지"
                detailLink="/mimiworld"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                title="MUZIGAE MANSION"
                imgSrc={muzigae}
                imgAlt="무지개맨션 반응형 홈페이지 이미지"
                description="Web | 무지개맨션 반응형 홈페이지"
                detailLink="/muzigaemansion"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioSlide
                title="LUV IS TRUE"
                imgSrc={luvistrue}
                imgAlt="러브이즈트루 반응형 홈페이지 이미지"
                description="Web | 러브이즈트루 반응형 홈페이지"
                detailLink="/luvistrue"
              />
            </SwiperSlide>

            <div className="swiper-button-prev text-black-100 sm:hidden"></div>
            <div className="swiper-button-next text-black-100 sm:hidden"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
