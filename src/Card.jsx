import React, { useContext, useState } from "react";
import "./Card.css";

import { useSelector } from "react-redux";

const Card = () => {
  const { theme } = useSelector((state) => state.theme);
  const [slideValue, setSlideValue] = useState(50);
  const [views, setViews] = useState("100K PAGEVIEWS");
  const [price, setPrice] = useState(16);

  const handleSlideChange = (e) => {
    const newValue = e.target.value;
    setSlideValue(newValue);
    const slider = document.querySelector(".slider");
    const color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${newValue}%, hsl(224, 65%, 95%) ${newValue}%)`;
    slider.style.background = color;
    if (newValue <= 20) {
      setViews("10K PAGEVIEWS");
      setPrice(8.0);
    } else if (newValue <= 40) {
      setViews("50K PAGEVIEWS");
      setPrice(12.0);
    } else if (newValue <= 60) {
      setViews("100K PAGEVIEWS");
      setPrice(16.0);
    } else if (newValue <= 80) {
      setViews("500K PAGEVIEWS");
      setPrice(24.0);
    } else {
      setViews("1M PAGEVIEWS");
      setPrice(36.0);
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={`card-container ${theme === "dark" ? "dark-mode" : ""}`}>
      <div className="card-top">
        <div className="viewsPrice">
          <span className="viewsClass">{views}</span>
          <div className="priceBar">
            <span className="price">
              $
              {isChecked ? (price - 0.25 * price).toFixed(2) : price.toFixed(2)}{" "}
            </span>{" "}
            <span className="month">/month</span>
          </div>
        </div>
        <div className="slideContainer">
          <input
            type="range"
            min={1}
            max={100}
            value={slideValue}
            onChange={handleSlideChange}
            className="slider"
            id="myRange"
          />
        </div>

        <div className="billing_part">
          <p>Monthly Billing</p>
          <input
            type="checkbox"
            name="checkbox"
            className="billType"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="yearlyBill">Yearly Billing</p>
        </div>
      </div>
      <div className="card-bottom">
        <ul className="addons_part">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>

        <div className="button_part">
          <button className="btn">Start my trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
