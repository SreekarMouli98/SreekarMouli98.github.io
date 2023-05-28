import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      {projects.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Projects;
