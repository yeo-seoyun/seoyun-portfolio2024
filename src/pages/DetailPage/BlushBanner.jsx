import mockup1 from "../../assets/Design/muzigae.jpg";
import mockup2 from "../../assets/Design/muzigaemockup.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function BlushBanner() {
  return (
    <>
      <div className="w-full py-28 flex flex-col m-auto gap-28 md:w-[768px] sm:w-[320px] sm:gap-14">
        <ProjectTitleDesign
          title="FITTING BLUSH BANNER DESIGN"
          designContribution="100"
          description="무지개맨션의 피팅블러셔 베너 디자인으로 <br /> 브랜드가 추구하는 세련되고 현대적인 무드를 반영 "
        />

        <div className="max-w-[1280px] m-auto space-y-10">
          <div className="flex sm:flex-col">
            <img src={mockup1} alt="목업이미지" className="w-[50%] sm:w-full" />
            <img src={mockup2} alt="목업이미지" className="w-[50%] sm:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlushBanner;
