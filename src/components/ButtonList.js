import React from 'react'

const List = ["All", "Music", "Gaming", "Sports", "Cricket", "JavaScript", "React", "Arijit Singh", "Kabbadi", "News", "Weather"]
const ButtonList = () => {
  return (
    <div className="m-4">
      {List.map((item, index)=>(
      <button key={index} className="px-2 py-1 mx-4 rounded-md hover:border">{item}</button>
      ))}
    </div>
  )
}

export default ButtonList