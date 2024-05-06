import muzigae from "../assets/MockUp/muzigae.webp";
import DesignCard from "../components/molecule/DesignCard";

function Design() {
  return (
    <>
      <div
        id="design"
        className="w-full h-screen py-10 px-20 flex flex-col justify-center gap-10"
      >
        <h2 className="text-5xl font-bold">PORTFOLIO-DESIGN</h2>
        <div className="w-full h-full grid grid-cols-3 gap-6 bg-slate-100">
          <DesignCard
            title="FITTING BLUSH BANNER"
            imgSrc={muzigae}
            imgAlt="피팅블러셔 배너"
            detailLink="/"
          />
          <div>
            <img src={muzigae} alt="화장품 배너" className="rounded-xl" />
          </div>
          <div>
            <img src={muzigae} alt="화장품 배너" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
