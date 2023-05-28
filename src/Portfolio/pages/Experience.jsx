import experience from "../data/experience.json";
import ExperienceCard from "../components/ExperienceCard";

function Experience() {
  return (
    <div id="Experience">
      <h2>Experience</h2>
      {experience.map((item, index) => (
        <ExperienceCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Experience;
