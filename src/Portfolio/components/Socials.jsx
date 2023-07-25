import account from "../data/account.json";
import { getIcon } from "../utils";
import IconButton from "./IconButton";

function Socials() {
  return (
    <div
      id="Socials"
      className="tw-fixed tw-bottom-0 tw-right-0 tw-flex tw-m-4"
    >
      {account.socials.map((item, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(item.link)}
          className="tw-mr-2"
        >
          {getIcon(item.name)}
        </IconButton>
      ))}
    </div>
  );
}

export default Socials;
