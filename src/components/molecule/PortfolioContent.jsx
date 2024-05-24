import DetailLink from "../atom/DetailLink";

function PortfolioContent({ title, imgSrc, imgAlt, description, detailLink }) {
  return (
    <>
      <div className="w-[90%] h-full m-auto flex flex-col items-center justify-center gap-3 border pb-3 rounded-2xl overflow-hidden">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-[390px] object-cover"
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

export default PortfolioContent;
