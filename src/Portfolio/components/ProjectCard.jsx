import ReactMarkdown from "react-markdown";

function ProjectCard({
  name,
  desc,
  category,
  technologies,
  links,
  collection,
}) {
  return (
    <div className="tw-border-solid tw-border-2 tw-m-2 tw-p-4 tw-pb-6 tw-relative">
      <div className="tw-flex">
        <span className="tw-text-2xl tw-font-medium tw-grow">{name}</span>
        {links &&
          links.map((item, index) => (
            <a href={item.link} key={index} className="tw-p-1 tw-text-sm">
              {item.name}
            </a>
          ))}
      </div>
      <hr className="tw-my-2 tw-pb-2" />
      <ReactMarkdown className="tw-prose">{desc}</ReactMarkdown>
      {collection && (
        <div className="tw-max-h-40 tw-overflow-y-auto tw-my-2 tw-border-2 tw-p-2">
          {collection.map((item, index) => (
            <div key={index} className="tw-py-1">
              <div className="tw-flex">
                <span className="tw-text-xl tw-font-medium tw-grow">
                  {item.name}
                </span>
                {item.links &&
                  item.links.map((l, index) => (
                    <a href={l.link} key={index} className="tw-p-1 tw-text-sm">
                      {l.name}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="tw-pt-3 tw-absolute tw-bottom-1">
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
