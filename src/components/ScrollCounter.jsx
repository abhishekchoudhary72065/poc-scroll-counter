import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

const ScrollCounter = () => {
  const textData = [
    {
      heading: "Why Study Abroad ? ",
    },
    {
      heading: "Where and what to study?",
    },
    {
      heading: "How do I Apply?",
    },
    {
      heading: "Prepare to depart",
    },
    {
      heading: "Arrive and thrive",
    },
  ];
  return (
    <div className="scroll--wrapper">
      {/* img that will be changed on scrolling */}
      <div className="scroll--container">
        <img
          src="https://cdn.pixabay.com/photo/2014/08/13/18/09/airline-417540_640.jpg"
          className="scroll__img"
          alt=""
        />
      </div>
      {/* Sidebar */}
      <Slider />
    </div>
  );
};

export default ScrollCounter;
