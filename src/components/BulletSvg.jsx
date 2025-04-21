import React from "react";

const BulletSvg = () => {
  return (
    <div className="bullet--svg">
      <svg
        width="640"
        height="768"
        viewBox="0 0 640 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M634.5 383.5C634.5 623.731 434.161 818.5 187 818.5C-60.1609 818.5 -260.5 623.731 -260.5 383.5C-260.5 143.269 -60.1609 -51.5 187 -51.5C434.161 -51.5 634.5 143.269 634.5 383.5Z"
          stroke="white"
        />
        <path
          d="M545.5 383C545.5 599.72 348.784 775.5 106 775.5C-136.784 775.5 -333.5 599.72 -333.5 383C-333.5 166.28 -136.784 -9.5 106 -9.5C348.784 -9.5 545.5 166.28 545.5 383Z"
          stroke="#00000"
        />
        <circle cx="635" cy="384" r="5" fill="white" />
        <circle opacity="0.4" cx="589" cy="577" r="5" fill="white" />
        <circle opacity="0.4" cx="490" cy="704" r="5" fill="white" />
        <circle opacity="0.4" cx="605" cy="224" r="5" fill="white" />
        <circle opacity="0.4" cx="493" cy="64" r="5" fill="white" />
      </svg>
    </div>
  );
};

export default BulletSvg;
