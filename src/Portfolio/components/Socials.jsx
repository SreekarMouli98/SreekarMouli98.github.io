import account from "../data/account.json";
import { getIcon } from "../utils";

function Socials() {
  return (
    <div
      id="Socials"
      className="tw-fixed tw-bottom-0 tw-right-0 tw-flex tw-px-4"
    >
      {account.socials.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className={[
            "tw-p-3",
            "tw-text-lightInitial",
            "dark:tw-text-darkInitial",
            "hover:tw-text-lightSecondary",
            "hover:dark:tw-text-darkSecondary",
          ].join(" ")}
        >
          <span>{getIcon(item.name)}</span>
        </a>
      ))}
    </div>
  );
}

export default Socials;
