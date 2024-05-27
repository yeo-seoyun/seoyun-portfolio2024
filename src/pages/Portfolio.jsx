import { useState } from "react";
import FilterBtn from "../components/atom/FilterBtn";
import PortfolioContent from "../components/molecule/PortfolioContent";
import { ProjectData } from "../data/ProjectData";

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = ProjectData.filter((project) => {
    return filter === "All" || project.type === filter;
  });

  return (
    <div id="portfolio" className="w-full h-full m-auto relative bg-white">
      <div className="w-[1280px] h-full flex flex-col m-auto justify-between items-center gap-8 py-4 md:w-[768px] sm:w-[320px] sm:px-0">
        <h2 className="text-4xl font-bold sm:text-2xl">PORTFOLIO</h2>
        <FilterBtn
          currentFilter={filter}
          setFilter={setFilter}
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
        />

        <div className="w-full h-full grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-1">
          {filteredProjects.map((project) => (
            <PortfolioContent
              key={project.name}
              title={project.title}
              subject={project.subject}
              imgSrc={project.imgUrl}
              imgAlt={project.imgAlt}
              detailLink={project.detailLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
