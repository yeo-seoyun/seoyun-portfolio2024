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
        className="w-full h-[130vh] py-10 px-20 flex flex-col justify-center gap-10"
      >
        <h2 className="text-5xl font-bold">PORTFOLIO-DESIGN</h2>
        <div className="w-full h-full grid grid-cols-3 gap-8">
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
