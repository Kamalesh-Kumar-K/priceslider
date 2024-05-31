import { createContext, useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Head from "./Head";
import Toggle from "./Toggle";

import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  return (
    <div className="App">
      <Head />
      <Toggle />
      <Card />
    </div>
  );
}

export default App;
