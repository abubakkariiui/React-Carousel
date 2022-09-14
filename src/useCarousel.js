import React, { useState } from "react";

const useCarousel = (length, transitionTime) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (length / 4 - 2 < activeIndex) setActiveIndex(0);
    else setActiveIndex((activeIndex + 1) % length);
  };

  const prev = () => {
    if (activeIndex == 0) setActiveIndex(length / 4 - 1);
    else setActiveIndex((activeIndex - 1 + length) % length);
  };

  const style = {
    transform: `translateX(-${100 * activeIndex}%)`,
    transition: `transform ${transitionTime}ms ease`,
  };
  return {
    activeIndex,
    prev,
    next,
    style,
  };
};

export default useCarousel;
