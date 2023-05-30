import React from "react";
import styles from "./Cardpro.module.css";
import consalimg from "./consal-300x300.png";
import { BsHeart } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import { FaArrowAltCircleRight } from "react-icons/fa";
import img from "./WirelessSound-300x300.png";

function Cardpro() {
  return (
    <section className={styles.cardpro}>
      <div className={styles.console}>
        <h1>Special Offer</h1>
        <div>
          <img src={consalimg} alt="" />
          <h2>Game Console Controller + USB 3.0 Cable</h2>
          <h3>$99.00</h3>
        </div>
      </div>

      <div className={styles.right}>
        <nav>
          <li className={styles.active}>Features</li>
          <li>On Sale</li>
          <li>Top rated</li>
        </nav>

        <div className={styles.line}></div>
        <div className={styles.rightbox}>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h6>Audio Speaker</h6>
            <h2>Wireless Audio System Multiroom 360</h2>
            <img src={img} alt="" />
            <div className={styles.arrow}>
              {" "}
              <p>$22,99.00</p>
              <FaArrowAltCircleRight />
            </div>
            <div className={styles.line2}></div>
            <div className={styles.bot}>
              <div>
                {" "}
                <BsHeart />
                Whishlist
              </div>
              <div>
                <RxLoop />
                Compare
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardpro;
