function ProjectTitleDesign({ title, designContribution, description }) {
  const descriptionLines = description
    .split("<br />")
    .map((line) => line.trim());

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <p className="flex gap-2 text-lg text-gray-400 sm:text-base">
          <span>Design</span>
          <span>기여도 {designContribution}%</span>
        </p>
        <h2 className="text-center text-4xl sm:text-xl">{title}</h2>
      </div>
      <div className="-my-3 text-center sm:text-sm">
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectTitleDesign;
