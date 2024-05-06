import DetailLink from "../atom/DetailLink";

function DesignCard({ title, imgSrc, imgAlt, detailLink }) {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-3">
        <img src={imgSrc} alt={imgAlt} className="rounded-xl" />
        <h2>{title}</h2>
        <DetailLink to={detailLink}>자세히 보기</DetailLink>
      </div>
    </>
  );
}

export default DesignCard;
