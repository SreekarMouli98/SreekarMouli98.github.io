function ExperienceCard({ company, jobTitle, startDate, endDate, desc }) {
  return (
    <div>
      <h3>{company}</h3>
      <p>{jobTitle}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ExperienceCard;
