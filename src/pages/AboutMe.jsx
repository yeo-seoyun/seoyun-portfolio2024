import selfie from "../assets/selfie.png";
import html from "../assets/HTML5.svg";
import css from "../assets/CSS.svg";
import javascript from "../assets/JS.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import photoshop from "../assets/photoshop.svg";
import illustrator from "../assets/Illustrator.svg";
import figma from "../assets/figma.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <>
      <div
        id="about-me"
        className="w-full h-screen p-20 flex flex-col justify-between gap-10"
      >
        <h2 className="text-5xl font-bold">ABOUT ME</h2>
        <div className="w-full h-full flex flex-col gap-5 m-auto">
          <div className="w-full flex items-center justify-center gap-20 text-lg">
            <div>
              <img src={selfie} alt="html" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl">
                여서윤<span className="text-sm">YeoSeoYun</span>
              </h2>
              <p>
                안녕하세요! 신입 웹 퍼블리셔 여서윤입니다. <br />
                모든 사용자가 웹사이트를 편리하게 사용할 수 있도록
                <br /> 웹 표준과 웹 접근성을 준수하는 작업을 합니다.
              </p>
              <p>
                프로젝트의 목적을 우선하면서 원활한 협업을 중요시하고,
                <br />
                팀원과의 의견 교환을 소중히 하고, 배려 깊은 환경에서 일하기를
                희망합니다.
              </p>
              <br />
              <Link
                to=""
                className="flex items-center gap-1 hover:text-purple-100 transition-all"
              >
                <FontAwesomeIcon icon={faAngleRight} className="text-sm" />
                <span>자기소개 더보기</span>
              </Link>
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-center m-auto space-y-10">
            <div className="w-[60%] flex justify-center">
              <h2 className="text-xl flex-1">ADUCATION</h2>
              <ul className="space-y-2 flex-1">
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
            <div className="w-[60%] flex justify-center">
              <h2 className="text-xl flex-1">SKILLS&amp;TOOLS</h2>
              <div className="flex gap-3 flex-1">
                <img src={html} alt="html" className="w-8 h-8" />
                <img src={css} alt="css" className="w-8 h-8" />
                <img src={javascript} alt="javascript" className="w-8 h-8" />
                <img src={react} alt="react" className="w-8 h-8" />
                <img src={tailwind} alt="tailwind" className="w-8 h-8" />
                <img src={photoshop} alt="photoshop" className="w-8 h-8" />
                <img src={illustrator} alt="illustrator" className="w-8 h-8" />
                <img src={figma} alt="figma" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
