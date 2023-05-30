import ReactMarkdown from "react-markdown";
import { getIcon } from "../utils";

function ProjectCard({
  name,
  desc,
  category,
  technologies,
  links,
  collection,
}) {
  return (
    <div
      className={[
        "tw-m-2",
        "tw-p-4",
        "tw-pb-6",
        "tw-relative",
        "tw-shadow-lg",
        "tw-bg-lightPrimary",
        "dark:tw-bg-darkPrimary",
        "tw-shadow-lightPrimaryHigh",
        "dark:tw-shadow-darkPrimaryHigh",
      ].join(" ")}
    >
      <div className="tw-flex">
        <span className="tw-text-2xl tw-font-medium tw-grow">{name}</span>
        {links &&
          links.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={[
                "tw-p-1",
                "tw-text-sm",
                "tw-text-lightInitial",
                "dark:tw-text-darkInitial",
                "hover:tw-text-lightSecondary",
                "hover:dark:tw-text-darkSecondary",
              ].join(" ")}
            >
              {getIcon(item.name)}
            </a>
          ))}
      </div>
      <hr className="tw-my-2 tw-pb-2" />
      <ReactMarkdown className="tw-prose tw-text-lightInitial dark:tw-text-darkInitial">
        {desc}
      </ReactMarkdown>
      {collection && (
        <div
          className={[
            "tw-max-h-40",
            "tw-overflow-y-auto",
            "tw-my-2",
            "tw-p-2",
            "tw-shadow-md",
            "tw-shadow-lightPrimaryHigh",
            "dark:tw-shadow-darkPrimaryHigh",
          ].join(" ")}
        >
          {collection.map((item, index) => (
            <div key={index} className="tw-py-1">
              <div className="tw-flex">
                <span className="tw-text-xl tw-font-medium tw-grow">
                  {item.name}
                </span>
                {item.links &&
                  item.links.map((l, index) => (
                    <a
                      href={l.link}
                      key={index}
                      className={[
                        "tw-p-1",
                        "tw-text-sm",
                        "tw-text-lightInitial",
                        "dark:tw-text-darkInitial",
                        "hover:tw-text-lightSecondary",
                        "hover:dark:tw-text-darkSecondary",
                      ].join(" ")}
                    >
                      {getIcon(l.name)}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="tw-p-4" />
      <div className="tw-absolute tw-bottom-2 tw-mb-2">
        {technologies &&
          technologies.map((item, index) => (
            <span key={index} className="tw-pr-2 tw-text-xs">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}

export default ProjectCard;
