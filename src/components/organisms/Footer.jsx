import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hi from "../../assets/hi-avatar.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="w-full h-[50vh] flex flex-col justify-center items-center gap-10 bg-gray-300">
        <div className="flex items-center justify-center space-x-10">
          <div>
            <img src={hi} alt="인사하는 아바타" />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl">CONTACT</h2>
            <div className="space-y-1">
              <p className="text-2xl">웹 퍼블리셔를 찾고계신가요?</p>
              <p>언제든지 연락주세요!</p>
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
          </div>
        </div>
        <div>
          <p className="text-gray-100">by Seoyun. © 2024 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
