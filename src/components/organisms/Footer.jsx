import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hi from "../../assets/hi-avatar.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="w-full h-full py-5 flex flex-col justify-center items-center gap-4 bg-gray-300 md:h-[30vh] sm:gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
          className="w-[1280px] flex items-center justify-evenly md:w-[768px] sm:w-[320px] sm:flex-col sm:gap-2"
        >
          <img
            src={hi}
            alt="인사하는 아바타"
            className="md:w-[30%] sm:w-[40%]"
          />
          <div className="space-y-4 text-gray-400 md:space-y-3 sm:space-y-2 sm:text-center">
            <h2 className="text-xl sm:text-base">CONTACT</h2>
            <div className="text-xl text-black-100 sm:text-sm">
              <p>열정적인 웹 퍼블리셔 &amp; 프론트엔드</p>
              <p>항상 끈임없이 노력하겠습니다.</p>
            </div>
            <div className="sm:text-sm">
              <p className="space-x-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>010.3934.9427</span>
              </p>
              <p className="space-x-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>syunn94@naver.com</span>
              </p>
            </div>
            <p className="text-xl sm:text-sm">Thank you for watching..❤️</p>
          </div>
        </motion.div>
        <div>
          <p className="text-gray-100 sm:text-xs">
            Made by Seoyun. © 2024 All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
