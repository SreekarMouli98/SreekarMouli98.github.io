function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={[
        "tw-px-4",
        "tw-py-2",
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
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default Button;
