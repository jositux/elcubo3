import React from 'react';

const PersonajeArrow = () => {
  return (
    <svg
    width={33}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path
        d="m12.238 8 8 8-8 8"
        stroke="#402A04"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.238)" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default PersonajeArrow;
