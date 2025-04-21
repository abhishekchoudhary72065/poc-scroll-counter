import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import SliderComp from "./SliderComp";
import { data, getClass } from "../utils/getClass";

export default function Slider({ activeIndex, setActiveIndex }) {
  const swiperRef = useRef();
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
            sensitivity: 0.8,
            thresholdDelta: 70,
            releaseOnEdges: true,
          }}
          speed={400}
          className="swiper"
          preventInteractionOnTransition={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {data.map((slide, index) => {
            const classes = getClass(index, activeIndex);
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
