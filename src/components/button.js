import React, { Children } from "react";
import { Link } from "react-router-dom";
import "./button.css";
const STYLES = ["btn-primary", "btn-outline"];
const SIZE = ["btn-medium", "btn-large"];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link to={"/sign-up"}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}
