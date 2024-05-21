import mockup from "../../assets/Design/bluemockup.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function Bluesquare() {
  return (
    <>
      <div className="w-full p-20 flex flex-col gap-20">
        <div className="flex flex-col gap-5 pt-10">
          <ProjectTitleDesign
            title="BLUEAQUARE MOBILE UX/UI DESIGN"
            designContribution="100"
            description="블루스퀘어 사이트 모바일 뷰 디자인<br /> "
          />
        </div>
        <div className="max-w-[1280px] m-auto space-y-10">
          <div className="flex">
            <img src={mockup} alt="목업이미지" className="h-screen m-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bluesquare;
