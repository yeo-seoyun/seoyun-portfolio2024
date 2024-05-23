import mockup from "../../assets/Design/bluemockup.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function Bluesquare() {
  return (
    <>
      <div className="w-full py-28 flex flex-col m-auto gap-28 md:w-[768px] sm:w-[320px] sm:gap-14">
        <ProjectTitleDesign
          title="BLUEAQUARE MOBILE UX/UI DESIGN"
          designContribution="100"
          description="블루스퀘어 사이트 모바일 뷰 디자인<br /> "
        />
        <div className="max-w-[1280px] m-auto space-y-10">
          <div className="flex">
            <img
              src={mockup}
              alt="목업이미지"
              className="h-screen m-auto sm:h-[50vh]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bluesquare;
