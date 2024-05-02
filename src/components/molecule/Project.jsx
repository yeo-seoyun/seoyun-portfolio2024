function Project({ title, description, contribution, skills }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <div className="flex items-end gap-5">
          <h2 className="text-4xl">{title}</h2>
          <p className="flex gap-2 text-lg text-gray-400">
            <span>Web | publishing</span>
            <span>기여도 {contribution}%</span>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <p>SKILLS</p>
          {skills.map((skill) => (
            <img
              key={skill.name}
              src={skill.image}
              alt={skill.name}
              className="w-6 h-6"
            />
          ))}
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
