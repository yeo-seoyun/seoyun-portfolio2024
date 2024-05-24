import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import safari from "../../assets/MockUp/muzigae-Safari.png";
import desktopGif from "../../assets/Detail/muzigaegif.webp";
import tabletGif from "../../assets/Detail/muzigae-tb.gif";
import mobileGif from "../../assets/Detail/muzigae-mb.gif";
import ProjectTitle from "../../components/atom/ProjectTitle";
import DeviceDisplay from "../../components/molecule/DeviceDisplay";

function Muzigae() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
    { name: "Pocketbase", image: pocketbase },
    { name: "Vite", image: vite },
  ];

  return (
    <>
      <div className="w-full h-full py-16">
        <div className="w-[1280px] h-full flex flex-col items-center justify-center m-auto gap-16 md:w-[768px] sm:w-[320px] sm:gap-8">
          <ProjectTitle
            title="무지개맨션 반응형 홈페이지"
            contribution="100"
            skills={skills}
            link="https://muzigae-mansion.vercel.app/"
            githubLink="https://github.com/yeo-seoyun/muzigae-mansion"
            projectImage={safari}
            description="무지개맨션 홈페이지는 현재 메인 페이지만 개발이 완료된 프로젝트로, <br /> 
            사용자에게 효과적인 첫 인상을 제공하기 위해 디자인되었습니다. <br /> 
            React, Vite 및 Tailwind CSS를 활용하여 현대적인 웹 디자인 기준과 반응형 기능을 지원하는 사이트를 구현하였습니다."
          />

          <div className="w-full border-b"></div>

          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-lg">주요 기능 및 특징</h2>
            <ul className="sm:text-sm">
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ Tailwind CSS & 반응형 디자인:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  다양한 디바이스에서 일관된 사용자 경험 제공
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ PocketBase & 실시간 데이터 연동:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  PocketBase를 통한 최신 상품 정보 제공
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 광고 팝업 기능:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  사용자에게 중요한 공지나 특별 프로모션을 알리는 광고 팝업을
                  표시합니다.
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 하루 동안 안 보기 기능:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  사용자가 광고 팝업을 하루 동안 보지 않도록 선택할 수 있는
                  기능을 추가하여 사용자 경험을 개선했습니다.
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center gap-10">
            <h2 className="text-2xl sm:text-lg">작업 화면</h2>
            <div className="w-full h-[50vh] flex items-center justify-around gap-2 md:h-[25vh] sm:h-auto sm:grid sm:grid-cols-3">
              <DeviceDisplay
                src={desktopGif}
                alt="무지개 gif"
                version="Desktop ver"
                className="sm:col-span-3"
              />
              <DeviceDisplay
                src={tabletGif}
                alt="무지개 테블릿 gif"
                version="Tablet ver"
                className="sm:col-span-2 sm:h-[70%]"
              />
              <DeviceDisplay
                src={mobileGif}
                alt="무지개 모바일 gif"
                version="Mobile ver"
                className="sm:col-span-1 sm:h-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Muzigae;
