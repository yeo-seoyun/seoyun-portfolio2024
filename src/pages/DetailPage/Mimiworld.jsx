import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import Project from "../../components/molecule/Project";
import safari from "../../assets/MockUp/mimi-Safari.png";
import desktopGif from "../../assets/Detail/mimiworldgif.gif";
import tabletGif from "../../assets/Detail/mimiworld-tb.gif";
import mobileGif from "../../assets/Detail/mimiworld-mb.gif";
import ProjectTitle from "../../components/atom/ProjectTitle";

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
      <div className="w-full py-28">
        <div className="max-w-[1280px] flex flex-col items-center justify-center m-auto gap-20">
          <div className="w-full flex flex-col items-center gap-5">
            <ProjectTitle
              title="미미월드 반응형 홈페이지"
              contribution="100"
              skills={skills}
              link="https://mimi-world.netlify.app/"
              githubLink="https://github.com/yeo-seoyun/mimi-world"
              projectImage={safari}
              description="React와 Vite를 기반으로 Tailwind CSS를 사용하여 반응형 디자인을 구현했습니다. PocketBase를 통해 실시간 데이터 연동 및 상품 리스트의 동적 구성을 지원합니다. 주요 기능으로는 상품 목록, 상세 페이지, 검색 및 필터링 기능이 있으며, 사용자 친화적인 인터페이스를 구현하기 위해 노력했습니다."
            />
          </div>

          <div className="w-full border-b"></div>

          <div className="w-full flex flex-col items-center gap-10">
            <h2 className="text-2xl">주요 기능 및 특징</h2>
            <ul>
              <li>
                ✔️ 반응형 디자인: 다양한 디바이스에서 일관된 사용자 경험 제공
              </li>
              <li>
                ✔️ 실시간 데이터 연동: PocketBase를 통한 최신 상품 정보 제공
              </li>
              <li>✔️ 상품 목록 및 상세 페이지: 제품 정보의 상세한 제공</li>
              <li>
                ✔️ 검색 기능: 사용자가 원하는 제품을 쉽게 찾을 수 있도록 지원
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col items-center gap-10">
            <h2 className="text-2xl">작업 화면</h2>
            <div className="w-full h-[50vh] flex items-center justify-around gap-2">
              <div className="h-full flex flex-col items-center relative">
                <img
                  src={desktopGif}
                  alt="미미월드 gif"
                  className="h-full rounded-xl shadow-default border"
                />
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full">
                  Desktop ver
                </span>
              </div>
              <div className="h-full flex flex-col items-center relative">
                <img
                  src={tabletGif}
                  alt="미미월드 테블릿 gif"
                  className="h-full rounded-xl shadow-default border"
                />
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full">
                  Teblet ver
                </span>
              </div>
              <div className="h-full flex flex-col items-center relative">
                <img
                  src={mobileGif}
                  alt="미미월드 모바일 gif"
                  className="h-full rounded-xl shadow-default border"
                />
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full">
                  Mobile ver
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mimiworld;
