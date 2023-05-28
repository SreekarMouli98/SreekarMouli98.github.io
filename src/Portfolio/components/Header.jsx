function Header() {
  const items = [
    { name: "About" },
    { name: "Experience" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.name}>
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ol>
      <button>RESUME</button>
    </div>
  );
}

export default Header;
