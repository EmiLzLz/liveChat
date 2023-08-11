import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ThemeBtn from "./ThemeBtn";
import Menu from "./Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-full py-5 relative">
      <div className="container flex items-center justify-between mx-auto">
        <button onClick={toggleMenu}><Icon icon="gg:menu-left" style={{ fontSize: "30px", color: "black" }} /></button>
        <h1 className="text-3xl font-extrabold">LIVE CHAT</h1>
        <ThemeBtn />
      </div>
      {showMenu && <Menu/>}
    </div>
  );
}

export default Header;
