import { allPages } from "../utils";
import Button from "./Button";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Link from "./Link";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div
      className={[
        "tw-flex",
        "tw-tracking-wider",
        "tw-sticky",
        "tw-top-0",
        "tw-bg-lightPrimary",
        "dark:tw-bg-darkPrimary",
        "tw-py-3",
        "tw-z-10",
        "tw-font-mono",
      ].join(" ")}
    >
      <div className="tw-grow" />
      <ol className="tw-flex tw-pr-4">
        {allPages.map((item, i) => (
          <li key={item.name} className="tw-mx-4 tw-pt-3">
            <Link href={`#${item.name}`} value={item.name}>
              0{i + 1}. {item.name}
            </Link>
          </li>
        ))}
      </ol>
      <a href={require("../../assets/resume.pdf")} target="_blank">
        <Button className="tw-tracking-widest">resume</Button>
      </a>
      <div className="tw-px-4 tw-pt-2">
        <DarkModeSwitcher
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </div>
  );
}

export default Header;
