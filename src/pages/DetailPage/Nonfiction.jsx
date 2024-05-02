import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import pocketbase from "../../assets/pocketbase.svg";
import Project from "../../components/molecule/Project";
import desktopGif from "../../assets/Detail/nonfictiongif.webp";
import tabletGif from "../../assets/Detail/nonfiction-tb.gif";
import mobileGif from "../../assets/Detail/nonfiction-mb.gif";
import DetailLink from "../../components/atom/DetailLink";

function Nonfiction() {
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
            title="논픽션 반응형 홈페이지"
            description="논픽션 홈페이지를 tailwind CSS를 사용해 반응형으로 작업"
            contribution="100"
            skills={skills}
          />

          <DetailLink to="https://non-fiction.vercel.app/">
            홈페이지 바로가기
          </DetailLink>
        </div>

        <div className="w-full h-[45vh] flex items-center justify-around">
          <img
            src={desktopGif}
            alt="논픽션 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={tabletGif}
            alt="논픽션 테블릿 gif"
            className="h-full rounded-xl shadow-default border"
          />
          <img
            src={mobileGif}
            alt="논픽션 모바일 gif"
            className="h-full rounded-xl shadow-default border"
          />
        </div>
      </div>
    </>
  );
}

export default Nonfiction;
