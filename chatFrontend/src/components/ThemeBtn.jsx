import React from "react";
import { Icon } from '@iconify/react';
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function ThemeBtn() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`change-theme flex flex-col items-center overflow-hidden w-32 ${
        darkMode ? " text-white" : " text-black"
      }`}
    >
      <input
        type="checkbox"
        className="theme-btn opacity-0"
        id="checkbox"
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="checkbox"
        className="theme-lbl w-24 h-10 rounded-full relative pt-2 pb-3 px-3 flex justify-between items-center"
      >
        <Icon icon="ph:sun-fill" style={{ fontSize: "30px", color: "white" }} />
        <Icon
          icon="solar:moon-stars-bold"
          style={{ fontSize: "25px", color: "black" }}
        />
        <span className={"ball bg-black w-8 h-8 absolute rounded-full"}></span>
      </label>
    </div>
  );
}

export default ThemeBtn;
