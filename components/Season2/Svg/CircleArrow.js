import React from 'react';

const CircleArrow = ({ stroke = 'currentColor', fill = 'none', size = '36', isUp = false }) => {
  return (
    <svg transform={isUp ? 'rotate(180)' : ''} width={size} height={size} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17.5" stroke={stroke} />
      <path d="m10.5 15.25 7.5 7.5 7.5-7.5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CircleArrow;