import DetailLink from "../atom/DetailLink";

function DesignCard({ title, imgSrc, imgAlt, detailLink }) {
  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center justify-between gap-3 group overflow-hidden
      
      "
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-xl w-full h-full object-cover group-hover:drop-shadow-md transition-all"
        />
        <h2 className="text-xl">{title}</h2>
        <DetailLink to={detailLink}>자세히 보기</DetailLink>
      </div>
    </>
  );
}

export default DesignCard;
