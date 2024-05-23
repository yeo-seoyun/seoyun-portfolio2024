import mockup1 from "../../assets/Design/dalbamockup.jpg";
import mockup2 from "../../assets/Design/dalbamockupimage.png";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function HandcreamBanner() {
  return (
    <>
      <div className="w-full h-full py-16">
        <div className="w-[1280px] h-full flex flex-col items-center justify-center m-auto gap-16 md:w-[768px] sm:w-[320px]">
          <ProjectTitleDesign
            title="HANDCREAM BANNER DESIGN"
            designContribution="100"
            description="달바의 핸드크림 베너 디자인으로 <br /> 제품의 촉촉함과 향기로운 에센스를 시각적으로 표현 "
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

export default HandcreamBanner;
