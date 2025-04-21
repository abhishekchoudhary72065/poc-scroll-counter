import React from "react";

const SliderComp = ({ slide, index }) => {
  // this will get the class as we want the next & prev 2 slides referring to the actual index

  return (
    <div className={`swiper--comp`}>
      {/* Index dots */}
      {/* <span className="dot"></span> */}
      <span className="number">{String(index + 1).padStart(2, "0")}</span>
      <h1 className="text">{slide.text}</h1>
    </div>
  );
};

export default SliderComp;
