import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import safari from "../../assets/MockUp/mimi-Safari.png";
import desktopGif from "../../assets/Detail/mimiworldgif.gif";
import tabletGif from "../../assets/Detail/mimiworld-tb.gif";
import mobileGif from "../../assets/Detail/mimiworld-mb.gif";
import ProjectTitle from "../../components/atom/ProjectTitle";
import DeviceDisplay from "../../components/molecule/DeviceDisplay";

function Mimiworld() {
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
            title="미미월드 반응형 홈페이지"
            contribution="100"
            skills={skills}
            link="https://mimi-world.netlify.app/"
            githubLink="https://github.com/yeo-seoyun/mimi-world"
            projectImage={safari}
            description="미미월드는 다양한 연령층의 사용자가 접근하는 어린이 장난감 브랜드 웹사이트입니다. <br /> 기존 사이트의 오래된 디자인을 개선하여 보다 모던하고 접근성 높은 인터페이스를 제공하기 위해 리디자인 프로젝트를 진행했습니다."
          />

          <div className="w-full border-b"></div>

          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-lg">주요 기능 및 특징</h2>
            <ul className="sm:text-sm">
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ React & Vite:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  최신 웹 표준에 맞는 신속한 프론트엔드 개발을 가능하게 합니다.
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ Tailwind CSS & 반응형 디자인:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  다양한 디바이스에서 일관된 사용자 경험 제공
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ PocketBase & 실시간 데이터 연동:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  실시간 데이터 연동을 통해 사용자에게 최신 상품 정보를
                  제공합니다.
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 상품 목록 및 상세 페이지:</p>{" "}
                <p className="sm:ml-6 ml-1">제품 정보의 상세한 제공</p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 검색 기능:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  사용자가 원하는 제품을 쉽게 찾을 수 있도록 지원
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center gap-10">
            <h2 className="text-2x sm:text-lg">작업 화면</h2>
            <div className="w-full h-[50vh] flex items-center justify-around gap-2 md:h-[25vh] sm:h-auto sm:grid sm:grid-cols-3">
              <DeviceDisplay
                src={desktopGif}
                alt="미미월드 gif"
                version="Desktop ver"
                className="sm:col-span-3"
              />
              <DeviceDisplay
                src={tabletGif}
                alt="미미월드 테블릿 gif"
                version="Tablet ver"
                className="sm:col-span-2 sm:h-[70%]"
              />
              <DeviceDisplay
                src={mobileGif}
                alt="미미월드 모바일 gif"
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

export default Mimiworld;
