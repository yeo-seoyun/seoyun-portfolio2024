import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import Project from "../../components/molecule/Project";
import desktopGif from "../../assets/Detail/luvistruegif.gif";
import tabletGif from "../../assets/Detail/luvistrue-tb.webp";
import mobileGif from "../../assets/Detail/luvistrue-mb.webp";
import DetailLink from "../../components/atom/DetailLink";

function Luvistrue() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
    { name: "Pocketbase", image: pocketbase },
  ];

  return (
    <>
      <div className="w-full p-20 flex flex-col gap-20">
        <div className="flex flex-col items-start gap-5 pt-10">
          <Project
            title="러브이즈트루 반응형 홈페이지"
            description="러브이즈트루 홈페이지의 메인을 tailwind CSS를 사용해 반응형으로 작업"
            contribution="100"
            skills={skills}
          />

          <DetailLink to="https://luvisstrue.netlify.app">
            홈페이지 바로가기
          </DetailLink>
        </div>

        <div className="w-full h-[45vh] flex items-center justify-around">
          <img
            src={desktopGif}
            alt="러브이즈트루 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={tabletGif}
            alt="러브이즈트루 테블릿 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={mobileGif}
            alt="러브이즈트루 모바일 gif"
            className="h-full rounded-xl shadow-default border"
          />
        </div>
      </div>
    </>
  );
}

export default Luvistrue;
