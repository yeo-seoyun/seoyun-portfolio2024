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
    <div className="w-full flex flex-col items-center gap-10">
      <Project
        title={title}
        contribution={contribution}
        skills={skills}
        link={link}
        githubLink={githubLink}
      />
      <div className="mb-8">
        <img src={projectImage} alt={title} className="h-full" />
      </div>
      {descriptionLines.map((line, index) => (
        <p key={index} className="-my-5 sm:text-lg">
          {line}
        </p>
      ))}
    </div>
  );
}

export default ProjectTitle;
