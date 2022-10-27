import React from 'react';

const Play = ({
  stroke = 'currentColor',
  fill = 'none',
  width = '32',
  height = '32'
}) => {
  return (
    <svg width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg" >
      <g clipPath="url(#a)" >
        <path d="M10.208 5.833v23.334L29.166 17.5 10.208 5.833Z"
          stroke="#fff"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h35v35H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Play;