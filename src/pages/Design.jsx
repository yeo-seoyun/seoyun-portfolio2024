import sylogo from "../assets/MockUp/seoyunlogo.webp";
import muzigae from "../assets/MockUp/muzigae.webp";
import dalba from "../assets/MockUp/dalba.webp";
import bluesquare from "../assets/MockUp/bluesquare.webp";
import DesignCard from "../components/molecule/DesignCard";

function Design() {
  return (
    <>
      <div
        id="design"
        className="w-[90%] h-[150vh] m-auto py-10 flex flex-col justify-between items-center md:h-full sm:h-full"
      >
        <h2 className="text-5xl font-bold sm:text-2xl">UI/UX DESIGN</h2>
        <div className="w-[1280px] h-full grid grid-cols-3 gap-8 mt-5 md:w-[768px] md:grid-cols-2 sm:w-[320px] sm:grid-cols-1">
          <DesignCard
            title="INITIALL LOGO"
            imgSrc={sylogo}
            imgAlt="서윤 이니셜로고"
            detailLink="/initiallogo"
          />
          <DesignCard
            title="FITTING BLUSH BANNER"
            imgSrc={muzigae}
            imgAlt="피팅블러셔 배너"
            detailLink="/fittingblushbanner"
          />
          <DesignCard
            title="HANDCRAM BANNER"
            imgSrc={dalba}
            imgAlt="핸드크림 배너"
            detailLink="/handcreambanner"
          />
          <DesignCard
            title="UI/UX | BLUE SQUARE MOBILE "
            imgSrc={bluesquare}
            imgAlt="블루스퀘어 모바일 ui/ux"
            detailLink="/bluesquare"
          />
        </div>
      </div>
    </>
  );
}

export default Design;
