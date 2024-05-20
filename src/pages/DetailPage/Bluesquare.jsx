import mockup from "../../assets/Design/bluemockup.png";

function Bluesquare() {
  return (
    <>
      <div className="w-full p-20 flex flex-col gap-20">
        <div className="flex flex-col gap-5 pt-10">
          <div className="flex items-end gap-5">
            <h2 className="text-4xl">BLUEAQUARE MOBILE UX/UI DESIGN</h2>
            <p className="flex gap-2 text-lg text-gray-400">
              <span>Design</span>
              <span>기여도 100%</span>
            </p>
          </div>
          <p>블루스퀘어 사이트 모바일 뷰 디자인</p>
        </div>
        <div className="flex">
          <img src={mockup} alt="목업이미지" className="h-screen m-auto" />
        </div>
      </div>
    </>
  );
}

export default Bluesquare;
