import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "./themeforest1.png";
import logo2 from "./themeforest2.png";
import logo3 from "./themeforest3.png";
import logo4 from "./themeforest4.png";
import logo5 from "./themeforest5.png";
import logo6 from "./themeforest6.png";
import styles from "./Slider.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1124 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1124, min: 664 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
  },
};
function Slider() {
  return (
    <div className={styles.slider}>
      <Carousel
        className={styles.carousal1}
        infinite={true}
        responsive={responsive}
      >
        <li>
          <img src={logo1} alt="" />
        </li>
        <li>
          {" "}
          <img src={logo2} alt="" />
        </li>
        <li>
          <img src={logo3} alt="" />
        </li>
        <li>
          {" "}
          <img src={logo4} alt="" />
        </li>
        <li>
          <img src={logo5} alt="" />
        </li>

        <img src={logo6} alt="" />
      </Carousel>
    </div>
  );
}

export default Slider;
