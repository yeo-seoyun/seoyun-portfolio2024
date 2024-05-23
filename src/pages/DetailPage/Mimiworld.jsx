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
            description="React와 Vite를 기반으로 Tailwind CSS를 사용하여 반응형 디자인을 구현했습니다. PocketBase를 통해 실시간 데이터 연동 및 상품 리스트의 동적 구성을 지원합니다. 주요 기능으로는 상품 목록, 상세 페이지, 검색 및 필터링 기능이 있으며, 사용자 친화적인 인터페이스를 구현하기 위해 노력했습니다."
          />

          <div className="w-full border-b"></div>

          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-2xl sm:text-lg">주요 기능 및 특징</h2>
            <ul className="sm:text-sm">
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 반응형 디자인:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  다양한 디바이스에서 일관된 사용자 경험 제공
                </p>
              </li>
              <li className="flex sm:flex-col">
                <p className="font-bold">✔️ 실시간 데이터 연동:</p>{" "}
                <p className="sm:ml-6 ml-1">
                  PocketBase를 통한 최신 상품 정보 제공
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
