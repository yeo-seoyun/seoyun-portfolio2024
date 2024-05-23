import mockup from "../../assets/Design/bluemockup.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function Bluesquare() {
  return (
    <>
      <div className="w-full h-full py-16">
        <div className="w-[1280px] h-full flex flex-col items-center justify-center m-auto gap-16 md:w-[768px] sm:w-[320px]">
          <ProjectTitleDesign
            title="BLUEAQUARE MOBILE UX/UI DESIGN"
            designContribution="100"
            description="블루스퀘어 사이트 모바일 뷰 디자인<br /> "
          />
          <div className="w-full space-y-10">
            <div className="flex">
              <img
                src={mockup}
                alt="목업이미지"
                className="h-screen m-auto md:h-[55vh] sm:h-[40vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bluesquare;
