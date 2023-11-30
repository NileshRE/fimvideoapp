import React, { useState } from 'react'
import { IoMenu, IoSearch  } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleDarkMode, toggleMenu } from '../utils/navSlice';
import { LuSunMoon } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";

const Header = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(true);
  const toggleMenuHeader = ()=>{
      dispatch(toggleMenu())
  }
  const toggleMode=()=>{
    setMode((prevMode)=>{
      const newMode = !prevMode;
    document.getElementById("root").style.backgroundColor = mode ? 'black' : 'white';
    document.getElementById("root").style.color = mode ? 'white' : 'black';
    dispatch(toggleDarkMode())
    return newMode
  });
  };

  return (
    <div className="pl-6 pr-2 py-1 grid grid-flow-col items-center shadow">
        <div className="flex items-center col-span-1">
        <IoMenu size={32} onClick={()=>toggleMenuHeader()} className="cursor-pointer" />
        <div className='w-28 ml-4'>
        <img className="rounded-md object-contain" src="./logo.png" alt="logo"/>
        </div>
        </div>
        <div className="col-span-10 flex items-center justify-center">
        <input className={`border rounded-l-full w-5/12 h-9 p-4 ${mode ? "bg-white" : ["bg-slate-800","border-none"].join(" ")}`} type="text" placeholder='Search'/>
        <button className={`px-3 py-2 rounded-r-full ${mode ? "bg-gray-200" : "bg-transparent"}`}><IoSearch size={20} color='grey'/></button>
        </div>
        <div className="col-span-1 flex justify-evenly">
        <button className="text-sm p-2 border rounded-full flex text-gray-400" onClick={()=>toggleMode()}>Change Mode {mode ? <RiMoonClearLine size={20} color="grey" />  : <LuSunMoon size={20} color="grey" /> } </button>
        <FaUserCircle size={32} />
        </div>
    </div>
  )
}

export default Header