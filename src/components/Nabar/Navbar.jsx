import React from "react";
import styles from "./navbar.module.css";
import { BsPerson, BsHeart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery, TbSearch } from "react-icons/tb";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxLoop } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineOrderedList, AiOutlineRight } from "react-icons/ai";
import logo from "./logo.png";

function Navbar() {
  return (
    <div div className={styles.navbar}>
      <div className={styles.top}>
        <div className={styles.left}>
          Welcome to Worldwide Electronics Store
        </div>
        <div className={styles.right}>
          <div>
            <IoLocationOutline /> Store Locator
            <span>|</span>
          </div>
          <div>
            {" "}
            <TbTruckDelivery />
            Track your account
            <span>|</span>
          </div>
          <div>
            <MdOutlineShoppingBag />
            Shop
            <span>|</span>
          </div>
          <div>
            {" "}
            <BsPerson />
            My Account
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.down}>
        <div className={styles.ham1}>
          <GiHamburgerMenu />
        </div>
        <div className={styles.electro}>
          <img src={logo} alt="sbu" />{" "}
        </div>
        <div className={styles.searchmain}>
          <div className={styles.ham}>
            <GiHamburgerMenu />
          </div>
          <form className={styles.search} action="kk">
            <input type="search" placeholder="Search for Products" />
            <div>
              <TbSearch />
            </div>
          </form>
        </div>
        <div className={styles.logos}>
          <div className={styles.none}>
            <RxLoop />
          </div>
          <div className={styles.none}>
            {" "}
            <BsHeart />
          </div>
          <div className={styles.block}>
            <TbSearch />
          </div>
          <div>
            {" "}
            <BsPerson />
          </div>
          <div>
            {" "}
            <MdOutlineShoppingBag />
          </div>
          <p>$0.00</p>
        </div>
      </div>
      <div className={styles.downmost}>
        <div className={styles.downclas}>
          <div className={styles.allpage}>
            All Pages <RiArrowDropDownLine />
          </div>
          <div> Featured Brands</div>
          <div>Trending Styles</div>
          <div> Gift Cards</div>
        </div>
        <div className={styles.doller}>Free Shipping on Orders $50+</div>
      </div>
      <div className={styles.card}>
        <article className={styles.cardicon}>
          <AiOutlineOrderedList /> All Departments
        </article>
        <div> Value of the day</div>
        <div className={styles.downline}></div>
        <div> Top 100 Offers</div>
        <div className={styles.downline}></div>
        <div> New Arrivals</div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day
          <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day
          <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day
          <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day
          <AiOutlineRight />
        </div>
        <div className={styles.downline}></div>
        <div>
          {" "}
          Value of the day
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
