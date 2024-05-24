import sylogo from "../assets/MockUp/seoyunlogo.webp";
import muzigae from "../assets/MockUp/muzigae.webp";
import dalba from "../assets/MockUp/dalba.webp";
import bluesquare from "../assets/MockUp/bluesquare.webp";
import DesignCard from "../components/molecule/DesignCard";
import PortfolioContent from "../components/molecule/PortfolioContent";

function Design() {
  return (
    <>
      <div id="design" className="w-full h-auto relative bg-white">
        <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center gap-10 py-4 md:w-[768px] sm:w-[320px] sm:px-0">
          <h2 className="text-4xl font-bold sm:text-2xl">UI/UX DESIGN</h2>
          <div className="w-full h-full grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-1">
            <PortfolioContent
              title="INITIALL LOGO"
              imgSrc={sylogo}
              imgAlt="서윤 이니셜로고"
              description="Logo Design"
              detailLink="/initiallogo"
            />
            <PortfolioContent
              title="FITTING BLUSH BANNER"
              imgSrc={muzigae}
              imgAlt="피팅블러셔 배너"
              description="Banner Design"
              detailLink="/fittingblushbanner"
            />
            <PortfolioContent
              title="HANDCRAM BANNER"
              imgSrc={dalba}
              imgAlt="핸드크림 배너"
              description="banner Design"
              detailLink="/handcreambanner"
            />
            <PortfolioContent
              title="UI/UX | BLUE SQUARE MOBILE "
              imgSrc={bluesquare}
              imgAlt="블루스퀘어 모바일 ui/ux"
              description="UIUX Design"
              detailLink="/bluesquare"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
