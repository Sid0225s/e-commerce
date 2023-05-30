import React, { useEffect } from "react";
import styles from "./Carousal.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import slide1 from "./smartwatches-resized.png";

import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Carousal() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.carousal}>
      <Carousel
        swipeable={false}
        autoPlay={true}
        arrows={false}
        showDots={true}
        responsive={responsive}
      >
        <div className={styles.slide1}>
          <div data-aos="fade-down">
            {" "}
            <h1>THE NEW </h1>
            <h1>STANDARD</h1>
            <h3>Under Favourable Smartwatches</h3>
            <p>FROM</p>
            <h2>$749</h2>
            <div className={styles.butslide}>start Buying</div>
          </div>
          <img data-aos-once={false} data-aos="fade-left" src={slide1} alt="" />
        </div>
        <div className={styles.slide1}>
          <div data-aos="fade-down">
            {" "}
            <h1>THE NEW </h1>
            <h1>STANDARD</h1>
            <h3>Under Favourable Smartwatches</h3>
            <p>FROM</p>
            <h2>$749</h2>
            <div className={styles.butslide}>start Buying</div>
          </div>
          <img data-aos-once={false} data-aos="fade-left" src={slide1} alt="" />
        </div>
        <div className={styles.slide1}>
          <div data-aos="fade-down">
            {" "}
            <h1>THE NEW </h1>
            <h1>STANDARD</h1>
            <h3>Under Favourable Smartwatches</h3>
            <p>FROM</p>
            <h2>$749</h2>
            <div className={styles.butslide}>start Buying</div>
          </div>
          <img data-aos-once={false} data-aos="fade-left" src={slide1} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousal;
