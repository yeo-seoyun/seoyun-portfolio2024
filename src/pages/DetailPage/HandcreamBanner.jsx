import mockup1 from "../../assets/Design/dalbamockup.jpg";
import mockup2 from "../../assets/Design/dalbamockupimage.png";

function HandcreamBanner() {
  return (
    <>
      <div className="w-full p-20 flex flex-col gap-20">
        <div className="flex flex-col gap-5 pt-10">
          <div className="flex items-end gap-5">
            <h2 className="text-4xl">HANDCREAM BANNER DESIGN</h2>
            <p className="flex gap-2 text-lg text-gray-400">
              <span>Design</span>
              <span>기여도 100%</span>
            </p>
          </div>
          <p>달바의 핸드크림 베너 디자인</p>
        </div>
        <div className="flex">
          <img src={mockup1} alt="목업이미지" className="w-[50%]" />
          <img src={mockup2} alt="목업이미지" className="w-[50%]" />
        </div>
      </div>
    </>
  );
}

export default HandcreamBanner;
