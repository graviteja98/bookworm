import React from 'react';

const LoadingSimple = (props) => {
  return (
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="150"
    cy="150"
    r="120"
    fill="none"
    stroke="white"
    strokeWidth="12"
    strokeLinecap="round"
    strokeDasharray="754.50271" // Circumference of the circle: 2 * π * r ≈ 2 * 3.14 * 120 = 754.50271
    strokeDashoffset="754.50271" // Set initial offset to hide the circle
    opacity="0.5" // Set opacity to 0.5
  >
    <animate
      attributeName="stroke-dashoffset"
      from="754.50271" // Start with the initial offset (hidden)
      to="0" // Animate to 0 to reveal the full circle
      dur="1.5s" // Duration of the animation (2 seconds)
      fill="freeze" // Freeze the animation at the final value (0) after completion
    />
  </circle>
  <text x="50%" y="65%" textAnchor="middle" fill="white" fontSize="150px" fontWeight={600} fontFamily="Arial">
          {props.Letter}
        </text>
</svg>


  );
};

export default LoadingSimple;
