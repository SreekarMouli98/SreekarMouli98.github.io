function Link({ className = "", href = "#", children, ...props }) {
  return (
    <a
      {...props}
      href={href}
      className={[
        "hover:tw-text-lightSecondary",
        "hover:dark:tw-text-darkSecondary",
        "hover:tw-underline",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export default Link;
