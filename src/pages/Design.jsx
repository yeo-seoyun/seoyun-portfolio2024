import sylogo from "../assets/MockUp/seoyunlogo.webp";
import muzigae from "../assets/MockUp/muzigae.webp";
import dalba from "../assets/MockUp/dalba.webp";
import bluesquare from "../assets/MockUp/bluesquare.webp";
import DesignCard from "../components/molecule/DesignCard";
import { motion } from "framer-motion";

function Design() {
  return (
    <>
      <div id="design" className="w-full h-auto">
        <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center gap-10 py-8 px-10 md:w-[768px] sm:w-[320px] sm:px-0">
          <h2 className="text-4xl font-bold sm:text-2xl">UI/UX DESIGN</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              y: { duration: 1 },
            }}
            className="w-full h-full grid grid-cols-2 gap-8 sm:grid-cols-1"
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Design;
