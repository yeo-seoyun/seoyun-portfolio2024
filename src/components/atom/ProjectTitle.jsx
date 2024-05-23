import Project from "../../components/molecule/Project";

function ProjectTitle({
  title,
  contribution,
  skills,
  link,
  githubLink,
  projectImage,
  description,
}) {
  const descriptionLines = description
    .split("<br />")
    .map((line) => line.trim());

  return (
    <div className="w-full h-full flex flex-col items-center gap-6">
      <Project
        title={title}
        contribution={contribution}
        skills={skills}
        link={link}
        githubLink={githubLink}
      />

      <img src={projectImage} alt={title} className="w-[70%] sm:w-full" />

      <div className="-my-5 text-center sm:text-base sm:text-start sm:px-2">
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectTitle;
