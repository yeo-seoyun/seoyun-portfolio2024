import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import Project from "../../components/molecule/Project";
import desktopGif from "../../assets/Detail/mimiworldgif.gif";
import tabletGif from "../../assets/Detail/mimiworld-tb.gif";
import mobileGif from "../../assets/Detail/mimiworld-mb.gif";
import DetailLink from "../../components/atom/DetailLink";

function Mimiworld() {
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
            title="미미월드 반응형 홈페이지"
            description="미미월드 홈페이지를 tailwind CSS를 사용해 반응형으로 작업, 리디자인"
            contribution="100"
            skills={skills}
          />

          <DetailLink to="https://mimi-world.netlify.app/">
            홈페이지 바로가기
          </DetailLink>
        </div>

        <div className="w-full h-[45vh] flex items-center justify-around">
          <img
            src={desktopGif}
            alt="미미월드 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={tabletGif}
            alt="미미월드 테블릿 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={mobileGif}
            alt="미미월드 모바일 gif"
            className="h-full rounded-xl shadow-default border"
          />
        </div>
      </div>
    </>
  );
}

export default Mimiworld;
