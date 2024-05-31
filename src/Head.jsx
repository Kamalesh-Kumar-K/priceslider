import React, { useContext } from "react";

import "./Head.css";
import { useSelector } from "react-redux";

const Head = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <div className={`head-container ${theme === "dark" ? "dark-mode" : ""}`}>
        <h1 className="space"></h1>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
    </>
  );
};

export default Head;
