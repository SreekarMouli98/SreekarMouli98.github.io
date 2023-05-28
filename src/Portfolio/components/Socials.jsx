import account from "../data/account.json";

function Socials() {
  return (
    <div id="Socials">
      {account.socials.map((item, index) => (
        <a href={item.link} key={index}>
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
