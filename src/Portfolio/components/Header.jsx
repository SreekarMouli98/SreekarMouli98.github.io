import { allPages } from "../utils";
import DarkModeSwitcher from "./DarkModeSwitcher";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="tw-flex tw-tracking-wider tw-sticky tw-top-0 tw-bg-lightPrimary dark:tw-bg-darkPrimary tw-py-3 tw-z-10">
      <div className="tw-grow" />
      <ol className="tw-flex">
        {allPages.map((item, i) => (
          <li
            key={item.name}
            className="tw-mx-4 tw-py-2 hover:tw-text-lightSecondary hover:dark:tw-text-darkSecondary"
          >
            <a href={`#${item.name}`} value={item.name}>
              0{i + 1}. {item.name}
            </a>
          </li>
        ))}
      </ol>
      <a href={require("../../assets/resume.pdf")} target="_blank">
        <button
          className={[
            "tw-px-4",
            "tw-py-1",
            "tw-tracking-widest",
            "tw-border-2",
            "tw-rounded-lg",
            "tw-border-lightInitial",
            "dark:tw-border-darkInitial",
            "hover:tw-bg-lightSecondaryLow",
            "hover:dark:tw-bg-darkSecondaryLow",
            "hover:tw-text-lightSecondary",
            "hover:dark:tw-text-darkSecondary",
            "hover:tw-border-lightSecondary",
            "hover:dark:tw-border-darkSecondary",
          ].join(" ")}
        >
          resume
        </button>
      </a>
      <div className="tw-px-4 tw-py-1">
        <DarkModeSwitcher
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </div>
  );
}

export default Header;
