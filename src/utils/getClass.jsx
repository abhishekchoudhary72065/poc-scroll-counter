export const getClass = (index, activeIndex) => {
  //   if (!index || !activeIndex) return;
  if (activeIndex === 0 && index === 0) {
    console.log("hello");
    return "active";
  }
  if (index > activeIndex) {
    const difference = index - activeIndex;
    return difference <= 2 ? `next--slide--${difference}` : "";
  } else if (index < activeIndex) {
    const difference = activeIndex - index;
    return difference <= 2 ? `prev--slide--${difference}` : "";
  } else {
    return "active";
  }
};
