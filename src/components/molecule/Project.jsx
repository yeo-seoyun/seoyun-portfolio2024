import DetailLink from "../atom/DetailLink";

function Project({ title, contribution, skills, link, githubLink }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <p className="flex gap-2 text-lg text-gray-400">
            <span>Web | publishing</span>
            <span>기여도 {contribution}%</span>
          </p>
          <h2 className="text-4xl">{title}</h2>
        </div>

        <div className="w-full flex items-center justify-around">
          <p>SKILLS</p>
          <span className="ftext-gray-100">|</span>
          <div className="flex items-center gap-1">
            {skills.map((skill) => (
              <div key={skill.name} className="relative group w-6 h-6">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full"
                />
                <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 px-2 py-1 text-xs opacity-0 group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>
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
