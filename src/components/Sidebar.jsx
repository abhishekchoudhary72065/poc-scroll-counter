import React from "react";

const steps = [
  "Why Study Abroad?",
  "Where and what to study?",
  "How do I Apply?",
  "Prepare to depart",
  "Arrive and thrive",
];

const Sidebar = ({ activeIndex, onStepClick }) => {
  return (
    <div className="sidebar-curve">
      <svg
        className="sidebar-svg"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M200,0 Q0,500 200,1000"
          fill="none"
          stroke="#004D99"
          strokeWidth="200"
        />
      </svg>
      <div className="step-container">
        {steps.map((text, i) => (
          <div
            key={i}
            className={`step ${i === activeIndex ? "active" : ""}`}
            onClick={() => onStepClick(i)}
          >
            <span className="number">{String(i + 1).padStart(2, "0")}</span>
            <span className="label">{text}</span>
            {i === activeIndex && <span className="dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
