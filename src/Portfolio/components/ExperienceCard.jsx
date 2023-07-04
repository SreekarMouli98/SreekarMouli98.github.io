import moment from "moment";
import ReactMarkdown from "react-markdown";
import Link from "./Link";

const getMMMYYYY = (date) => moment(date).format("MMM YYYY");

function ExperienceCard({
  company,
  jobTitle,
  startDate,
  endDate,
  desc,
  companyLink,
}) {
  return (
    <div className="tw-p-2">
      <div className="tw-text-l tw-font-bold">
        <span>{jobTitle}</span>
        {" @ "}
        <span>
          <Link
            href={companyLink}
            className="tw-text-lightSecondary dark:tw-text-darkSecondary"
          >
            {company}
          </Link>
        </span>
      </div>
      <div className="tw-text-sm tw-font-light">
        <span>{getMMMYYYY(startDate)}</span>
        {" - "}
        <span>{endDate ? getMMMYYYY(endDate) : "Present"}</span>
      </div>
      <ReactMarkdown className="tw-prose tw-text-lightInitial dark:tw-text-darkInitial">
        {desc}
      </ReactMarkdown>
    </div>
  );
}

export default ExperienceCard;
