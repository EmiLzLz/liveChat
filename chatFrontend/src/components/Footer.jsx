import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import ThemeContext from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`Footer w-full py-8 bg-black text-white ${
        darkMode && "bg-white"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className={`text ${darkMode && "text-black"}`}>
          Made by: Emiliano Lopez
        </p>
        <div className="social-links flex items-center gap-4 pt-8 md:pt-0">
          <div className="linkedin-link flex items-center gap-1">
            <Icon
              icon="bi:linkedin"
              style={{ fontSize: "30px", color: "#3772FF" }}
            />
            {/* AGREGAR LINKS */}
            <a
              className={`smallText ${darkMode && "text-black"}`}
              href="https://www.linkedin.com/in/emiliano-lopez-lopez"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="gitub-link flex items-center gap-1">
            <Icon
              icon="mdi:github"
              style={{ fontSize: "30px", color: "#3772FF" }}
            />
            <a
              className={`smallText ${darkMode && "text-black"}`}
              href="https://github.com/EmiLzLz"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
