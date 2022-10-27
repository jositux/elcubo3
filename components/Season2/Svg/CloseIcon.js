import React from 'react';

const CloseIcon = ({
  stroke = 'currentColor',
  fill = 'none',
  width = '32',
  height = '32',
  onClick
}) => {
  return (
    <svg onClick={onClick} width={width} height={height} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg" >
      <path d="M24 8L8 24" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L24 24" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CloseIcon;