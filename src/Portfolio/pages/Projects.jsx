import Gap from "../components/Gap";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <div id="projects" className="tw-pb-10">
      <Gap />
      <Heading>03. projects</Heading>
      <Gap />
      <div className="tw-grid tw-grid-cols-3">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
      <Gap />
    </div>
  );
}

export default Projects;
