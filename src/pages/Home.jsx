import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";
import github from "../assets/github.svg";
import notion from "../assets/notion.svg";
import mouse from "../assets/icon-mouse.svg";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <>
      <div className="w-full h-screen p-20 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center">
          <img src={avatar} alt="서윤 아바타" />
          <p className="space-x-3">이름 이미지 넣기</p>
        </div>
        <div className="space-y-1">
          <p className="flex items-center gap-1">
            <FontAwesomeIcon icon={faMobileScreenButton} />
            <spna>010.3934.9427</spna>
          </p>
          <Link
            to="https://github.com/yeo-seoyun"
            target="_blank"
            className="flex items-center gap-1"
          >
            <img src={github} alt="깃허브" className="w-4 h-4" />
            <span>Github</span>
          </Link>
          <Link
            to="https://www.notion.so/chou-chou-world-17ed5220eaaf4ba2ae784b790f5b1e7d?pvs=4"
            target="_blank"
            className="flex items-center gap-1"
          >
            <img src={notion} alt="노션" className="w-4 h-4" />
            <span>Notion</span>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-100">scroll down</p>
          <img src={mouse} alt="스크롤" />
        </div>
      </div>
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Home;
