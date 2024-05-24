import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import safari from "../../assets/MockUp/luvistrue-Safari.png";
import desktopGif from "../../assets/Detail/luvistruegif.webp";
import tabletGif from "../../assets/Detail/luvistrue-tb.webp";
import mobileGif from "../../assets/Detail/luvistrue-mb.webp";
import ProjectTitle from "../../components/atom/ProjectTitle";
import DeviceDisplay from "../../components/molecule/DeviceDisplay";

function Luvistrue() {
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
            title="러브이즈트루 반응형 홈페이지"
            contribution="100"
            skills={skills}
            link="https://luvisstrue.netlify.app"
            githubLink="https://github.com/yeo-seoyun/luvistrue"
            projectImage={safari}
            description="React, Vite, 그리고 Tailwind CSS를 활용하여 기존 사이트의 디자인과 기능을 최대한 재현하면서, <br /> 
            현대적인 웹 개발 표준과 반응형 디자인을 지원하는 사이트를 개발하는 것을 목표로 합니다. <br />
            현재 메인 페이지의 기능 구현을 완료한 후, 추가적으로 사용자 인증 기능을 포함한 로그인 및 회원가입 기능을 개발할 예정입니다."
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
                <p className="font-bold">✔️ 상품 목록 및 상세 페이지:</p>{" "}
                <p className="sm:ml-6 ml-1">제품 정보의 상세한 제공</p>
              </li>
            </ul>
          </div>

          <div className="w-full h-full flex flex-col items-center gap-10">
            <h2 className="text-2xl sm:text-lg">작업 화면</h2>
            <div className="w-full h-[50vh] flex items-center justify-around gap-2 md:h-[25vh] sm:h-auto sm:grid sm:grid-cols-3">
              <DeviceDisplay
                src={desktopGif}
                alt="러브이즈트루 gif"
                version="Desktop ver"
                className="sm:col-span-3"
              />
              <DeviceDisplay
                src={tabletGif}
                alt="러브이즈트루 테블릿 gif"
                version="Tablet ver"
                className="sm:col-span-2 sm:h-[70%]"
              />
              <DeviceDisplay
                src={mobileGif}
                alt="러브이즈트루 모바일 gif"
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

export default Luvistrue;
