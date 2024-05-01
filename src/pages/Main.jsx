import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";
import github from "../assets/github.svg";
import notion from "../assets/notion.svg";
import mouse from "../assets/icon-mouse.svg";

function Main() {
  return (
    <>
      <div
        id="home"
        className="bg-seoyun bg-repeat-x bg-center bg-fixed bg-size-50 animate-slide w-full h-screen p-20 flex flex-col items-center justify-center space-y-10"
      >
        <div className="flex  items-center">
          <img src={avatar} alt="서윤 아바타" />
        </div>
        <div className="space-y-1">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMobileScreenButton} />
            <span>010.3934.9427</span>
          </p>
          <Link
            to="https://github.com/yeo-seoyun"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img src={github} alt="깃허브" className="w-4 h-4" />
            <span className="hover:translate-x-3 transition-all">Github</span>
          </Link>
          <Link
            to="https://www.notion.so/chou-chou-world-17ed5220eaaf4ba2ae784b790f5b1e7d?pvs=4"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img src={notion} alt="노션" className="w-4 h-4" />
            <span className="hover:translate-x-3 transition-all">Notion</span>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">Scroll Down</p>
          <img src={mouse} alt="스크롤" />
        </div>
      </div>
    </>
  );
}

export default Main;
