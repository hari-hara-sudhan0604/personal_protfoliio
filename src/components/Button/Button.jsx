import "./Button.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  href,
  target = "_self",
}) {
  // If href is provided, render an anchor instead of a button
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`btn btn-${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;