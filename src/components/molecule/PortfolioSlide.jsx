import DetailLink from "../atom/DetailLink";

function PortfolioSlide({ title, imgSrc, imgAlt, description, detailLink }) {
  return (
    <>
      <div className="w-full h-full flex flex-col m-auto items-center justify-center gap-3">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-[63%] rounded-xl md:w-full sm:w-full"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center sm:text-lg">{title}</h2>
          <p className="text-lg sm:text-base">{description}</p>
        </div>
        <DetailLink to={detailLink}>자세히 보기</DetailLink>
      </div>
    </>
  );
}

export default PortfolioSlide;
