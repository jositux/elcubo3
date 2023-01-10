import React from 'react';

const Dashboard = () => {
  return (
    <svg
    width={45}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path
        d="M27.842 11.95H4.425A3.475 3.475 0 0 0 .95 15.426v28.39a3.475 3.475 0 0 0 3.475 3.475h23.417a3.475 3.475 0 0 0 3.474-3.475v-28.39a3.475 3.475 0 0 0-3.474-3.474Z"
        stroke="#fff"
        strokeWidth={1.9}
        strokeMiterlimit={10}
      />
      <path
        d="M26.17 17.265H6.098v13.93H26.17v-13.93Z"
        stroke="#fff"
        strokeWidth={1.584}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.455 37.24H5.95a.586.586 0 0 0-.586.585v1.717c0 .324.263.586.586.586h7.504a.586.586 0 0 0 .586-.586v-1.717a.586.586 0 0 0-.586-.586Z"
        fill="#fff"
      />
      <path
        d="M8.26 34.93v7.504c0 .323.263.586.587.586h1.716a.586.586 0 0 0 .586-.586V34.93a.586.586 0 0 0-.586-.586H8.847a.586.586 0 0 0-.586.586ZM20.988 43.023a1.97 1.97 0 1 0 0-3.94 1.97 1.97 0 0 0 0 3.94ZM24.927 38.285a1.97 1.97 0 1 0 0-3.94 1.97 1.97 0 0 0 0 3.94ZM14.39 23.939v4.32c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-4.32a.586.586 0 0 0-.586-.586h-2.312a.586.586 0 0 0-.586.586ZM9.242 25.684v2.579c0 .323.263.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.579a.586.586 0 0 0-.586-.586H9.828a.586.586 0 0 0-.586.586ZM19.54 20.521v7.738c0 .324.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-7.738a.586.586 0 0 0-.586-.586h-2.312a.586.586 0 0 0-.586.586Z"
        fill="#fff"
      />
    </g>
    <g filter="url(#b)">
      <g filter="url(#c)">
        <ellipse
          cx={29.29}
          cy={11.111}
          rx={11.094}
          ry={11.111}
          fill="#EDC25F"
        />
        <g
          clipPath="url(#d)"
          stroke="#fff"
          strokeWidth={1.112}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M27.81 5.926a1.483 1.483 0 0 1 1.48-1.482 1.478 1.478 0 0 1 1.478 1.482 5.18 5.18 0 0 1 2.959 4.444v2.223a2.967 2.967 0 0 0 1.48 2.222H23.371a2.96 2.96 0 0 0 1.48-2.223V10.37a5.19 5.19 0 0 1 2.958-4.444M27.07 14.815v.74a2.224 2.224 0 0 0 2.22 2.223 2.217 2.217 0 0 0 2.218-2.222v-.741" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(0 11)"
          d="M0 0h32.267v37.239H0z"
        />
      </clipPath>
      <clipPath id="d">
        <path
          fill="#fff"
          transform="translate(20.414 2.222)"
          d="M0 0h17.751v17.778H0z"
        />
      </clipPath>
      <filter
        id="b"
        x={14.195}
        y={0}
        width={30.189}
        height={30.222}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1596_1446"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1596_1446"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={13.747}
        y={0}
        width={31.085}
        height={31.118}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4.448} />
        <feGaussianBlur stdDeviation={2.224} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1596_1446"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1596_1446"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  )
}

export default Dashboard;