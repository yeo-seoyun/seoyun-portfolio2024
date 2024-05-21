import mockup1 from "../../assets/Design/dalbamockup.jpg";
import mockup2 from "../../assets/Design/dalbamockupimage.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function HandcreamBanner() {
  return (
    <>
      <div className="w-full py-28 flex flex-col m-auto gap-28">
        <div className="flex flex-col gap-5 pt-10">
          <ProjectTitleDesign
            title="HANDCREAM BANNER DESIGN"
            designContribution="100"
            description="달바의 핸드크림 베너 디자인으로 <br /> 제품의 촉촉함과 향기로운 에센스를 시각적으로 표현 "
          />
        </div>
        <div className="max-w-[1280px] m-auto space-y-10">
          <div className="flex">
            <img src={mockup1} alt="목업이미지" className="w-[50%]" />
            <img src={mockup2} alt="목업이미지" className="w-[50%]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HandcreamBanner;
