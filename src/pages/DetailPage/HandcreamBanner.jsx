import mockup1 from "../../assets/Design/dalbamockup.jpg";
import mockup2 from "../../assets/Design/dalbamockupimage.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function HandcreamBanner() {
  return (
    <>
      <div className="w-full py-28 flex flex-col m-auto gap-28 md:w-[768px] sm:w-[320px] sm:gap-14">
        <ProjectTitleDesign
          title="HANDCREAM BANNER DESIGN"
          designContribution="100"
          description="달바의 핸드크림 베너 디자인으로 <br /> 제품의 촉촉함과 향기로운 에센스를 시각적으로 표현 "
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

export default HandcreamBanner;
