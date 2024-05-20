import logo from "../../assets/Design/logoimage.png";
import logoMockup from "../../assets/Design/initiallogo.jpg";
import logoMockup2 from "../../assets/Design/logoimage2.jpg";

function InitialLogo() {
  return (
    <>
      <div className="w-full p-20 flex flex-col m-auto gap-20">
        <div className="flex flex-col gap-5 pt-10">
          <div className="flex items-end gap-5">
            <h2 className="text-4xl">INITIAL LOGO DESIGN</h2>
            <p className="flex gap-2 text-lg text-gray-400">
              <span>Design</span>
              <span>기여도 100%</span>
            </p>
          </div>
          <p>이름의 이니셜을 따 로고로 제작</p>
        </div>
        <div className="w-full space-y-10">
          <img src={logo} alt="" className="w-full" />
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
