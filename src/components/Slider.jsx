import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import SliderComp from "./SliderComp";
import { getClass } from "../utils/getClass";

const slides = [
  "Why Study Abroad?",
  "Where and what to study?",
  "How do I Apply?",
  "Prepare to depart",
  "Arrive and thrive",
  "This is slide active 6",
  "This is slide active 7",
  "This is slide active 8",
  "This is slide active 9",
  "This is slide active 10",
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  console.log(activeIndex);
  return (
    <div className="slider">
      {/* Wrapper for Swiper */}
      <div className="swiper--container">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={120}
          loop={true}
          centeredSlides={true}
          slidesPerView={5}
          slidesPerGroup={1}
          initialSlide={2}
          direction="vertical"
          modules={[Mousewheel]}
          mousewheel={{
            enabled: true,
            sensitivity: 1,
            thresholdDelta: 50,
            releaseOnEdges: true,
          }}
          speed={500}
          className="swiper"
          preventInteractionOnTransition={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            // setActiveIndex(swiper.activeIndex);
          }}
        >
          {slides.map((slide, index) => {
            // const classes =
            //   index === activeIndex
            //     ? "active"
            //     : index < activeIndex
            //     ? index <= 2
            //       ? `prev--slide--${activeIndex - index}`
            //       : ""
            //     : index > activeIndex
            //     ? index - activeIndex <= 2
            //       ? `next--slide--${index - activeIndex}`
            //       : ""
            //     : "";
            // console.log({ index, classes, activeIndex });
            const classes = getClass(index, activeIndex);
            // console.log({ classes, index, activeIndex });

            return (
              <SwiperSlide className={`${classes}`} key={index}>
                <SliderComp
                  index={index}
                  slide={slide}
                  activeIndex={activeIndex}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
