import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='menu absolute w-full h-56 flex flex-col items-center'>
        <Link className='text option-menu text-white py-2' to={"/"}>Chat</Link>
        <Link className='text option-menu text-white py-2' to={"/about"}>About</Link>
    </div>
  )
}

export default Menu