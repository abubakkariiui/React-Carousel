import React from "react";
import useCarousel from "./useCarousel";
import useWindowSize from "./useWindowSize";
import left from "./arrow_left.svg";
import right from "./arrow_right.svg";

const Carousel = ({ children, transitionTime = 500, showPerSlide = 4 }) => {
  const length = children.length;
  const n = Math.floor(length / showPerSlide);
  const range = [...Array(n).keys()];

  const { activeIndex, prev, next, style } = useCarousel(
    length,
    transitionTime
  );

  useWindowSize();

  return (
    <div className="carousel-wrapper">
      <div onClick={prev} style={{ marginRight: 20, cursor: "pointer" }}>
        <img src={left} alt="left" />
      </div>
      <div className="carousel-window">
        <div style={style} className="carousel-viewport">
          {children.map((child, index) => (
            <div className="slide">
              <img
                src={child.props.children}
                className="imagess"
                style={{ margin: 10 }}
              />
              <p className="product-name">Dress {index + 1}</p>
              <p className="price">$800</p>
            </div>
          ))}
        </div>
      </div>
      <div onClick={prev} style={{ marginLeft: 20, cursor: "pointer" }}>
        <img src={right} alt="left" />
      </div>
      <div></div>
    </div>
  );
};

export default Carousel;
