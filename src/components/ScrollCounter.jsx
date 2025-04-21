import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import { data } from "../utils/getClass";

const ScrollCounter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="scroll--wrapper">
      {/* img that will be changed on scrolling */}
      <div className="scroll--container">
        <img
          src={data[activeIndex].image}
          className="scroll__img"
          alt={data[activeIndex].text}
        />
      </div>
      {/* Sidebar */}
      <Slider setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
    </div>
  );
};

export default ScrollCounter;
