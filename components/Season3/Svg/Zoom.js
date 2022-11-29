import React from 'react';

const Zoom = () => {
  return (
    <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)" stroke="#fff" strokeWidth={2} strokeLinecap="round">
      <path
        d="M13 23c5.523 0 10-4.477 10-10S18.523 3 13 3 3 7.477 3 13s4.477 10 10 10ZM28 29l-8-8"
        strokeLinejoin="round"
      />
      <path d="M13 9v8M9 13h8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default Zoom;
