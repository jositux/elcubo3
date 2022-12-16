import React from 'react';

const PlayIconTimeline = () => {
  return (
    <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clipPath="url(#a)"
      stroke="#3B2807"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.25 6.25H8.75a5 5 0 0 0-5 5v7.5a5 5 0 0 0 5 5h12.5a5 5 0 0 0 5-5v-7.5a5 5 0 0 0-5-5Z" />
      <path d="M12.5 11.25 18.75 15l-6.25 3.75v-7.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default PlayIconTimeline