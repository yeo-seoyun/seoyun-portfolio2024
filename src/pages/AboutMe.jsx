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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        className="w-full h-screen m-auto relative bg-white sm:gap-6"
      >
        <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center gap-10 py-8 px-10 md:w-[768px] sm:w-[320px] sm:px-0 sm:gap-5">
          <h2 className="text-4xl font-bold text-center sm:text-2xl">
            ABOUT ME
          </h2>
          <div className="w-full h-full flex items-center justify-around gap-8 md:flex-col md:gap-2 sm:flex-col sm:gap-3 sm:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                x: { duration: 1 },
              }}
              className="h-full flex flex-col items-start justify-center gap-5 m-auto text-lg md:flex-row md:items-center md:gap-2"
            >
              <img src={selfie} alt="서윤 사진" className="md:w-[40%]" />
              <div className="space-y-2  sm:text-sm">
                <h2 className="text-2xl sm:text-sm">
                  여서윤 <span className="text-sm">YeoSeoYun</span>
                </h2>
                <p>
                  안녕하세요!🥰 <br /> 신입 웹 퍼블리셔 &amp; 프론트엔드 개발자
                  여서윤입니다. <br />
                  모든 사용자가 웹사이트를 편리하게 사용할 수 있도록
                  <br /> 웹 표준과 웹 접근성을 준수하는 작업을 위해 노력합니다.
                </p>
                <p>
                  팀원과의 의견 교환을 소중히 하고, 배려 깊은 환경에서 <br />{" "}
                  일하기를 희망합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: -30 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                x: { duration: 1 },
              }}
              className="h-full flex flex-col items-start justify-center gap-10 m-auto md:gap-3 sm:gap-2 sm:m-0"
            >
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-lg text-white border px-2 rounded-full bg-purple-100 bg-opacity-75 sm:text-sm">
                  CONTACT
                </h2>

                <ul className="space-y-1 ml-2">
                  <li>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        className="text-sm"
                      />
                      <span>010.3934.9427</span>
                    </p>
                  </li>
                  <li>
                    <Link
                      to="https://github.com/yeo-seoyun"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <img src={github} alt="깃허브" className="w-3 h-3" />
                      <span className="hover:translate-x-3 transition-all">
                        Github
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.notion.so/chou-chou-world-17ed5220eaaf4ba2ae784b790f5b1e7d?pvs=4"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <img src={notion} alt="노션" className="w-3 h-3" />
                      <span className="hover:translate-x-3 transition-all">
                        Notion
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-center gap-3 sm:hidden">
                <h2 className="text-lg text-white border px-2 rounded-full bg-purple-100 bg-opacity-75">
                  ADUCATION
                </h2>

                <ul className="space-y-2 ml-2">
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
                <h2 className="text-lg text-white flex-1 border px-2 rounded-full bg-purple-100 bg-opacity-75 sm:text-sm">
                  SKILLS&amp;TOOLS
                </h2>
                <div className="flex gap-x-2 gap-y-7 ml-2">
                  {skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      image={skill.image}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
