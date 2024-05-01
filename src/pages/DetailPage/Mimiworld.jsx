import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import Project from "../../components/molecule/Project";

function Mimiworld() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
  ];

  return (
    <>
      <div className="w-full p-20">
        <Project
          title="미미월드 반응형 홈페이지"
          description="미미월드 홈페이지를 반응형으로"
          contribution="100"
          skills={skills}
        />
        <div className="w-full bg-pink-100"></div>
      </div>
    </>
  );
}

export default Mimiworld;
