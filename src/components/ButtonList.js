import React from 'react'
import { useFilterAPI, useVideosAPI } from './VideoContext'

const List = ["All", "Music", "Gaming", "Sports", "Cricket", "JavaScript", "React", "Arijit Singh", "Kabbadi", "News", "Weather"]
const ButtonList = () => {
  const {videosList} = useVideosAPI();
  const {setFilterList} = useFilterAPI();
  const handleButtonClick = (item) => {
    
    if (item === "All") {
      
      setFilterList(videosList);
    } else {
      
      setFilterList(videosList.filter((video) => video.snippet.description.includes(item)));
    }
  };
  return (
    <div className="lg:m-4 lg:overflow-hidden max-[640px]:flex sm:flex sm:m-2 md:m-2 md:flex overflow-scroll">
      {List.map((item, index)=>(
      <button key={index} 
      onClick={() => handleButtonClick(item)}
      className="px-2 py-1 mx-4 md:mx-2 sm:mx-2 rounded-md hover:border">{item}</button>
      ))}
    </div>
  )
}

export default ButtonList