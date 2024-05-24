import DetailLink from "../atom/DetailLink";

function DesignCard({ title, imgSrc, imgAlt, detailLink }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-between gap-3 group">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-xl w-[480px] h-[320px] object-cover group-hover:drop-shadow-md transition-all md:w-[320px] sm:w-[270px] sm:h-[270px]"
        />
        <h2 className="text-xl sm:text-sm">{title}</h2>
        <DetailLink to={detailLink}>자세히 보기</DetailLink>
      </div>
    </>
  );
}

export default DesignCard;
