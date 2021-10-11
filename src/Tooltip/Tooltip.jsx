import React, { useState } from "react";
import "./Tooltip.scss";

/**
 * @typedef {Object} Tooltip
 * @property {string} id Html tooltip identifier
 * @property {"top"|"right"|"bottom"|"left"} position Position of the tooltip to be placed. Top by default
 * @property {number} arrowSize Arrow size in pixels. 8px by default
 * @property {number} margin Margin in pixels from the arrow to the content. 16px by default
 * @property {JSX.Element} content Tooltip content
 * @property {JSX.Element} children Children components wrapped by this
 *
 * @param {Tooltip} tooltipProps
 * @returns {JSX.Element}
 */
const Tooltip = ({
  id,
  position = "top",
  arrowSize = 8,
  margin = 6,
  content,
  children,
}) => {
  const [show, setShow] = useState(false);
  const styles = {
    BACKGROUND_COLOR: "#FFFFFF",
    BORDER_COLOR: "#123412",
    ARROW_SIZE: `${arrowSize}px`,
    MARGIN: `${margin + arrowSize - 1}px`,
  };
  /**
   * Toggles the Tooltip
   */
  const toggleTooltip = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      onFocus={toggleTooltip}
      onBlur={toggleTooltip}
    >
      {children}
      {show && (
        <div
          id={id}
          role="tooltip"
          className={`tooltip ${position || "top"}`}
          style={{
            "--tooltip-background-color": styles.BACKGROUND_COLOR,
            "--tooltip-border-color": styles.BORDER_COLOR,
            "--tooltip-arrow-size": styles.ARROW_SIZE,
            "--tooltip-margin": styles.MARGIN,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
