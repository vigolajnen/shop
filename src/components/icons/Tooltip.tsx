import * as React from "react";
import type { SVGProps } from "react";
const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#667085"
      d="M9 13.167c.236 0 .434-.08.594-.24.16-.16.24-.358.24-.594V9a.807.807 0 0 0-.24-.594.803.803 0 0 0-.594-.24.807.807 0 0 0-.594.24.803.803 0 0 0-.24.594v3.333c0 .236.08.435.24.595.16.16.358.24.594.239ZM9 6.5c.236 0 .434-.08.594-.24.16-.16.24-.358.24-.593a.807.807 0 0 0-.24-.594.803.803 0 0 0-.594-.24.807.807 0 0 0-.594.24.803.803 0 0 0-.24.594c0 .236.08.434.24.594.16.16.358.24.594.24Zm0 10.833a8.11 8.11 0 0 1-3.25-.656 8.426 8.426 0 0 1-2.646-1.781 8.41 8.41 0 0 1-1.78-2.646A8.13 8.13 0 0 1 .666 9a8.11 8.11 0 0 1 .656-3.25 8.428 8.428 0 0 1 1.781-2.646 8.41 8.41 0 0 1 2.646-1.78A8.13 8.13 0 0 1 9 .666a8.11 8.11 0 0 1 3.25.656 8.43 8.43 0 0 1 2.646 1.781 8.422 8.422 0 0 1 1.781 2.646A8.102 8.102 0 0 1 17.333 9a8.11 8.11 0 0 1-.656 3.25 8.43 8.43 0 0 1-1.781 2.646 8.423 8.423 0 0 1-2.646 1.782 8.1 8.1 0 0 1-3.25.655Zm0-1.666c1.861 0 3.438-.646 4.73-1.938 1.29-1.291 1.937-2.868 1.937-4.729 0-1.861-.646-3.437-1.938-4.73C12.438 2.98 10.861 2.334 9 2.334c-1.861 0-3.438.646-4.73 1.938C2.98 5.563 2.334 7.139 2.334 9c0 1.86.646 3.437 1.938 4.728C5.562 15.021 7.139 15.667 9 15.667Z"
    />
  </svg>
);
export default SvgTooltip;