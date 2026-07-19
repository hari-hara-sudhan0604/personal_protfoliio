import "./Card.css";
import { memo } from "react";
function Card({
  children,
  className = "",
}) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

export default memo(Card);