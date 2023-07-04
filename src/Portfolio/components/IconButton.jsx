function IconButton({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={[
        "!tw-border-0",
        "tw-rounded-2xl",
        "tw-px-2",
        "tw-py-1",
        "tw-scale-125",
        "hover:tw-bg-transparent",
        "hover:dark:tw-bg-transparent",
        "hover:tw-scale-150",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default IconButton;
