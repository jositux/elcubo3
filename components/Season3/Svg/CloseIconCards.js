import React from 'react';

const CloseIconCards = (props) => {
  return (
    <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 34.5c9.113 0 16.5-7.387 16.5-16.5S27.113 1.5 18 1.5 1.5 8.887 1.5 18 8.887 34.5 18 34.5ZM14.334 14.333l7.333 7.334m0-7.334-7.334 7.334"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default CloseIconCards;
