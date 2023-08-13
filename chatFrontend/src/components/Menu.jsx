import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Menu() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`menu overflow-hidden bg-black absolute w-4/5 h-48 flex flex-col items-center mx-auto left-0 right-0 rounded-lg ${
        darkMode && "bg-white"
      }`}
    >
      <Link
        className={`text option-menu text-white py-2 ${darkMode && "darkMode"}`}
        to={"/"}
      >
        Chat
      </Link>
      <Link
        className={`text option-menu text-white py-2 ${darkMode && "darkMode"}`}
        to={"/about"}
      >
        About
      </Link>
      <div
        className={`mb-change-theme hidden overflow-hidden w-32 ${
          darkMode ? " text-white" : " text-black"
        }`}
      >
        <input
          type="checkbox"
          className="mb-theme-btn opacity-0"
          id="checkbox"
          onChange={toggleDarkMode}
        />
        <label
          htmlFor="checkbox"
          className="mb-theme-lbl w-24 h-10 rounded-full relative pt-2 pb-3 px-3 flex justify-between items-center"
        >
          <Icon
            icon="ph:sun-fill"
            style={{ fontSize: "30px", color: "#3772FF" }}
          />
          <Icon
            icon="solar:moon-stars-bold"
            style={{ fontSize: "25px", color: "#3772FF" }}
          />
          <span className={"mb-ball w-8 h-8 absolute rounded-full"}></span>
        </label>
      </div>
    </div>
  );
}

export default Menu;
