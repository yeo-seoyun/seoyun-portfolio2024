import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar-cute.png";
import mouse from "../assets/icon-mouse.svg";
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Main() {
  const { scrollYProgress } = useViewportScroll(); // 스크롤 진행 상태를 가져옴
  const [currentImage, setCurrentImage] = useState(avatar);

  // opacity를 스크롤 위치에 따라 조정
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === avatar ? avatar2 : avatar
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        style={{ opacity }} // 여기에 opacity 스타일 적용
        className="w-full h-screen bg-seoyun bg-repeat-x bg-center bg-fixed bg-size-50 animate-slide sticky top-0"
      >
        <div className="w-[1280px] h-full flex flex-col m-auto items-center justify-center gap-8 md:w-[768px] md:m-auto sm:w-[320px]">
          <img src={currentImage} alt="서윤 아바타" className="sm:w-[70%]" />
          <div className="text-2xl text-center">
            <p>WELCOME</p>
            <p>SEOYUN`S PORTFOLIO</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-500">Scroll Down</p>
            <img src={mouse} alt="스크롤" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Main;
