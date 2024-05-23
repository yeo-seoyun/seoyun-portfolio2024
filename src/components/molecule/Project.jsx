import DetailLink from "../atom/DetailLink";
import Skill from "../atom/Skills";

function Project({ title, contribution, skills, link, githubLink }) {
  return (
    <div className="w-full flex flex-col items-center gap-6 sm:gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <p className="flex gap-2 text-lg text-gray-400 sm:text-xs">
            <span>Web | publishing</span>
            <span>기여도 {contribution}%</span>
          </p>
          <h2 className="text-4xl sm:text-xl">{title}</h2>
        </div>

        <div className="w-full flex items-center justify-around sm:text-xs sm:gap-2">
          <p>SKILLS</p>
          <span className="ftext-gray-100">|</span>
          <div className="flex items-center gap-1">
            {skills.map((skill) => (
              <Skill key={skill.name} image={skill.image} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DetailLink to={link}>홈페이지 바로가기</DetailLink>
        <DetailLink to={githubLink}>GitHub</DetailLink>
      </div>
    </div>
  );
}

export default Project;
