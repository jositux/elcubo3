import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './spotlight.module.scss';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handler = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    e.preventDefault();
  };
  return {
    x: position.x,
    y: position.y,
    handler,
  };
};

function CursorSpotlight({ className = '', spotlightStyle, children }) {
  const { width, height, radius, backgroundColor } = spotlightStyle;
  const { x, y, handler } = useMousePosition();

  return (
    <div className={`${styles.CursorSpotlight} ${className}`} onMouseMove={handler}>
      {children}
      <div
        className={styles.CursorSpotlight__view}
        style={{
          width,
          height,
          borderRadius: radius,
          borderColor: backgroundColor,
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
    </div>
  );
}

CursorSpotlight.propTypes = {
  className: PropTypes.string,
  spotlightStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};
CursorSpotlight.defaultProps = {
  spotlightStyle: {},
};

export default CursorSpotlight;