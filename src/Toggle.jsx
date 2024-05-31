import React, { useContext } from "react";
import "./Toggle.css";
import { toggleTheme } from "./slices/themeSlice";
import { useSelector, useDispatch } from "react-redux";
const Toggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`toggle ${theme === "dark" ? "dark-mode" : ""}`}>
      <p className="toggle-text">Light</p>
      <input
        type="checkbox"
        name="toggle"
        className="toggle-input"
        onChange={() => dispatch(toggleTheme())}
      />
      <p className="toggle-text">Dark</p>
    </div>
  );
};

export default Toggle;
