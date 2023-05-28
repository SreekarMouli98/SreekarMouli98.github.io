import account from "../data/account.json";

function Socials() {
  return (
    <div
      id="Socials"
      className="tw-fixed tw-bottom-0 tw-right-0 tw-flex tw-px-4"
    >
      {account.socials.map((item, index) => (
        <a href={item.link} key={index} className="tw-p-2">
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
