import React, { useState } from "react";
import "./Tooltip.scss";

/**
 * @typedef {Object} Tooltip
 * @property {string} id Html tooltip identifier
 * @property {"top"|"right"|"bottom"|"left"} position Position of the tooltip to be placed. Bottom by default
 * @property {number} arrowSize Arrow size in pixels. 8px by default
 * @property {number} margin Margin in pixels from the arrow to the content. 8px by default
 * @property {JSX.Element} content Tooltip content
 * @property {JSX.Element} children Children components wrapped by this
 *
 * @param {Tooltip} tooltipProps
 * @returns {JSX.Element}
 */
const Tooltip = ({
  id,
  position = "bottom",
  arrowSize = 8,
  margin = 8,
  content,
  children,
}) => {
  const capitalizedPosition = `${position
    .charAt(0)
    .toUpperCase()}${position.slice(1)}`;

  import(`./Tooltip${capitalizedPosition}.scss`);

  const [show, setShow] = useState(false);
  const styles = {
    BACKGROUND_COLOR: "#FFFFFF",
    BORDER_COLOR: "#121314",
    ARROW_SIZE: `${arrowSize}px`,
    MARGIN: `${margin + arrowSize - 1}px`,
  };

  /**
   * Shows the Tooltip
   */
  const showTooltip = () => {
    setShow(true);
  };

  /**
   * Hides the Tooltip
   */
  const hideTooltip = () => {
    setShow(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {show && (
        <div
          id={id}
          role="tooltip"
          className={`tooltip ${position}`}
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
