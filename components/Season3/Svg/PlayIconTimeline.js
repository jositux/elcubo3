import React from 'react';

const PlayIconTimeline = () => {
  return (
    <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#3B2807"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.25 23.75h7.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5H6.25a2.5 2.5 0 0 0-2.5 2.5v5" />
      <path d="M5 17.5h6.25c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-3.75c0-.69.56-1.25 1.25-1.25ZM21.25 11.25l-5 5M21.25 15v-3.75H17.5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="matrix(-1 0 0 1 30 0)" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
  )
}

export default PlayIconTimeline