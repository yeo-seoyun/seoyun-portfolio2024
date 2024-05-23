import mockup1 from "../../assets/Design/muzigae.jpg";
import mockup2 from "../../assets/Design/muzigaemockup.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function BlushBanner() {
  return (
    <>
      <div className="w-full h-full py-16">
        <div className="w-[1280px] h-full flex flex-col items-center justify-center m-auto gap-16 md:w-[768px] sm:w-[320px]">
          <ProjectTitleDesign
            title="FITTING BLUSH BANNER DESIGN"
            designContribution="100"
            description="무지개맨션의 피팅블러셔 베너 디자인으로 <br /> 브랜드가 추구하는 세련되고 현대적인 무드를 반영 "
          />

          <div className="w-[80%] space-y-10 md:w-full sm:w-full">
            <div className="flex sm:flex-col md:flex-col">
              <img
                src={mockup1}
                alt="목업이미지"
                className="w-[50%] sm:w-full md:w-full"
              />
              <img
                src={mockup2}
                alt="목업이미지"
                className="w-[50%] sm:w-full md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlushBanner;
