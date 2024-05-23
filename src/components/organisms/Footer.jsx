import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hi from "../../assets/hi-avatar.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="w-full h-[55vh] flex flex-col justify-center items-center gap-10 bg-gray-300 md:h-[30vh] sm:gap-4">
        <div className="w-[70%] flex items-center justify-evenly sm:flex-col sm:gap-3 sm:text-center">
          <img src={hi} alt="인사하는 아바타" className="w-[30%] sm:w-[40%]" />
          <div className="space-y-4 text-gray-400 sm:space-y-2">
            <h2 className="text-xl sm:text-lg">CONTACT</h2>
            <div className="space-y-1">
              <p className="text-xl text-black-100 sm:text-base">
                열정적인 웹 퍼블리셔 &amp; 프론트엔드
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
            <p className="text-xl sm:text-base">Thank you for watching..❤️</p>
          </div>
        </div>
        <div>
          <p className="text-gray-100 sm:text-sm">
            Made by Seoyun. © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
