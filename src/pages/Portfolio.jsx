// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import nonfiction from "../assets/MockUp/nonfiction-mockup.png";
import mimiworld from "../assets/MockUp/mimi-mockup.png";
import muzigae from "../assets/MockUp/muzigae-mockup.png";
import luvistrue from "../assets/MockUp/luv-mockup.png";
import PortfolioContent from "../components/molecule/PortfolioContent";

function Portfolio() {
  return (
    <div id="portfolio" className="w-full h-full m-auto relative bg-white">
      <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center py-4 md:w-[768px] sm:w-[320px] sm:px-0">
        <h2 className="text-4xl font-bold sm:text-2xl">PORTFOLIO</h2>
        <div className="w-full h-full grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-1">
          <PortfolioContent
            title="NON FICTION"
            imgSrc={nonfiction}
            imgAlt="논픽션 반응형 홈페이지 이미지"
            description="Web | 논픽션 반응형 홈페이지"
            detailLink="/nonfiction"
          />
          <PortfolioContent
            title="MIMI WORLD"
            imgSrc={mimiworld}
            imgAlt="미미월드 반응형 홈페이지 이미지"
            description="Web | 미미월드 반응형 홈페이지"
            detailLink="/mimiworld"
          />
          <PortfolioContent
            title="MUZIGAE MANSION"
            imgSrc={muzigae}
            imgAlt="무지개맨션 반응형 홈페이지 이미지"
            description="Web | 무지개맨션 반응형 홈페이지"
            detailLink="/muzigaemansion"
          />
          <PortfolioContent
            title="LUV IS TRUE"
            imgSrc={luvistrue}
            imgAlt="러브이즈트루 반응형 홈페이지 이미지"
            description="Web | 러브이즈트루 반응형 홈페이지"
            detailLink="/luvistrue"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
