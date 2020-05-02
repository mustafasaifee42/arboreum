import React from "react";

type svgProps = {
  fillColor: string;
};

const AboutIcon = ({ fillColor }: svgProps) => {
  const pathFill = fillColor || "#000";

  return (
    <svg
      focusable="false"
      aria-hidden="true"
      width="140"
      height="18"
      viewBox="0 0 140 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        margin: "auto",
      }}
    >
      <path
        d="M128.8,0c-4.4,0-8.1,3.2-8.8,7.4H77.7C77,3.2,73.3,0,68.9,0s-8.1,3.2-8.8,7.4H17.8C17,3.2,13.4,0,9,0
         C4,0,0,4,0,9s4,9,9,9c4.4,0,8.1-3.2,8.8-7.4h42.3c0.7,4.2,4.4,7.4,8.8,7.4s8.1-3.2,8.8-7.4H120c0.7,4.2,4.4,7.4,8.8,7.4
         c4.9,0,9-4,9-9S133.8,0,128.8,0z"
        fill={pathFill}
      />
    </svg>
  );
};

export default AboutIcon;
