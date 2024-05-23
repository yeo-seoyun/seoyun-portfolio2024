import DetailLink from "../atom/DetailLink";

function PortfolioSlide({ title, imgSrc, imgAlt, description, detailLink }) {
  return (
    <>
      <div className="w-[80%] h-full m-auto flex flex-col justify-center">
        <div className="=w-full h-full flex flex-col items-center justify-center gap-3">
          <img src={imgSrc} alt={imgAlt} className="w-[60%] rounded-xl" />
          <h2 className="text-3xl text-center sm:text-lg">{title}</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="text-xl sm:text-base">{description}</p>
            <DetailLink to={detailLink}>자세히 보기</DetailLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSlide;
