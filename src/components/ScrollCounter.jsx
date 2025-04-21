import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { data } from "../utils/getClass";
import BulletSvg from "./BulletSvg";

const ScrollCounter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransition, setTransition] = useState(false);

  useEffect(() => {
    if (isTransition) return;
    setTransition(true);
  }, [activeIndex]);
  // console.log(isTransition);

  return (
    <div className="scroll--wrapper">
      {/* img that will be changed on scrolling */}
      <div className="scroll--container">
        <img
          onAnimationEnd={() => setTransition(false)}
          src={data[activeIndex].image}
          className={`scroll__img ${isTransition && "animate"}`}
          alt={data[activeIndex].text}
        />
      </div>
      <BulletSvg />
      {/* Sidebar */}
      <Slider setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
    </div>
  );
};

export default ScrollCounter;
