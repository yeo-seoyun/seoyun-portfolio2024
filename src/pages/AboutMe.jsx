import html from "../assets/HTML5.svg";
import css from "../assets/CSS.svg";
import javascript from "../assets/JS.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import photoshop from "../assets/photoshop.svg";
import illustrator from "../assets/Illustrator.svg";
import figma from "../assets/figma.svg";

function AboutMe() {
  return (
    <>
      <div className="w-full h-screen p-20 flex flex-col">
        <h2 className="text-5xl font-bold">ABOUT ME</h2>
        <div className="m-auto">
          <h2>여서윤YeoSeoYun</h2>
          <p>안녕하세요! ㅇㅇㅇ 여서윤입니다.</p>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-10">
          <div className="w-[60%] px-20 flex">
            <h2 className="text-2xl w-[30%]">ADUCATION</h2>
            <ul className="w-[70%] space-y-2">
              <li>
                <p className="text-sm">2023.10 ~ 2024.03</p>
                <p>
                  멋쟁이사자처럼 프론트엔드 스쿨 (html, css, javascript, react)
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
          <div className="w-[60%] px-20 flex">
            <h2 className="text-2xl w-[30%]">SKILLS&amp;TOOLS</h2>
            <div className="w-[70%] flex gap-3">
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
    </>
  );
}

export default AboutMe;
