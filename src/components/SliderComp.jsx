import React from "react";

const SliderComp = ({ slide, index, activeIndex }) => {
  // this will get the class as we want the next & prev 2 slides referring to the actual index
  const classes =
    index === activeIndex
      ? "active"
      : index < activeIndex
      ? index <= 2
        ? `prev--slide--${activeIndex - index}`
        : ""
      : index > activeIndex
      ? index - activeIndex <= 2
        ? `next--slide--${index - activeIndex}`
        : ""
      : "";

  return (
    <div className={`swiper--comp ${classes}`}>
      {/* Index dots */}
      <span className="dot"></span>
      <span className="number">{String(index + 1).padStart(2, "0")}</span>
      <h1 className="text">{slide}</h1>
    </div>
  );
};

export default SliderComp;
