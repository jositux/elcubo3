import React from 'react';

const PauseAudio = (props) => {
  return (
    <svg
    width={33}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={11} height={60} rx={3} fill="#4F3C17" />
    <rect x={22} width={11} height={60} rx={3} fill="#4F3C17" />
  </svg>
  )
}

export default PauseAudio;
