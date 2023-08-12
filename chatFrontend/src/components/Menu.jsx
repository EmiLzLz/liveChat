import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='absolute h-full bg-black w-60 flex flex-col items-center left-48'>
        <Link className='text option-menu text-white py-2' to={"/"}>Chat</Link>
        <Link className='text option-menu text-white py-2' to={"/about"}>About</Link>
    </div>
  )
}

export default Menu