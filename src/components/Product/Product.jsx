import React from "react";
import styles from "./Product.module.css";
import camera from "./cameras-resized.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Product() {
  return (
    <div>
      <div className={styles.slide}>
        <div className={styles.card}>
          <img src={camera} alt="" />
          <div className={styles.content}>
            <h1>
              catch big <br /> <b>deals</b> on the <br />
              cameras
            </h1>
            <div>
              {" "}
              <p>Shop now</p>
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={camera} alt="" />
          <div className={styles.content}>
            <h1>
              catch big <br /> <b>deals</b> on the <br />
              cameras
            </h1>
            <div>
              {" "}
              <p>Shop now</p>
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={camera} alt="" />
          <div className={styles.content}>
            <h1>
              catch big <br /> <b>deals</b> on the <br />
              cameras
            </h1>
            <div>
              {" "}
              <p>Shop now</p>
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src={camera} alt="" />
          <div className={styles.content}>
            <h1>
              catch big <br /> <b>deals</b> on the <br />
              cameras
            </h1>
            <div>
              {" "}
              <p>Shop now</p>
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
