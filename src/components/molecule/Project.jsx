import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS.svg";
import javascript from "../../assets/JS.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";

function Project({ title, description, contribution }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">{title}</h2>
        <p className="flex gap-2 text-lg">
          <span>Web | publishing</span>
          <span>기여도 {contribution}%</span>
        </p>
        <div className="flex items-center gap-1">
          <p>SKILL</p>
          <img src={html} alt="html" className="w-6 h-6" />
          <img src={css} alt="css" className="w-6 h-6" />
          <img src={javascript} alt="javascript" className="w-6 h-6" />
          <img src={react} alt="react" className="w-6 h-6" />
          <img src={tailwind} alt="tailwind" className="w-6 h-6" />
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
