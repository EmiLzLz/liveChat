import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import ThemeBtn from "./ThemeBtn";
import Menu from "./Menu";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { darkMode } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className={`header w-full py-5 ${darkMode && "bg-black"}`}>
      <div className="container flex items-center justify-between mx-auto">
        <button className="menu-btn" onClick={toggleMenu}><Icon icon="gg:menu-left" style={{ fontSize: "30px", color: "#3772FF" }} /></button>
        <h1 className="title text-[#14FFF7]">LIVE CHAT</h1>
        <ThemeBtn/>
      </div>
      {showMenu && <Menu/>}
    </div>
  );
}

export default Header;
