import * as React from "react"

const SoundCredits = (props) => (
  <svg
    width={10}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={0.57}
      strokeMiterlimit={10}
    >
      <path d="M.568.285h8.36v8.262M.568 8.547 8.928.285" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.368)" d="M0 0h8.845v8.75H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SoundCredits
