import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ delay, direction, content, children }) => {
  let timeout;
  const [show, setShow] = useState(true);

  const showTooltip = () => {
    setShow(true);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setShow(true);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {show && <div className={`tooltip ${direction || "top"}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
