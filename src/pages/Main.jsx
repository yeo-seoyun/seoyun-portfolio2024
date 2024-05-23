import avatar from "../assets/avatar.png";
import mouse from "../assets/icon-mouse.svg";

function Main() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen bg-seoyun bg-repeat-x bg-center bg-fixed bg-size-50 animate-slide"
      >
        <div className="w-[1280px] h-full flex flex-col m-auto items-center justify-center gap-8">
          <img src={avatar} alt="서윤 아바타" className="sm:w-[70%]" />

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-500">Scroll Down</p>
            <img src={mouse} alt="스크롤" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
