import logo from "../../assets/Design/logoimage.png";
import logoMockup from "../../assets/Design/initiallogo.jpg";
import logoMockup2 from "../../assets/Design/logoimage2.jpg";
import ProjectTitleDesign from "../../components/atom/ProjectTitleDesign";

function InitialLogo() {
  return (
    <>
      <div className="w-full py-28 flex flex-col m-auto gap-28 md:w-[768px] sm:w-[320px] sm:gap-14">
        <ProjectTitleDesign
          title="INITIAL LOGO DESIGN"
          designContribution="100"
          description="이름의 초성 'ㅇㅅㅇ'과 영어 이니셜 'YSY'를 창의적으로 통합한 로고 디자인으로 <br /> 각 글자를 독특한 시각적 요소로 변환하고, 평온하고 귀여운 느낌을 강조"
        />
        <div className="max-w-[1280px] m-auto space-y-10">
          <img src={logo} alt="" className="w-full px-5" />
          <div className="flex">
            <img src={logoMockup} alt="" className="w-[50%]" />
            <img src={logoMockup2} alt="" className="w-[50%]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default InitialLogo;
