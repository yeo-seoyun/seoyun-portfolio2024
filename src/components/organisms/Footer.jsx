import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hi from "../../assets/hi-avatar.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="w-full h-[50vh] flex flex-col justify-center items-center gap-10 bg-gray-300">
        <div className="w-[70%] flex items-center justify-evenly">
          <img src={hi} alt="인사하는 아바타" className="w-[30%]" />
          <div className="space-y-4 text-gray-400">
            <h2 className="text-xl">CONTACT</h2>
            <div className="space-y-1">
              <p className="text-2xl text-black-100">
                열정적인 웹 퍼블리셔를 찾고계신다면!
              </p>
              <p>
                항상 끈임없이 노력하는 여서윤 입니다. <br /> 언제든지
                연락주세요!
              </p>
            </div>
            <div>
              <p className="space-x-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>010.3934.9427</span>
              </p>
              <p className="space-x-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>syunn94@naver.com</span>
              </p>
            </div>
            <p className="text-xl">Thank you for watching..❤️</p>
          </div>
        </div>
        <div>
          <p className="text-gray-100">
            Made by Seoyun. © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
