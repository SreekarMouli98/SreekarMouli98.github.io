function ProjectCard({
  name,
  desc,
  category,
  technologies,
  links = [],
  collection = [],
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>{category}</p>
      <p>{technologies}</p>
      {links.map((item, index) => (
        <a href={item.link} key={index}>
          {item.name}
        </a>
      ))}
      {collection.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
}

export default ProjectCard;
