import React from 'react'

const List = ["All", "Music", "Gaming", "Sports", "Cricket", "JavaScript", "React", "Arijit Singh", "Kabbadi", "News", "Weather"]
const ButtonList = () => {
  return (
    <div className="lg:m-4 lg:overflow-hidden max-[640px]:flex sm:flex sm:m-2 md:m-2 md:flex overflow-scroll">
      {List.map((item, index)=>(
      <button key={index} className="px-2 py-1 mx-4 md:mx-2 sm:mx-2 rounded-md hover:border">{item}</button>
      ))}
    </div>
  )
}

export default ButtonList