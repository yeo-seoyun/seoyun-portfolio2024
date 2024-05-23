import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import safari from "../../assets/MockUp/nonfiction-Safari.png";
import desktopGif from "../../assets/Detail/nonfictiongif.webp";
import tabletGif from "../../assets/Detail/nonfiction-tb.gif";
import mobileGif from "../../assets/Detail/nonfiction-mb.gif";
import ProjectTitle from "../../components/atom/ProjectTitle";
import DeviceDisplay from "../../components/molecule/DeviceDisplay";

function Nonfiction() {
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
        <div className="max-w-[1280px] flex flex-col items-center justify-center m-auto gap-20 md:w-[768px] sm:w-[320px]">
          <div className="w-full flex flex-col items-center gap-5">
            <ProjectTitle
              title="논픽션 반응형 홈페이지"
              contribution="100"
              skills={skills}
              link="https://non-fiction.vercel.app/"
              githubLink="https://github.com/yeo-seoyun/non-fiction"
              projectImage={safari}
              description="React와 Vite를 기반으로 Tailwind CSS를 사용하여 반응형 디자인을 구현했습니다. <br /> PocketBase를 통해 실시간 데이터 연동 및 상품 리스트의 동적 구성을 지원합니다. <br /> 주요 기능으로는 상품 목록, 상세 페이지, 검색 및 필터링 기능이 있으며, <br /> 사용자 친화적인 인터페이스를 구현하기 위해 노력했습니다."
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

          <div className="w-full h-full flex flex-col items-center gap-10">
            <h2 className="text-2xl">작업 화면</h2>
            <div className="w-full h-[50vh] flex items-center justify-around gap-2 md:h-[25vh] sm:h-[55vh] sm:grid sm:grid-cols-3 sm:gap-y-10 sm:gap-x-5">
              <DeviceDisplay
                src={desktopGif}
                alt="논픽션 gif"
                version="Desktop ver"
                className="sm:col-span-3"
              />
              <DeviceDisplay
                src={tabletGif}
                alt="논픽션 테블릿 gif"
                version="Tablet ver"
                className="sm:col-span-2"
              />
              <DeviceDisplay
                src={mobileGif}
                alt="논픽션 모바일 gif"
                version="Mobile ver"
                className="sm:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nonfiction;
