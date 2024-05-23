import selfie from "../assets/selfie.png";
import html from "../assets/HTML5.svg";
import css from "../assets/CSS.svg";
import javascript from "../assets/JS.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import photoshop from "../assets/photoshop.svg";
import illustrator from "../assets/Illustrator.svg";
import figma from "../assets/figma.svg";
import github from "../assets/github.svg";
import notion from "../assets/notion.svg";
import Skill from "../components/atom/Skills";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "Figma", image: figma },
    { name: "Github", image: github },
    { name: "Notion", image: notion },
  ];

  return (
    <>
      <div
        id="about-me"
        className="w-[90%] h-screen m-auto py-10 flex flex-col justify-between items-center sm:h-[60vh] sm:gap-6"
      >
        <h2 className="text-5xl font-bold text-center sm:text-2xl">ABOUT ME</h2>
        <div className="w-[1280px] h-[90%] flex flex-col items-center justify-around gap-16 md:w-[768px] md:gap-4 sm:w-[320px] sm:gap-2">
          <div className="w-[90%] flex items-center justify-evenly m-auto text-lg md:flex-col md:gap-4 sm:flex-col sm:w-full sm:gap-4">
            <div>
              <img
                src={selfie}
                alt="html"
                className="rounded-full sm:w-[70%] sm:m-auto"
              />
            </div>
            <div className="space-y-4 md:space-y-2 md:text-center sm:text-sm sm:space-y-2">
              <h2 className="text-2xl sm:text-xl">
                여서윤<span className="text-sm">YeoSeoYun</span>
              </h2>
              <p>
                안녕하세요!🥰 <br /> 신입 웹 퍼블리셔 &amp; 프론트엔드 개발자
                여서윤입니다. <br />
                모든 사용자가 웹사이트를 편리하게 사용할 수 있도록
                <br /> 웹 표준과 웹 접근성을 준수하는 작업을 위해 노력합니다.
              </p>
              <p className="sm:hidden">
                프로젝트의 목적을 우선하면서 원활한 협업을 중요시하고,
                <br />
                팀원과의 의견 교환을 소중히 하고, 배려 깊은 환경에서 일하기를
                희망합니다.
              </p>
              <br />
              {/* <Link
                to=""
                className="flex items-center gap-1 hover:text-purple-100 transition-all"
              >
                <FontAwesomeIcon icon={faAngleRight} className="text-sm" />
                <span>자기소개 더보기</span>
              </Link> */}
            </div>
          </div>
          <div className="w-[90%] flex items-start justify-evenly m-auto sm:hidden">
            <div className="flex flex-col items-start justify-center gap-3">
              <div>
                <h2 className="text-xl text-white flex-1 border px-2 rounded-full bg-purple-100 bg-opacity-75">
                  ADUCATION
                </h2>
              </div>
              <ul className="space-y-2 flex-1 ml-1">
                <li>
                  <p className="text-sm">2024.03 ~ 재학중</p>
                  <p>한국방송통신대학교 컴퓨터과학과</p>
                </li>
                <li>
                  <p className="text-sm">2023.10 ~ 2024.03</p>
                  <p>
                    멋쟁이사자처럼 프론트엔드 스쿨 (html, css, javascript,
                    react)
                  </p>
                </li>
                <li>
                  <p className="text-sm">2022.12 ~ 2023.06</p>
                  <p>
                    이젠아카데미 모바일 웹 & 앱디자인 (웹퍼블리셔, JavaScript,
                    vue.js)
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <h2 className="text-xl text-white flex-1 border px-2 rounded-full bg-purple-100 bg-opacity-75">
                SKILLS&amp;TOOLS
              </h2>
              <div className="grid grid-cols-5 gap-x-2 gap-y-7 ml-1">
                {skills.map((skill) => (
                  <Skill
                    key={skill.name}
                    image={skill.image}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
