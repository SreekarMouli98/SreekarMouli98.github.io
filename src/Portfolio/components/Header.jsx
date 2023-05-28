import { allPages } from "../utils";

function Header() {
  return (
    <div className="tw-flex tw-tracking-wider tw-sticky tw-top-0">
      <div className="tw-grow" />
      <ol className="tw-flex">
        {allPages.map((item, i) => (
          <li key={item.name} className="tw-px-4 tw-py-2">
            <a href={`#${item.name}`} value={item.name}>
              0{i + 1}. {item.name}
            </a>
          </li>
        ))}
      </ol>
      <a href={require("../../assets/resume.pdf")} target="_blank">
        <button className="tw-px-4 tw-py-2 tw-tracking-widest">resume</button>
      </a>
    </div>
  );
}

export default Header;
