import React from "react";
import Carousel from "./Carousel";
import useWindowSize from "./useWindowSize";
import "./style.css";

export default function App() {
  const sameImage = "https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg";
  const slides = [sameImage,sameImage,sameImage,sameImage,sameImage,sameImage,sameImage,sameImage];
  const { width } = useWindowSize();
  const isMobile = width <= 450;
  return (
    <div className="container">
      <Carousel showPerSlide={isMobile ? 1 : 4}>
        {slides.map((slide) => (
          <div className="sample-slide">{slide}</div>
        ))}
      </Carousel>
    </div>
  );
}
