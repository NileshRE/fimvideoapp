import React, { useEffect, useState } from 'react'
import { IoMenu, IoSearch  } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, toggleMenu } from '../utils/navSlice';
import { LuSunMoon } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheData } from '../utils/searchSlice';
import { API_KEY } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const cache = useSelector((store)=>store.search)
  const [mode, setMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(()=>{
   const timer = setTimeout(()=>{
    if(cache[searchQuery]){
      setSuggestion(cache[searchQuery])
    }else {
    searchSugg();
    }
  },200);

   return () =>{
    clearTimeout(timer);
   }
  },[searchQuery])

  const searchSugg = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const response = await data.json();
    setSuggestion(response[1]);
    dispatch(cacheData({[searchQuery]:response[1]}))
  }

  const getSearchVideos = async(searchQuery)=>{
    if (!searchQuery) return;
    const videodata = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&regionCode=IN&type=video&key=${API_KEY}`)
    const response = await videodata.json();
    console.log(response.items);
  }

  const toggleMenuHeader = ()=>{
      dispatch(toggleMenu())
  }

  const toggleMode=()=>{
    setMode((prevMode)=>{
      const newMode = !prevMode;
    document.getElementById("root").style.backgroundColor = mode ? 'black' : 'white';
    document.getElementById("root").style.color = mode ? 'white' : 'black';
    document.getElementById("list").style.backgroundColor = mode ? 'black' : 'white';
    dispatch(toggleDarkMode())
    return newMode
  });
  };

  return (
    <div className="pl-6 pr-2 py-1 grid grid-flow-col items-center shadow relative">
        <div className="flex items-center col-span-1">
        <IoMenu size={32} onClick={()=>toggleMenuHeader()} className="cursor-pointer" />
        <div className='w-28 ml-4'>
        <img className="rounded-md object-contain" src="./logo.png" alt="logo"/>
        </div>
        </div>
        <div className="col-span-10 flex items-center justify-center relative max-[640px]:hidden">
        <input className={`border rounded-l-full w-3/12 h-9 p-4 shadow-md ${mode ? "bg-white" : ["bg-slate-800","border-none"].join(" ")}`} type="text" placeholder='Search'
         value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button onClick={getSearchVideos} className={`px-3 py-2 rounded-r-full shadow-md z-30 ${mode ? "bg-slate-100" : "bg-transparent"}`}><IoSearch size={20} color='grey'/></button>
        <div className="absolute z-10 top-8 right-auto rounded-md mt-1 shadow-md bg-slate-100" id="list">
          <ul>
            {suggestion?.map(item=>
            <li key={item} onClick={()=>setSearchQuery(item)} className="py-1 px-2 flex items-center hover:border"><IoSearch size={16} color='grey' /><span className='ml-4'>{item}</span></li>)}
          </ul>
        </div>
        </div>
        <div className="col-span-1 flex justify-evenly">
        <button className="text-sm p-2 border rounded-full flex text-gray-400" onClick={()=>toggleMode()}>{mode ? <RiMoonClearLine size={28} color="grey" />  : <LuSunMoon size={28} color="white" /> } </button>
        </div>
    </div>
  )
}

export default Header