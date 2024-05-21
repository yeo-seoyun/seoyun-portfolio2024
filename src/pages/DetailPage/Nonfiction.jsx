import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import vite from "../../assets/vite.svg";
import Project from "../../components/molecule/Project";
import safari from "../../assets/MockUp/nonfiction-Safari.png";
import desktopGif from "../../assets/Detail/nonfictiongif.webp";
import tabletGif from "../../assets/Detail/nonfiction-tb.gif";
import mobileGif from "../../assets/Detail/nonfiction-mb.gif";

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
        <div className="max-w-[1440px] flex flex-col items-center justify-center m-auto gap-20">
          <div className="w-full flex flex-col items-center gap-5">
            <Project
              title="논픽션 반응형 홈페이지"
              contribution="100"
              skills={skills}
              link="https://non-fiction.vercel.app/"
              githubLink="https://github.com/yeo-seoyun/non-fiction"
            />

            <div>
              <img src={safari} alt="논픽션" className="h-full" />
            </div>

            <p className="text-center">
              React와 Vite를 기반으로 Tailwind CSS 를 사용하여 반응형 디자인을
              구현했습니다. <br /> PocketBase 를 통해 실시간 데이터 연동 및 상품
              리스트의 동적 구성을 지원합니다. <br /> 주요 기능으로는 상품 목록,
              상세 페이지, 검색 및 필터링 기능이 있으며, 사용자 친화적인
              인터페이스를 구현하기 위해 노력했습니다.
            </p>
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
            <ul className="w-full h-[50vh] flex items-center justify-between gap-4">
              <li className="h-full flex flex-col gap-3 items-center">
                <div className="h-full flex items-center">
                  <img
                    src={desktopGif}
                    alt="논픽션 gif"
                    className="h-full rounded-xl shadow-default border"
                  />
                </div>
                <span>Desktop ver</span>
              </li>
              <li className="h-full flex flex-col gap-3 items-center">
                <div className="h-full flex items-center">
                  <img
                    src={tabletGif}
                    alt="논픽션 테블릿 gif"
                    className="h-full rounded-xl shadow-default border"
                  />
                </div>
                <span>Tablet ver</span>
              </li>
              <li className="h-full flex flex-col gap-3 items-center">
                <div className="h-full flex items-center">
                  <img
                    src={mobileGif}
                    alt="논픽션 모바일 gif"
                    className="h-full rounded-xl shadow-default border"
                  />
                </div>
                <span>Mobile ver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nonfiction;
