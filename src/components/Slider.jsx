import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";

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
          spaceBetween={50}
          loop={true}
          centeredSlides={true}
          slidesPerView={5}
          slidesPerGroup={1}
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
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  transform:
                    index > activeIndex
                      ? `translateX(${index - activeIndex * 10 + 10}px)`
                      : `translateX(${index * 10 + 10}px)`,
                }}
                className={`swiper--comp ${index === activeIndex && "active"}`}
              >
                {/* Index dots */}
                <span className="dot"></span>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h1 className="text">{slide}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
