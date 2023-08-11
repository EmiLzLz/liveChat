import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
        <Link className='option-menu' to={"/"}>Chat</Link>
        <Link className='option-menu' to={"/about"}>About</Link>
    </div>
  )
}

export default Menu