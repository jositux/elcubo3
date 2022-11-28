import React from 'react';

const Back = (props) => {
  return (
    <svg
    width={44}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.167 22.405h25.667M9.167 22.405l7.333 7.333M9.167 22.405 16.5 15.07" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .405)" d="M0 0h44v44H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default Back;
